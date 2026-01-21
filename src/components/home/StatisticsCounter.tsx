"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";

// Optimized Counter - uses parent's inView state instead of individual observers
function Counter({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        // Simple animation: count up over 1.5 seconds
        const duration = 1500;
        const steps = 30;
        const increment = value / steps;
        const stepDuration = duration / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                setDisplayValue(value);
                clearInterval(timer);
            } else {
                setDisplayValue(Math.floor(current));
            }
        }, stepDuration);

        return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
        <span className="inline-block tabular-nums tracking-tight text-4xl font-bold md:text-5xl text-white">
            {displayValue}{suffix}
        </span>
    );
}

export function StatisticsCounter() {
    // Single IntersectionObserver for entire section
    const sectionRef = useRef<HTMLDivElement>(null);
    const inView = useInView(sectionRef, { once: true, margin: "-50px" });
    const t = useTranslations("stats");

    const stats = [
        { label: t("yearsExperience"), value: 25, suffix: "+" },
        { label: t("globalPartners"), value: 150, suffix: "+" },
        { label: t("countriesServed"), value: 80, suffix: "" },
        { label: t("happyClients"), value: 2000, suffix: "+" },
    ];

    return (
        <section className="relative py-20 bg-primary-900 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                </svg>
            </div>

            <Container>
                <div ref={sectionRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="space-y-2"
                            style={{
                                opacity: inView ? 1 : 0,
                                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                                transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`
                            }}
                        >
                            <div className="text-white">
                                <Counter value={stat.value} suffix={stat.suffix} isVisible={inView} />
                            </div>
                            <div className="text-sm font-medium text-primary-200 uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
