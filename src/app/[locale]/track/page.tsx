"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TrackingForm } from "@/components/tracking/TrackingForm";
import { ShipmentDetails, ShipmentData } from "@/components/tracking/ShipmentDetails";
import { TrackingTimeline, TimelineEvent } from "@/components/tracking/TrackingTimeline";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Package, AlertCircle, Search } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

// Mock Database - Different shipments for demo
const MOCK_SHIPMENTS: Record<string, { shipment: ShipmentData; timeline: TimelineEvent[] }> = {
    "SGL-84920211": {
        shipment: {
            id: "SGL-84920211",
            origin: "Ho Chi Minh City, VN",
            destination: "Los Angeles, US",
            status: "In Transit",
            eta: "Oct 24, 2026",
            carrier: "Ocean Network Express",
            type: "FCL (40' HC)",
            weight: "18,500 kg",
            pieces: 450
        },
        timeline: [
            { status: "Booking Confirmed", description: "Shipment booking has been confirmed by carrier.", date: "Sep 28, 2026", time: "10:00 AM", location: "System", completed: true },
            { status: "Empty Container Picked Up", description: "Container released to shipper for stuffing.", date: "Sep 30, 2026", time: "09:00 AM", location: "ICD Transimex, VN", completed: true },
            { status: "Gate In Full", description: "Container received at terminal and cleared export customs.", date: "Oct 01, 2026", time: "14:15 PM", location: "Cat Lai Terminal, VN", completed: true },
            { status: "Departed Origin Port", description: "Vessel 'ONE APUS' has departed from Cat Lai Terminal.", date: "Oct 02, 2026", time: "08:30 AM", location: "Ho Chi Minh City, VN", completed: true },
            { status: "Arrived at Transshipment Port", description: "Vessel expected to arrive at Singapore for transshipment.", date: "Oct 05, 2026", time: "18:00 PM", location: "Singapore, SG", completed: false, current: true },
            { status: "Arrival at Destination", description: "Expected arrival at Los Angeles Port.", date: "Oct 24, 2026", time: "--:--", location: "Los Angeles, US", completed: false }
        ]
    },
    // ... other mock data can remain hardcoded for demo
    "AIR-2026-1015": {
        shipment: {
            id: "AIR-2026-1015",
            origin: "Singapore, SG",
            destination: "Frankfurt, DE",
            status: "In Transit",
            eta: "Jan 21, 2026",
            carrier: "Singapore Airlines Cargo",
            type: "Air Freight",
            weight: "850 kg",
            pieces: 12
        },
        timeline: [
            { status: "Shipment Booked", description: "Air cargo booking confirmed with SQ Cargo.", date: "Jan 18, 2026", time: "11:30 AM", location: "System", completed: true },
            { status: "Cargo Received at Warehouse", description: "Goods received at Changi Cargo Terminal.", date: "Jan 19, 2026", time: "15:00 PM", location: "Changi Airport, SG", completed: true },
            { status: "Flight Departed", description: "Flight SQ326 departed to Frankfurt via Singapore Airlines.", date: "Jan 20, 2026", time: "01:15 AM", location: "Changi Airport, SG", completed: true, current: true },
            { status: "Arrival at Destination", description: "Estimated arrival at Frankfurt Airport.", date: "Jan 21, 2026", time: "07:30 AM", location: "Frankfurt Airport, DE", completed: false }
        ]
    },
    "DELIVERED-001": {
        shipment: {
            id: "DELIVERED-001",
            origin: "Shanghai, CN",
            destination: "Ho Chi Minh City, VN",
            status: "Delivered",
            eta: "Jan 15, 2026",
            carrier: "COSCO Shipping",
            type: "LCL",
            weight: "2,300 kg",
            pieces: 45
        },
        timeline: [
            { status: "Booking Confirmed", description: "LCL consolidation booking confirmed.", date: "Jan 05, 2026", time: "09:00 AM", location: "System", completed: true },
            { status: "Cargo at CFS Origin", description: "Cargo received at Shanghai CFS for consolidation.", date: "Jan 07, 2026", time: "14:00 PM", location: "Shanghai CFS, CN", completed: true },
            { status: "Vessel Departed", description: "Vessel 'COSCO HOPE' departed Shanghai Port.", date: "Jan 08, 2026", time: "20:00 PM", location: "Shanghai Port, CN", completed: true },
            { status: "Arrived at Destination Port", description: "Vessel arrived at Cat Lai Port.", date: "Jan 13, 2026", time: "06:00 AM", location: "Cat Lai Port, VN", completed: true },
            { status: "Customs Cleared", description: "Import customs cleared successfully.", date: "Jan 14, 2026", time: "11:30 AM", location: "Cat Lai Terminal, VN", completed: true },
            { status: "Delivered", description: "Cargo delivered to consignee warehouse.", date: "Jan 15, 2026", time: "16:45 PM", location: "Binh Duong, VN", completed: true }
        ]
    }
};

export default function TrackingPage() {
    const [loading, setLoading] = useState(false);
    const [searchedTerm, setSearchedTerm] = useState("");
    const [result, setResult] = useState<{ shipment: ShipmentData; timeline: TimelineEvent[] } | null>(null);
    const [notFound, setNotFound] = useState(false);
    const t = useTranslations("tracking");
    const tCommon = useTranslations("common");

    const handleSearch = (term: string) => {
        setLoading(true);
        setNotFound(false);
        setSearchedTerm(term.trim().toUpperCase());

        // Simulate API delay
        setTimeout(() => {
            setLoading(false);
            const found = MOCK_SHIPMENTS[term.trim().toUpperCase()] || MOCK_SHIPMENTS[term.trim()];
            if (found) {
                setResult(found);
                setNotFound(false);
            } else {
                setResult(null);
                setNotFound(true);
            }
        }, 1200);
    };

    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <Navbar />

            <main className="flex-1">
                {/* Hero Section */}
                <div className="relative bg-secondary-900 py-20 overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070"
                            alt="Shipping Container"
                            fill
                            className="object-cover opacity-20"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/80 to-secondary-900" />
                    </div>

                    <Container className="relative z-10">
                        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium backdrop-blur-sm">
                                <Package className="h-4 w-4" /> {t("subtitle")}
                            </div>
                            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                                {t("title")}
                            </h1>
                            <p className="text-lg text-white/70 max-w-2xl">
                                {t("subtitle")} {/* Or another placeholder text if needed */}
                            </p>
                        </div>

                        {/* Tracking Form */}
                        <div className="mt-10">
                            <TrackingForm onSearch={handleSearch} isLoading={loading} />
                        </div>

                        {/* Demo Hint */}
                        <p className="text-center text-white/50 text-sm mt-4">
                            Demo: Try <span className="font-mono bg-white/10 px-2 py-0.5 rounded">SGL-84920211</span>, <span className="font-mono bg-white/10 px-2 py-0.5 rounded">AIR-2026-1015</span>, or <span className="font-mono bg-white/10 px-2 py-0.5 rounded">DELIVERED-001</span>
                        </p>
                    </Container>
                </div>

                {/* Results Section */}
                <Container className="py-16">
                    {/* Not Found State */}
                    {notFound && (
                        <div className="max-w-2xl mx-auto text-center py-12 animate-in fade-in duration-300">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-500 mb-6">
                                <AlertCircle className="h-8 w-8" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">{t("notFound")}</h2>
                            <p className="text-gray-500 mb-6">
                                <span className="block mb-2">{t("tryAgain")}</span>
                                <span className="font-mono font-semibold">"{searchedTerm}"</span>
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Button variant="primary" onClick={() => setNotFound(false)}>
                                    <Search className="h-4 w-4 mr-2" /> {t("search")} Again
                                </Button>
                                <Button variant="outline">{tCommon("contactUs")}</Button>
                            </div>
                        </div>
                    )}

                    {/* Results */}
                    {result && (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {/* Top: Details Card (Full Width) */}
                            <div className="lg:col-span-3">
                                <ShipmentDetails data={result.shipment} />
                            </div>

                            {/* Left: Timeline */}
                            <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200">
                                <TrackingTimeline events={result.timeline} />
                            </div>

                            {/* Right: Additional Info */}
                            <div className="space-y-6">
                                <div className="bg-primary-900 text-white p-6 rounded-xl shadow-lg">
                                    <h3 className="font-semibold text-lg mb-2">Need Assistance?</h3>
                                    <p className="text-primary-100 text-sm mb-4">
                                        If you have issues with your shipment or need to change details, please contact our support team.
                                    </p>
                                    <Button variant="secondary" className="w-full">
                                        {tCommon("contactUs")}
                                    </Button>
                                </div>

                                <div className="bg-white p-6 rounded-xl border border-gray-200">
                                    <h3 className="font-semibold text-gray-900 mb-2">Share Tracking</h3>
                                    <p className="text-gray-500 text-sm mb-4">
                                        Send this tracking link to your customers or partners.
                                    </p>
                                    <div className="flex gap-2">
                                        <Button variant="outline" size="sm" className="flex-1">Copy Link</Button>
                                        <Button variant="outline" size="sm" className="flex-1">Email</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Empty State (Initial) */}
                    {!result && !notFound && !loading && (
                        <div className="max-w-2xl mx-auto text-center py-12">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-400 mb-6">
                                <Search className="h-8 w-8" />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-700 mb-2">{t("placeholder")}</h2>
                            <p className="text-gray-500">
                                Use the search bar above to track your shipment in real-time.
                            </p>
                        </div>
                    )}
                </Container>
            </main>

            <Footer />
        </div>
    );
}
