import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { CheckCircle2, Globe, Users, Award } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {/* Using a placeholder cinematic image for now, replace with office or team photo later */}
                    <Image
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
                        alt="SeaAir Global Office"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gray-900/70" />
                </div>

                <Container className="relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Connecting the World</h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                        Founded in 2016, SeaAir Global has rapidly grown into a trusted leader in international logistics, bridging Vietnam with the global market.
                    </p>
                </Container>
            </div>

            {/* Mission & Vision */}
            <Section background="white">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800">
                                Global Logistics Partner
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">About SeaAir Global</h2>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        To deliver fast, safe, and efficient shipping services with a broad network of partners.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        To build a strong, environmentally-friendly global logistics network and be a trusted partner for customers worldwide. We are committed to developing advanced technology, enhancing service quality, and contributing to the sustainable development of the global transportation and logistics industry.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Operating Principles</h3>
                                    <ul className="space-y-2 mt-2">
                                        {[
                                            "The safety and timeliness of goods is the first principle",
                                            "The success of customers is our success",
                                            "Win-win principle: co-development"
                                        ].map((item) => (
                                            <li key={item} className="flex items-start gap-2">
                                                <CheckCircle2 className="h-5 w-5 text-primary-600 shrink-0 mt-0.5" />
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 italic text-gray-600">
                                    "We focus on providing the most reliable service at a reasonable cost... Our reliability goes beyond delivering your package safely and on-time."
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070"
                                alt="Team meeting"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Stats / Numbers */}
            <Section background="gray" className="py-20">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Founded", value: "2016", icon: Award },
                            { label: "Happy Clients", value: "500+", icon: Users },
                            { label: "Countries Served", value: "150+", icon: Globe },
                            { label: "Shipments/Year", value: "10k+", icon: CheckCircle2 },
                        ].map((stat, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm text-center">
                                <div className="inline-flex p-4 rounded-full bg-primary-50 text-primary-600 mb-4">
                                    <stat.icon className="h-8 w-8" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                                <div className="text-gray-500 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>
            <Footer />
        </div>
    );
}
