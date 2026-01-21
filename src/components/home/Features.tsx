import { Badge } from "@/components/ui/Badge";
import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";

export function Features() {
    const features = [
        "Real-time shipment tracking",
        "Global partner network",
        "Custom clearance expertise",
        "24/7 Customer support",
        "Competitive rates",
        "Secure warehousing",
    ];

    return (
        <Section background="white">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left: Content */}
                    <div className="space-y-8 animate-in slide-in-from-left-10 fade-in duration-700">
                        <div className="space-y-4">
                            <Badge variant="outline" className="border-primary-200 text-primary-700 bg-primary-50">
                                Why Choose Us
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                                We Deliver Excellence, <br /> Every Time.
                            </h2>
                            <p className="text-gray-500 text-lg leading-relaxed">
                                Our commitment to reliability and transparency sets us apart. We leverage advanced technology and a robust global network to ensure your cargo arrives safely and on time.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-primary-500 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                <blockquote className="space-y-2">
                                    <p className="text-gray-600 italic">
                                        "Seaair Global has been instrumental in scaling our international operations. Their reliability and support are unmatched."
                                    </p>
                                    <footer className="text-sm font-semibold text-gray-900">
                                        — Sarah Chen, Supply Chain Director @ TechCorp
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    {/* Right: Visual/Image */}
                    <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl animate-in slide-in-from-right-10 fade-in duration-700 delay-300">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                            style={{
                                backgroundImage: "url('https://images.unsplash.com/photo-1566576912906-600aceebca9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80')",
                            }}
                        ></div>
                        {/* Optional UI Overlay element */}
                        <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">System Status</p>
                                    <p className="text-primary-600 font-bold flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                                        Operational
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-medium">Active Shipments</p>
                                    <p className="text-gray-900 font-bold text-lg">1,284</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </Section>
    );
}
