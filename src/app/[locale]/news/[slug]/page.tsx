import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { NEWS_ARTICLES, CATEGORIES, getArticleBySlug, getRelatedArticles } from "@/data/news";
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Facebook, Twitter, Linkedin, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{ slug: string }>;
}

// Generate static paths for all articles
export async function generateStaticParams() {
    return NEWS_ARTICLES.map((article) => ({
        slug: article.slug,
    }));
}

export default async function NewsArticlePage({ params }: Props) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    const relatedArticles = getRelatedArticles(slug, 3);
    const categoryInfo = CATEGORIES[article.category];

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Navbar />

            <main className="flex-1">
                {/* Hero Section */}
                <div className="relative bg-secondary-900 py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover opacity-30"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary-900 via-secondary-900/80 to-secondary-900/60" />
                    </div>

                    <Container className="relative z-10">
                        {/* Back Link */}
                        <Link
                            href="/news"
                            className="inline-flex items-center text-white/70 hover:text-white transition-colors mb-8"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" /> Back to News
                        </Link>

                        <div className="max-w-3xl">
                            <Badge className={categoryInfo.color + " mb-4"}>
                                {categoryInfo.label}
                            </Badge>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                {article.title}
                            </h1>
                            <p className="text-lg text-white/80 mb-8">
                                {article.excerpt}
                            </p>

                            {/* Meta */}
                            <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                                        <User className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">{article.author.name}</p>
                                        <p className="text-white/60 text-xs">{article.author.role}</p>
                                    </div>
                                </div>
                                <span className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" /> {article.date}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" /> {article.readTime}
                                </span>
                            </div>
                        </div>
                    </Container>
                </div>

                {/* Article Content */}
                <Section className="py-16">
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            {/* Main Content */}
                            <article className="lg:col-span-8">
                                <div
                                    className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-600 prose-a:text-primary-600 prose-strong:text-gray-900 prose-blockquote:border-l-primary-500 prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic"
                                    dangerouslySetInnerHTML={{ __html: formatContent(article.content) }}
                                />

                                {/* Share Section */}
                                <div className="mt-12 pt-8 border-t">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Share2 className="h-5 w-5" />
                                            <span className="font-medium">Share this article</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <Button variant="outline" size="sm" className="gap-2">
                                                <Facebook className="h-4 w-4" /> Facebook
                                            </Button>
                                            <Button variant="outline" size="sm" className="gap-2">
                                                <Twitter className="h-4 w-4" /> Twitter
                                            </Button>
                                            <Button variant="outline" size="sm" className="gap-2">
                                                <Linkedin className="h-4 w-4" /> LinkedIn
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            {/* Sidebar */}
                            <aside className="lg:col-span-4 space-y-8">
                                {/* Author Card */}
                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="font-semibold text-gray-900 mb-4">About the Author</h3>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                                                <User className="h-6 w-6 text-primary-600" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-gray-900">{article.author.name}</p>
                                                <p className="text-sm text-gray-500">{article.author.role}</p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            Bringing you the latest insights and news from the logistics industry.
                                        </p>
                                    </CardContent>
                                </Card>

                                {/* Related Articles */}
                                {relatedArticles.length > 0 && (
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-4">Related Articles</h3>
                                        <div className="space-y-4">
                                            {relatedArticles.map((related) => (
                                                <Link key={related.id} href={`/news/${related.slug}`} className="group block">
                                                    <Card className="overflow-hidden hover:shadow-md transition-shadow">
                                                        <div className="flex gap-4 p-4">
                                                            <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                                                                <Image
                                                                    src={related.image}
                                                                    alt={related.title}
                                                                    fill
                                                                    className="object-cover"
                                                                />
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <h4 className="font-medium text-gray-900 line-clamp-2 group-hover:text-primary-600 transition-colors text-sm">
                                                                    {related.title}
                                                                </h4>
                                                                <p className="text-xs text-gray-500 mt-1">{related.date}</p>
                                                            </div>
                                                        </div>
                                                    </Card>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* CTA Card */}
                                <Card className="bg-primary-900 text-white border-0">
                                    <CardContent className="p-6">
                                        <h3 className="font-semibold text-lg mb-2">Need Logistics Solutions?</h3>
                                        <p className="text-primary-100 text-sm mb-4">
                                            Get a customized quote for your shipping needs.
                                        </p>
                                        <Link href="/quote">
                                            <Button variant="secondary" className="w-full">
                                                Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </Link>
                                    </CardContent>
                                </Card>
                            </aside>
                        </div>
                    </Container>
                </Section>

                {/* More Articles */}
                <Section className="py-16 bg-gray-50">
                    <Container>
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold text-gray-900">More Articles</h2>
                            <Link href="/news">
                                <Button variant="outline" size="sm">
                                    View All <ArrowRight className="ml-1 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {NEWS_ARTICLES.filter(a => a.slug !== slug).slice(0, 3).map((item) => (
                                <Link key={item.id} href={`/news/${item.slug}`} className="group">
                                    <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                                        <div className="relative h-40 overflow-hidden">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <CardContent className="p-5">
                                            <Badge className={CATEGORIES[item.category].color + " mb-3"}>
                                                {CATEGORIES[item.category].label}
                                            </Badge>
                                            <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-primary-600 transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-gray-500 mt-2">{item.date}</p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </Container>
                </Section>
            </main>

            <Footer />
        </div>
    );
}

// Simple markdown-like to HTML converter
function formatContent(content: string): string {
    return content
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
        .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
        .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
        .replace(/^- (.*$)/gim, '<li>$1</li>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/^(.+)$/gim, (match) => {
            if (match.startsWith('<')) return match;
            return `<p>${match}</p>`;
        });
}
