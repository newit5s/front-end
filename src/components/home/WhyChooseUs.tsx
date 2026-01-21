import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Globe2, Clock, ShieldCheck, Headphones, TrendingUp, Award } from "lucide-react";
import { useTranslations } from "next-intl";

export function WhyChooseUs() {
    const t = useTranslations("whyChooseUs");

    const features = [
        {
            title: t("globalNetwork"),
            description: t("globalNetworkDesc"),
            icon: Globe2,
        },
        {
            title: t("onTimeDelivery"),
            description: t("onTimeDeliveryDesc"),
            icon: Clock,
        },
        {
            title: t("secureInsured"),
            description: t("secureInsuredDesc"),
            icon: ShieldCheck,
        },
        {
            title: t("support247"),
            description: t("support247Desc"),
            icon: Headphones,
        },
        {
            title: t("costEfficient"),
            description: t("costEfficientDesc"),
            icon: TrendingUp,
        },
        {
            title: t("industryCertified"),
            description: t("industryCertifiedDesc"),
            icon: Award,
        },
    ];

    return (
        <Section background="white">
            <Container>
                <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
                    {/* Left: Text Content */}
                    <div className="flex-1 space-y-6">
                        <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800">
                            {t("badge")}
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                            {t("title")}
                        </h2>
                        <p className="text-gray-500 text-lg">
                            {t("description")}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div key={index} className="flex gap-4">
                                        <div className="shrink-0">
                                            <div className="h-10 w-10 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center">
                                                <Icon className="h-5 w-5" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                                            <p className="text-sm text-gray-500 leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: Visual/Image */}
                    <div className="flex-1 w-full relative">
                        {/* Decorative background grid/dots could go here */}
                        <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
                                alt="Logistics Operations"
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <p className="font-bold text-2xl">{t("trustDelivered")}</p>
                                    <p className="text-white/80">{t("everyShipment")}</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -left-6 md:bottom-12 md:-left-12 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs hidden md:block animate-in slide-in-from-left duration-1000 delay-300">
                            <div className="flex items-center gap-4">
                                <div className="text-4xl font-bold text-primary-600">98%</div>
                                <div className="text-sm font-medium text-gray-600">{t("onTimeRate")}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
