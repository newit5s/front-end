import type { Metadata } from "next";
import { Inter, Poppins, Be_Vietnam_Pro } from "next/font/google";
import "../globals.css";
import { ToastProvider } from "@/components/ui/Toast";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

const poppins = Poppins({
    variable: "--font-poppins",
    weight: ["600", "700"],
    subsets: ["latin"],
    display: "swap",
});

const beVietnamPro = Be_Vietnam_Pro({
    variable: "--font-be-vietnam-pro",
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Seaair Global",
    description: "Seaair Global - Logistics & International Shipping",
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Validate locale
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Load messages for the current locale
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body
                className={`${poppins.variable} ${inter.variable} ${beVietnamPro.variable} font-sans antialiased text-neutral-900 bg-neutral-50`}
            >
                <NextIntlClientProvider messages={messages}>
                    <ToastProvider>
                        {children}
                    </ToastProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
