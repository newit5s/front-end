import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { ArrowLeft, ArrowRight, CheckCircle2, Phone, Mail, Plane, Ship, Truck, Package, Shield, Warehouse, BarChart } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

// Define static metadata mapping
const SERVICE_ICONS: Record<string, any> = {
    "sea-freight": Ship,
    "air-freight": Plane,
    "road-transport": Truck,
    "project-cargo": Warehouse,
    "customs-brokerage": Shield,
    "value-added": Package,
    "solution-consulting": BarChart
};

const SERVICE_IMAGES: Record<string, string> = {
    "sea-freight": "/assets/cinematic/ship.png",
    "air-freight": "/assets/cinematic/plane.png",
    "road-transport": "/assets/cinematic/truck.png",
    "project-cargo": "/assets/cinematic/warehouse.png",
    "customs-brokerage": "/assets/cinematic/customs.png",
    "value-added": "/assets/cinematic/delivery.png",
    "solution-consulting": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
};

const ALL_SLUGS = [
    "sea-freight", "air-freight", "road-transport", "project-cargo", "customs-brokerage", "value-added", "solution-consulting"
];

interface ServiceDetailProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ServiceDetailPage(props: ServiceDetailProps) {
    const params = await props.params;
    const slug = params.slug;

    // Validate slug
    if (!ALL_SLUGS.includes(slug)) {
        notFound();
    }

    // Since we are inside an async Server Component, we can use await with useTranslations if valid,
    // but typically useTranslations is a hook. In Server Components, we use getTranslations.
    // However, to keep it simple and consistent with client components structure (and since we might move to 'use client' if interaction needed),
    // we'll just use 'useTranslations' but we need to make this component a Client Component OR use 'getTranslations' (async).
    // Given the props usage and structure, let's treat this file as a Server Component but we need to fetch translations.
    // ACTUALLY: The previous file was missing "use client" but importing client hooks? No, it passed params.
    // Let's make this a Client Component to easily use `useTranslations`, or Keep Server and use strict async patterns.
    // For simplicity with array mapping: Client Component is easier to use t.raw().
    return <ServiceDetailContent slug={slug} />;
}

// Client wrapper to use hooks comfortably
import { useMessages } from "next-intl";

function ServiceDetailContent({ slug }: { slug: string }) {
    const t = useTranslations("servicesData");
    const tPage = useTranslations("servicesPage");

    const messages = useMessages() as any;
    // Safe access to nested keys if t.raw() behaves oddly in some envs
    const serviceData = messages.servicesData?.[slug];

    if (!serviceData) {
        notFound();
        return null;
    }

    const Icon = SERVICE_ICONS[slug] || Package;
    const image = SERVICE_IMAGES[slug];

    // Arrays from translation
    const features = (serviceData.features as string[]) || [];
    const benefits = (serviceData.benefits as string[]) || [];

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1">
                {/* Service Hero */}
                <section className="relative h-[40vh] md:h-[50vh] min-h-[400px] flex items-center justify-center bg-gray-900 overflow-hidden">
                    <div
                        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
                        style={{ backgroundImage: `url('${image}')` }}
                    />
                    <div className="absolute inset-0 z-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

                    <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
                        <Link href="/services" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors">
                            <ArrowLeft className="mr-2 h-4 w-4" /> {tPage("backToServices")}
                        </Link>
                        <div className="flex justify-center mb-6">
                            <div className="h-16 w-16 rounded-2xl bg-primary-600/90 text-white flex items-center justify-center backdrop-blur-sm shadow-xl">
                                <Icon className="h-8 w-8" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
                            {t(`${slug}.title`)}
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                            {t(`${slug}.shortDescription`)}
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-12">
                                {/* Overview */}
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-primary-500 pl-4">
                                        {tPage("serviceOverview")}
                                    </h2>
                                    <p className="text-lg text-gray-600 leading-relaxed text-justify">
                                        {t(`${slug}.fullDescription`)}
                                    </p>
                                </div>

                                {/* Features Grid */}
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-6">{tPage("keyCapabilities")}</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                                                <div className="h-2 w-2 rounded-full bg-primary-500 mr-3" />
                                                <span className="font-medium text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Benefits with icons */}
                                <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                                        {tPage("whyChoose", { service: t(`${slug}.title`) })}
                                    </h3>
                                    <ul className="space-y-4">
                                        {benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle2 className="h-6 w-6 text-primary-600 shrink-0" />
                                                <span className="text-gray-700 text-lg">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-1 space-y-8">
                                {/* Quote Card */}
                                <Card className="bg-gray-900 text-white border-none shadow-2xl">
                                    <CardContent className="p-8 space-y-6">
                                        <h3 className="text-2xl font-bold">{tPage("requestQuoteCardTitle")}</h3>
                                        <p className="text-gray-300">
                                            {tPage("requestQuoteCardDesc")}
                                        </p>
                                        <Link href={`/quote?service=${slug}`}>
                                            <Button size="lg" className="w-full bg-white text-gray-900 hover:bg-gray-100 font-bold">
                                                {tPage("getQuoteNow")}
                                            </Button>
                                        </Link>
                                    </CardContent>
                                </Card>

                                {/* Contact Info */}
                                <div className="p-6 rounded-xl border border-gray-200 space-y-4">
                                    <h4 className="font-semibold text-gray-900">{tPage("contactExpert")}</h4>
                                    <p className="text-sm text-gray-500">
                                        {tPage("contactExpertDesc")}
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 text-gray-700">
                                            <Phone className="h-5 w-5 text-primary-500" />
                                            <span className="font-medium">+84 938 975 329</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-700">
                                            <Mail className="h-5 w-5 text-primary-500" />
                                            <span className="font-medium">sales@seaairglobal.com.vn</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Navigation Links */}
                                <nav className="space-y-1">
                                    <h4 className="font-semibold text-gray-900 mb-3 px-2">{tPage("otherServices")}</h4>
                                    {ALL_SLUGS.filter(s => s !== slug).map(s => (
                                        <Link
                                            key={s}
                                            href={`/services/${s}`}
                                            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 text-gray-600 hover:text-primary-600 transition-colors group"
                                        >
                                            <span className="font-medium">{t(`${s}.title`)}</span>
                                            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        </Link>
                                    ))}
                                </nav>
                            </div>

                        </div>
                    </div>
                </section>

                {/* CTA Banner */}
                <section className="bg-primary-600 py-12">
                    <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-white">
                            <h2 className="text-2xl md:text-3xl font-bold">{tPage("readyToStart")}</h2>
                            <p className="text-primary-100">{tPage("readyDesc")}</p>
                        </div>
                        <div className="flex gap-4">
                            <Link href="/contact">
                                <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100 border-none font-bold">
                                    {tPage("talkToExpert")}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
