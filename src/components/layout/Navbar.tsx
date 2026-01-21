"use client";

import { useState } from "react";
// import Link from "next/link"; // Replaced by next-intl Link
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { SearchBar } from "./SearchBar";
import { useTranslations } from "next-intl";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations("nav");
    const tCommon = useTranslations("common");

    const navLinks = [
        { name: t("home"), href: "/" },
        { name: t("services"), href: "/services" },
        { name: t("tracking"), href: "/track" },
        { name: t("news"), href: "/news" },
        { name: t("about"), href: "/about" },
        { name: t("contact"), href: "/contact" },
    ];

    return (
        <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative h-10 w-32 md:h-12 md:w-40">
                            <Image
                                src="/assets/logo.png"
                                alt="SeaAir Global"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Utilities */}
                        <div className="flex items-center gap-1 pl-2 border-l border-gray-200">
                            <SearchBar />
                            <LanguageSwitcher />
                        </div>

                        <Link href="/quote">
                            <Button size="sm">{tCommon("getQuote")}</Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-200 shadow-xl animate-in slide-in-from-top-5 duration-200 z-50">
                    <div className="flex flex-col p-6 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-lg font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 px-4 py-3 rounded-lg transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                            <div className="flex items-center justify-between px-4 pb-2">
                                <SearchBar />
                            </div>
                            <div className="flex items-center justify-between px-4 pb-4">
                                <span className="text-sm font-medium text-gray-500">{tCommon("switchLanguage")}</span>
                                <LanguageSwitcher />
                            </div>

                            <Link href="/quote" onClick={() => setIsOpen(false)}>
                                <Button className="w-full" size="lg">{tCommon("getQuote")}</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}

            {/* Backdrop for Mobile Menu */}
            {isOpen && (
                <div
                    className="fixed inset-0 top-16 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </nav>
    );
}
