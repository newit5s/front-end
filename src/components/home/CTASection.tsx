"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link"; // Need to check if this should be locale-aware Link
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
// Import Link from routing configuration for correct locale handling
import { Link as I18nLink } from "@/i18n/routing";

export function CTASection() {
    const t = useTranslations("cta");

    return (
        <Section className="relative py-20 bg-primary-900 overflow-hidden">
            {/* Background Pattern/Image Overlay */}
            <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}>
            </div>

            {/* Glowing Orbs */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <Container className="relative z-10">
                <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                        {t("titleRegular")} <span className="text-primary-300">{t("titleHighlight")}</span>
                    </h2>
                    <p className="text-lg md:text-xl text-primary-100 max-w-2xl">
                        {t("description")}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <I18nLink href="/quote" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full font-semibold text-base px-8 py-6 bg-white text-primary-900 hover:bg-primary-50 hover:text-primary-900">
                                {t("getQuote")}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </I18nLink>
                        <I18nLink href="/contact" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full font-semibold text-base px-8 py-6 border-primary-400 text-white hover:bg-primary-800 hover:text-white hover:border-primary-300 backdrop-blur-sm bg-transparent">
                                {t("contactSales")}
                            </Button>
                        </I18nLink>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
