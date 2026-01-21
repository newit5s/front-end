import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { NEWS_ARTICLES, CATEGORIES, NewsCategory } from "@/data/news";
import { ArrowRight, Calendar, Clock, Newspaper } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
    searchParams: Promise<{ category?: string }>;
}

export default async function NewsPage({ searchParams }: Props) {
    const params = await searchParams;
    const selectedCategory = params.category as NewsCategory | undefined;

    const filteredArticles = selectedCategory
        ? NEWS_ARTICLES.filter(a => a.category === selectedCategory)
        : NEWS_ARTICLES;

    const featuredArticle = NEWS_ARTICLES.find(a => a.featured);

    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <Navbar />

            <main className="flex-1">
                {/* Hero Section */}
                <div className="relative bg-secondary-900 py-20 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=2070"
                            alt="News"
                            fill
                            className="object-cover opacity-20"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/80 to-secondary-900" />
                    </div>

                    <Container className="relative z-10">
                        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium backdrop-blur-sm">
                                <Newspaper className="h-4 w-4" /> Updates & Insights
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                                Latest News
                            </h1>
                            <p className="text-lg text-white/70 max-w-2xl">
                                Stay informed with the latest updates from our team and the logistics industry.
                            </p>
                        </div>
                    </Container>
                </div>

                {/* Category Filter */}
                <Section className="py-8 bg-white border-b">
                    <Container>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <Link href="/news">
                                <Button
                                    variant={!selectedCategory ? "primary" : "outline"}
                                    size="sm"
                                >
                                    All
                                </Button>
                            </Link>
                            {Object.entries(CATEGORIES).map(([key, { label, icon: Icon }]) => (
                                <Link key={key} href={`/news?category=${key}`}>
                                    <Button
                                        variant={selectedCategory === key ? "primary" : "outline"}
                                        size="sm"
                                        className="gap-2"
                                    >
                                        <Icon className="h-4 w-4" />
                                        {label}
                                    </Button>
                                </Link>
                            ))}
                        </div>
                    </Container>
                </Section>

                {/* Featured Article */}
                {!selectedCategory && featuredArticle && (
                    <Section className="py-12 bg-white">
                        <Container>
                            <Link href={`/news/${featuredArticle.slug}`} className="group block">
                                <div className="relative overflow-hidden rounded-2xl bg-gray-900">
                                    <div className="absolute inset-0 z-0">
                                        <Image
                                            src={featuredArticle.image}
                                            alt={featuredArticle.title}
                                            fill
                                            className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                                    </div>
                                    <div className="relative z-10 p-8 md:p-12 flex flex-col justify-end min-h-[400px] md:min-h-[500px]">
                                        <Badge className={CATEGORIES[featuredArticle.category].color + " mb-4 w-fit"}>
                                            Featured • {CATEGORIES[featuredArticle.category].label}
                                        </Badge>
                                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-primary-300 transition-colors">
                                            {featuredArticle.title}
                                        </h2>
                                        <p className="text-gray-300 text-lg mb-6 max-w-2xl line-clamp-2">
                                            {featuredArticle.excerpt}
                                        </p>
                                        <div className="flex items-center gap-6 text-gray-400 text-sm">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4" /> {featuredArticle.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="h-4 w-4" /> {featuredArticle.readTime}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Container>
                    </Section>
                )}

                {/* Articles Grid */}
                <Section className="py-16" background="gray">
                    <Container>
                        {selectedCategory && (
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-bold text-gray-900">
                                    {CATEGORIES[selectedCategory].label}
                                </h2>
                                <span className="text-gray-500">
                                    {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
                                </span>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredArticles.map((article) => (
                                <Link key={article.id} href={`/news/${article.slug}`} className="group">
                                    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                        {/* Image */}
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={article.image}
                                                alt={article.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <Badge className={CATEGORIES[article.category].color}>
                                                    {CATEGORIES[article.category].label}
                                                </Badge>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <CardContent className="flex-1 flex flex-col p-6">
                                            <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" /> {article.date}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="h-3 w-3" /> {article.readTime}
                                                </span>
                                            </div>

                                            <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                                                {article.title}
                                            </h3>

                                            <p className="text-gray-600 text-sm line-clamp-3 flex-1">
                                                {article.excerpt}
                                            </p>

                                            <div className="mt-4 flex items-center text-primary-600 text-sm font-medium">
                                                Read Article <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>

                        {filteredArticles.length === 0 && (
                            <div className="text-center py-16">
                                <p className="text-gray-500 text-lg">No articles found in this category.</p>
                                <Link href="/news" className="mt-4 inline-block">
                                    <Button variant="outline">View All Articles</Button>
                                </Link>
                            </div>
                        )}
                    </Container>
                </Section>

                {/* Newsletter CTA */}
                <Section className="py-16 bg-primary-900">
                    <Container>
                        <div className="text-center max-w-2xl mx-auto">
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Stay Updated
                            </h2>
                            <p className="text-primary-100 mb-8">
                                Subscribe to our newsletter to receive the latest industry insights and company updates directly in your inbox.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-500"
                                />
                                <Button variant="secondary" size="lg">
                                    Subscribe
                                </Button>
                            </div>
                        </div>
                    </Container>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
