"use client";

// import Link from "next/link"; replaced by next-intl Link
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useTranslations } from "next-intl";

export function Footer() {
    const t = useTranslations("footer");
    const tCommon = useTranslations("common");
    const tNav = useTranslations("nav");

    return (
        <footer className="bg-gray-900 text-gray-200">
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative h-12 w-32">
                                <Image
                                    src="/assets/logo.png"
                                    alt="SeaAir Global"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {t("tagline")}
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary-500 transition-colors">
                                <Facebook className="h-4 w-4" />
                            </Link>
                            <Link href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary-500 transition-colors">
                                <Twitter className="h-4 w-4" />
                            </Link>
                            <Link href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary-500 transition-colors">
                                <Linkedin className="h-4 w-4" />
                            </Link>
                            <Link href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary-500 transition-colors">
                                <Instagram className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">{t("quickLinks")}</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="hover:text-primary-400 transition-colors">{t("aboutUs")}</Link></li>
                            <li><Link href="/services" className="hover:text-primary-400 transition-colors">{t("ourServices")}</Link></li>
                            <li><Link href="/track" className="hover:text-primary-400 transition-colors">{t("trackShipment")}</Link></li>
                            <li><Link href="/quote" className="hover:text-primary-400 transition-colors">{t("requestQuote")}</Link></li>
                            <li><Link href="/contact" className="hover:text-primary-400 transition-colors">{t("contactSupport")}</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">{t("contactUs")}</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-primary-500 shrink-0" />
                                <span>120A Tran Ke Xuong Street,<br />Ward 7, Phu Nhuan District,<br />HCM City, Vietnam 70000</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-primary-500 shrink-0" />
                                <span>+84 028 6681 3115</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-primary-500 shrink-0" />
                                <span>hieu.tv@seaairglobal.com.vn</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white">{t("newsletter")}</h3>
                        <p className="text-sm text-gray-400">{t("newsletterDesc")}</p>
                        <div className="flex flex-col gap-2">
                            <Input
                                placeholder={t("emailPlaceholder")}
                                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-primary-500 focus:ring-primary-500/20"
                            />
                            <Button className="w-full">{t("subscribe")}</Button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>&copy; {new Date().getFullYear()} Seaair Global. {t("allRightsReserved")}</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">{t("privacyPolicy")}</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">{t("termsOfService")}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
