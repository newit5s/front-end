"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Card, CardContent } from "@/components/ui/Card";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const t = useTranslations("contactPage");
    const tQuote = useTranslations("quote"); // Reuse form labels like fullName, email

    // Simple form submit handler
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    };

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative bg-primary-900 py-16 md:py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-primary-900/90 z-0" />
                    {/* Pattern overlay could go here */}
                    <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("title")}</h1>
                        <p className="text-xl text-primary-100 max-w-2xl mx-auto">
                            {t("subtitle")}
                        </p>
                    </div>
                </section>

                <section className="py-16 md:py-24 bg-gray-50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                            {/* Contact Info Side */}
                            <div className="space-y-10">
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("getInTouch")}</h2>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {t("intro")}
                                    </p>
                                </div>

                                <div className="space-y-8">
                                    {/* Address */}
                                    <div className="flex items-start gap-4">
                                        <div className="h-12 w-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0 text-primary-600">
                                            <MapPin className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">{t("headOffice")}</h3>
                                            <p className="text-gray-600">
                                                120A Tran Ke Xuong Street, Ward 7,<br />
                                                Phu Nhuan District, Ho Chi Minh City,<br />
                                                Vietnam 70000
                                            </p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-4">
                                        <div className="h-12 w-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0 text-primary-600">
                                            <Phone className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">{t("callUs")}</h3>
                                            <p className="text-gray-600 mb-1">
                                                <span className="font-medium text-gray-900">Tel:</span> +84 028 6681 3115
                                            </p>
                                            <p className="text-gray-600">
                                                <span className="font-medium text-gray-900">Hotline:</span> +84 938 975 329
                                            </p>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start gap-4">
                                        <div className="h-12 w-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0 text-primary-600">
                                            <Mail className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">{t("emailUs")}</h3>
                                            <a href="mailto:hieu.tv@seaairglobal.com.vn" className="text-primary-600 hover:text-primary-700 font-medium transition-colors">
                                                hieu.tv@seaairglobal.com.vn
                                            </a>
                                        </div>
                                    </div>

                                    {/* Working Hours */}
                                    <div className="flex items-start gap-4">
                                        <div className="h-12 w-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0 text-primary-600">
                                            <Clock className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">{t("workingHours")}</h3>
                                            <p className="text-gray-600">
                                                Mon - Fri: 8:00 AM - 5:30 PM<br />
                                                Sat: 8:00 AM - 12:00 PM
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form Side */}
                            <Card className="shadow-xl border-gray-100">
                                <CardContent className="p-8 md:p-10">
                                    {isSuccess ? (
                                        <div className="flex flex-col items-center justify-center h-full py-12 text-center space-y-4 animate-in fade-in zoom-in duration-500">
                                            <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
                                                <CheckCircle2 className="h-10 w-10" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900">{t("successTitle")}</h3>
                                            <p className="text-gray-500 max-w-sm">
                                                {t("successDesc")}
                                            </p>
                                            <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-6">
                                                {t("sendAnother")}
                                            </Button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t("sendMessage")}</h3>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">{tQuote("fullName")}</label>
                                                    <Input id="name" placeholder="John Doe" required />
                                                </div>
                                                <div className="space-y-2">
                                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">{tQuote("email")}</label>
                                                    <Input id="email" type="email" placeholder="john@company.com" required />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">{tQuote("phone")} (Optional)</label>
                                                    <Input id="phone" type="tel" placeholder="+84 ..." />
                                                </div>
                                                <div className="space-y-2">
                                                    <label htmlFor="company" className="text-sm font-medium text-gray-700">Company</label>
                                                    <Input id="company" placeholder="Company Name" />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="subject" className="text-sm font-medium text-gray-700">{t("subject")}</label>
                                                <Input id="subject" placeholder="Shipping Inquiry" required />
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="message" className="text-sm font-medium text-gray-700">{t("message")}</label>
                                                <Textarea
                                                    id="message"
                                                    placeholder="Tell us about your shipping needs..."
                                                    className="min-h-[150px]"
                                                    required
                                                />
                                            </div>

                                            <Button
                                                type="submit"
                                                size="lg"
                                                className="w-full font-bold h-12"
                                                isLoading={isSubmitting}
                                            >
                                                <Send className="w-4 h-4 mr-2" />
                                                {t("send")}
                                            </Button>
                                        </form>
                                    )}
                                </CardContent>
                            </Card>

                        </div>
                    </div>
                </section>

                {/* Map Placeholder Section */}
                <section className="h-[400px] w-full bg-gray-200 relative group">
                    <div
                        className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
                        style={{ backgroundImage: "url('https://maps.googleapis.com/maps/api/staticmap?center=10.8016,106.6853&zoom=15&size=1920x400&maptype=roadmap')" }} // Placeholder URL logic
                    />
                    <div className="absolute inset-0 bg-gray-200/20 flex items-center justify-center">
                        <div className="bg-white/90 backdrop-blur px-6 py-4 rounded-xl shadow-lg text-center">
                            <MapPin className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                            <p className="font-semibold text-gray-900">120A Tran Ke Xuong St., HCMC</p>
                            <p className="text-sm text-gray-500">View on Google Maps</p>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
