"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import Image from "next/image";
// import Link from "next/link"; // Replaced by next-intl Link
import { Link } from "@/i18n/routing";
import { SERVICES } from "@/data/services";
import { useTranslations } from "next-intl";

// Display only the top 6 services on the homepage
const homepageServices = SERVICES.slice(0, 6);

const slugToKeyMap: Record<string, string> = {
    "sea-freight": "seaFreight",
    "air-freight": "airFreight",
    "road-transport": "inlandTrucking",
    "project-cargo": "projectCargo",
    "customs-brokerage": "customsBrokerage",
    "value-added": "valueAdded"
};

export function Services() {
    const t = useTranslations("services");
    const tCommon = useTranslations("common");

    return (
        <Section background="gray" id="services" className="py-24">
            <Container>
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <div className="inline-block rounded-full bg-primary-900/5 px-4 py-1.5 text-sm font-semibold text-primary-700 tracking-wide uppercase">
                        {t("badge")}
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                        {t("title")}
                    </h2>
                    <p className="max-w-[700px] text-gray-500 md:text-xl leading-relaxed">
                        {t("description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {homepageServices.map((service, index) => {
                        const Icon = service.icon;
                        const translationKey = slugToKeyMap[service.slug];

                        // Fallback if key not found (though it should be)
                        const title = translationKey ? t(translationKey as any) : service.title;
                        const description = translationKey ? t(`${translationKey}Desc` as any) : service.shortDescription;

                        return (
                            <div
                                key={index}
                                className="group relative h-[450px] w-full overflow-hidden rounded-3xl bg-gray-900 shadow-xl transition-shadow duration-300 hover:shadow-2xl"
                            >
                                {/* Background Image - Simple Scale on Hover (GPU optimized) */}
                                <div className="absolute inset-0 transition-transform duration-500 ease-out will-change-transform group-hover:scale-105">
                                    <Image
                                        src={service.image}
                                        alt={title}
                                        fill
                                        className="object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-70"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                </div>

                                {/* Content Layer */}
                                <div className="absolute inset-0 flex flex-col justify-end p-8">
                                    {/* Icon Top Right - Arrow indicates movement */}
                                    <div className="absolute top-6 right-6 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white">
                                            <ArrowUpRight className="h-6 w-6" />
                                        </div>
                                    </div>

                                    {/* Main Content */}
                                    <div className="relative z-20">
                                        {/* Icon with simple scale on hover */}
                                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500 text-white shadow-lg shadow-primary-500/30 transition-transform duration-300 group-hover:scale-110">
                                            <Icon className="h-6 w-6" />
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                                            {title}
                                        </h3>

                                        <p className="text-gray-300 text-base leading-relaxed mb-6 line-clamp-2">
                                            {description}
                                        </p>

                                        {/* Action Buttons - SIMPLIFIED VISIBILITY */}
                                        <div className="flex gap-3 mt-4 relative z-30">
                                            {/* Use Link from next-intl, handled correctly by middleware */}
                                            <Link href={`/quote?service=${service.slug}`} className="w-full block">
                                                <Button
                                                    variant="primary"
                                                    size="sm"
                                                    className="w-full shadow-lg shadow-primary-900/20 active:scale-95"
                                                >
                                                    {tCommon("getQuote")}
                                                </Button>
                                            </Link>
                                            <Link href={`/services/${service.slug}`} className="w-full block">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white hover:border-white/40 active:scale-95"
                                                >
                                                    {t("details")}
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
}
