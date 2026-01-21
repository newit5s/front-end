import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Plane, Ship, Truck, Package, Shield, Warehouse, BarChart } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link as I18nLink } from "@/i18n/routing";

// Define the structure, but text comes from useTranslations
const SERVICE_IDS = [
    { id: "air-freight", icon: Plane, image: "/assets/cinematic/plane.png" },
    { id: "sea-freight", icon: Ship, image: "/assets/cinematic/ship.png" },
    { id: "project-cargo", icon: Warehouse, image: "/assets/cinematic/warehouse.png" },
    { id: "customs-brokerage", icon: Shield, image: "/assets/cinematic/customs.png" },
    { id: "road-transport", icon: Truck, image: "/assets/cinematic/truck.png" },
    { id: "value-added", icon: Package, image: "/assets/cinematic/delivery.png" },
    // Optionally include Solution Consulting if desired, but check image availability
];

export default function ServicesPage() {
    const t = useTranslations("servicesData");
    const tPage = useTranslations("servicesPage");

    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <Navbar />

            <main className="flex-1">
                {/* Hero Section - Cinematic */}
                <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gray-900">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070"
                            alt="Logistics Hub"
                            fill
                            className="object-cover opacity-60"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/50 to-gray-50" />
                    </div>

                    <Container className="relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-300 text-sm font-medium mb-6 backdrop-blur-sm">
                            <Plane className="h-4 w-4" /> {tPage("heroBadge")}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            {tPage("heroTitleRegular")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-orange-400">{tPage("heroTitleGradient")}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                            {tPage("heroDescription")}
                        </p>
                    </Container>
                </div>

                {/* Services List - Cinematic Cards */}
                <Section className="-mt-20 relative z-20 pb-32 bg-transparent">
                    <Container>
                        <div className="space-y-24">
                            {SERVICE_IDS.map((service, index) => {
                                const isEven = index % 2 === 0;
                                // Get array of features from translation
                                // Note: next-intl returns arrays as objects or needs special handling if structured
                                // Here we assume we can get keys or structure. 
                                // Since we defined features as an array in JSON, standard t.raw() might be needed or key access.
                                // simpler: t.raw(`${service.id}.features`) returns the array if configured.
                                // However, simple t() only returns string. 
                                // We'll try to use t.raw for arrays.
                                const features = (t.raw(`${service.id}.features`) as string[]) || [];

                                return (
                                    <div key={service.id} className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${!isEven ? 'md:flex-row-reverse' : ''}`}>

                                        {/* Cinematic Image Side */}
                                        <div className="w-full md:w-1/2 relative group">
                                            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-orange-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
                                            <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                                                <Image
                                                    src={service.image}
                                                    alt={t(`${service.id}.title`)}
                                                    fill
                                                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />

                                                {/* Floating Icon */}
                                                <div className="absolute bottom-6 left-6 h-16 w-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-white shadow-lg">
                                                    <service.icon className="h-8 w-8" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content Side */}
                                        <div className="w-full md:w-1/2 space-y-6">
                                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                                {t(`${service.id}.title`)}
                                            </h2>
                                            <p className="text-lg text-gray-600 leading-relaxed">
                                                {t(`${service.id}.shortDescription`)}
                                            </p>

                                            <ul className="space-y-3 pt-2">
                                                {features.slice(0, 3).map((feature, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-gray-700">
                                                        <div className="h-2 w-2 rounded-full bg-primary-500" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="pt-4">
                                                <I18nLink href={`/quote?service=${service.id}`}>
                                                    <Button size="lg" className="shadow-lg shadow-primary-500/20">
                                                        {tPage("getQuote")} <ArrowRight className="ml-2 h-4 w-4" />
                                                    </Button>
                                                </I18nLink>
                                                <I18nLink href={`/services/${service.id}`} className="ml-4 text-primary-600 hover:underline">
                                                    {t("value-added.details") || "Details"}
                                                </I18nLink>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Container>
                </Section>

                {/* CTA Box */}
                <Section background="gray" className="py-20 border-t border-gray-200">
                    <Container>
                        <div className="bg-white rounded-3xl p-12 text-center shadow-xl border border-gray-100 max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">{tPage("customSolutionTitle")}</h2>
                            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                                {tPage("customSolutionDesc")}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <I18nLink href="/contact">
                                    <Button size="lg" variant="primary">{t("cta.contactSales", { defaultMessage: "Contact Sales" })}</Button>
                                </I18nLink>
                                <Button size="lg" variant="outline">{tPage("viewCaseStudies")}</Button>
                            </div>
                        </div>
                    </Container>
                </Section>
            </main>

            <Footer />
        </div>
    );
}
