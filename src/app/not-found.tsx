import Link from 'next/link';
import { Inter, Poppins, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

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

export default function NotFound() {
    return (
        <html lang="en">
            <body className={`${poppins.variable} ${inter.variable} ${beVietnamPro.variable} font-sans antialiased text-neutral-900 bg-neutral-50`}>
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
                    <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
                    <p className="text-gray-500 max-w-md mb-8">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                    <Link
                        href="/"
                        className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30"
                    >
                        Return Home
                    </Link>
                </div>
            </body>
        </html>
    );
}
