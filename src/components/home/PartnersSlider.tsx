"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

const partners = [
    { name: "Singapore Airlines", logo: "/assets/partners/sq.svg" },
    { name: "Qatar Airways", logo: "/assets/partners/qr.svg" },
    { name: "Ocean Network Express", logo: "/assets/partners/one.svg" },
    { name: "MSC", logo: "/assets/partners/msc.svg" },
    { name: "CMA CGM", logo: "/assets/partners/cma.svg" },
    { name: "COSCO Shipping", logo: "/assets/partners/cosco.svg" },
    { name: "Vietnam Airlines", logo: "/assets/partners/vn.svg" },
    { name: "Evergreen", logo: "/assets/partners/emc.svg" },
];

export function PartnersSlider() {
    return (
        <Section className="py-12 border-y border-gray-100 bg-gray-50/50 overflow-hidden">
            <Container>
                <div className="text-center mb-8">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Trusted by Industry Leaders</p>
                </div>

                <div className="relative flex overflow-x-hidden group">
                    {/* Gradient Masks */}
                    <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-gray-50 to-transparent"></div>
                    <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-gray-50 to-transparent"></div>

                    {/* Sliding Track - GPU accelerated */}
                    <div className="animate-marquee flex gap-16 whitespace-nowrap py-4" style={{ willChange: 'transform' }}>
                        {/* Double the content for seamless loop */}
                        {[...partners, ...partners, ...partners].map((partner, index) => (
                            <div key={index} className="flex items-center justify-center min-w-[150px] grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                                {/* Using text/placeholder for now if images missing, typically would be <Image> */}
                                <span className="text-xl font-bold text-gray-400 group-hover:text-primary-600 font-serif flex items-center gap-2">
                                    <div className="h-8 w-8 bg-current rounded-md opacity-20"></div>
                                    {partner.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
