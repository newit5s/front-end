"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ChevronDown } from "lucide-react";
// import Link from "next/link"; // Replaced by next-intl Link
import { Link } from "@/i18n/routing";
import { GlobeVisualization } from "./Globe";
import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";

// Globe stays visible for 800px of scroll, then unmounts before Services section
const SCROLL_DISTANCE = 800;

export function Hero() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const t = useTranslations("hero");
    const tCommon = useTranslations("common");

    // Scroll Logic - Throttled to 60fps for smooth performance
    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const progress = Math.max(0, window.scrollY / SCROLL_DISTANCE);
                    setScrollProgress(progress);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Mobile Check
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Altitude Calculation
    const minAlt = isMobile ? 3.5 : 2.0;
    const maxAlt = isMobile ? 6.0 : 4.5;
    const currentAltitude = maxAlt - (scrollProgress * (maxAlt - minAlt));
    const isZoomComplete = scrollProgress >= 0.95;

    return (
        // Height wrapper for scrolling space
        <div style={{ height: `calc(100vh + ${SCROLL_DISTANCE}px)` }} className="relative bg-gray-900">

            {/* Sticky Viewport */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                {/* 1. Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#0E1E32] to-gray-900 z-0 pointer-events-none" />

                {/* 2. GLOBE CONTAINER - Hidden when scrolled past to free GPU completely */}
                <div
                    className="absolute inset-0 z-10 w-screen h-screen flex items-center justify-center overflow-hidden"
                    style={{
                        visibility: scrollProgress >= 1.25 ? 'hidden' : 'visible',
                        pointerEvents: scrollProgress >= 1.25 ? 'none' : 'auto'
                    }}
                >
                    <GlobeVisualization
                        altitude={currentAltitude}
                        isZoomComplete={isZoomComplete}
                        isPaused={scrollProgress >= 1.25}
                    />
                </div>

                {/* 3. CONTENT OVERLAY - Pointer events controlled */}
                {/* pointer-events-none allows clicks to pass through to globe */}
                <div className="absolute inset-0 z-20 pointer-events-none h-full w-full">
                    <Container className="h-full relative flex flex-col items-center">

                        {/* Header Text - Positioned higher up */}
                        {/* Header Text - Positioned higher up */}
                        <div className="absolute top-[18%] md:top-[20%] text-center px-4 w-full">
                            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight mb-4 drop-shadow-2xl">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-500">
                                    {t("title")}
                                </span>
                            </h1>
                            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light drop-shadow-lg">
                                {t("subtitle")}
                            </p>
                        </div>

                        {/* Scroll Indicator - Center */}
                        {!isZoomComplete && (
                            <div className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 opacity-80 animate-bounce">
                                <p className="text-white text-sm font-medium tracking-wide drop-shadow">{t("scrollToExplore")}</p>
                                <ChevronDown className="w-6 h-6 text-white drop-shadow" />
                            </div>
                        )}

                        {/* Bottom Area - Positioned lower down */}
                        <div className="absolute bottom-[12%] md:bottom-[15%] w-full flex flex-col items-center gap-6">
                            {isZoomComplete && (
                                <div className="px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/10 animate-fade-in">
                                    <p className="text-white/90 text-sm font-medium">
                                        👇 {t("clickHub")}
                                    </p>
                                </div>
                            )}

                            {/* Buttons - Enable pointer events explicitly */}
                            <div className="flex flex-col sm:flex-row gap-4 px-4 pointer-events-auto">
                                <Link href="/contact">
                                    <Button
                                        size="lg"
                                        className="h-12 px-8 text-base shadow-xl shadow-primary-500/20 hover:scale-105 transition-transform w-full sm:w-auto"
                                    >
                                        {tCommon("getQuote")} <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                                <Link href="/track">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="h-12 px-8 text-base border-white/20 text-white hover:bg-white/10 backdrop-blur-sm w-full sm:w-auto"
                                    >
                                        {tCommon("trackShipment")}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Container>
                </div>

                {/* Bottom Fade Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent z-10 pointer-events-none" />
            </div>
        </div>
    );
}
