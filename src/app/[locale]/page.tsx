import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Features } from "@/components/home/Features";
import { LatestNews } from "@/components/home/LatestNews";
import { StatisticsCounter } from "@/components/home/StatisticsCounter";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

import { PartnersSlider } from "@/components/home/PartnersSlider";

import { Testimonials } from "@/components/home/Testimonials";

import { CTASection } from "@/components/home/CTASection";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <Hero />
                <Services />
                <StatisticsCounter />
                <WhyChooseUs />
                <PartnersSlider />
                <Testimonials />
                <LatestNews />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
}
