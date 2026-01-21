import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { NEWS_ARTICLES, CATEGORIES } from "@/data/news";

export function LatestNews() {
    // Get first 3 articles for homepage
    const featuredNews = NEWS_ARTICLES.slice(0, 3);

    return (
        <Section background="gray" id="news">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div className="space-y-4 max-w-2xl">
                        <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800">
                            Updates & Insights
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                            Latest News
                        </h2>
                        <p className="text-gray-500 text-lg">
                            Stay informed with the latest updates from our team and the logistics industry.
                        </p>
                    </div>
                    <Link href="/news" className="hidden md:flex">
                        <Button variant="outline">
                            View All Articles <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredNews.map((item) => (
                        <Link key={item.id} href={`/news/${item.slug}`} className="group">
                            <Card className="h-full flex flex-col border-gray-200 hover:shadow-lg hover:border-primary-200 transition-all duration-300 overflow-hidden">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <Badge className={CATEGORIES[item.category].color}>
                                            {CATEGORIES[item.category].label}
                                        </Badge>
                                    </div>
                                </div>
                                <CardHeader className="pb-3">
                                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {item.date}</span>
                                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.readTime}</span>
                                    </div>
                                    <CardTitle className="text-lg line-clamp-2 md:text-xl group-hover:text-primary-600 transition-colors">
                                        {item.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1 pb-6">
                                    <CardDescription className="line-clamp-3 text-sm">
                                        {item.excerpt}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter className="pt-0 text-primary-600 text-sm font-medium">
                                    Read Article <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 md:hidden">
                    <Link href="/news" className="w-full">
                        <Button variant="outline" className="w-full">
                            View All Articles
                        </Button>
                    </Link>
                </div>
            </Container>
        </Section>
    );
}
