"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { Globe, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const t = useTranslations("common");

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const languages = [
        { code: "en", label: "English", flag: "🇺🇸" },
        { code: "vi", label: "Tiếng Việt", flag: "🇻🇳" },
        { code: "zh", label: "中文", flag: "🇨🇳" },
    ];

    const handleLanguageChange = (code: string) => {
        router.replace(pathname, { locale: code });
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="gap-2 text-gray-600 hover:text-primary-600 hover:bg-gray-100"
                aria-label={t("switchLanguage")}
            >
                <Globe className="h-4 w-4" />
                <span className="uppercase font-medium">{locale}</span>
            </Button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50 animate-in fade-in zoom-in-95 duration-200">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-gray-50 transition-colors ${locale === lang.code ? "text-primary-600 font-medium bg-primary-50" : "text-gray-700"
                                }`}
                        >
                            <span className="flex items-center gap-2">
                                <span className="text-base">{lang.flag}</span>
                                {lang.label}
                            </span>
                            {locale === lang.code && <Check className="h-3 w-3" />}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
