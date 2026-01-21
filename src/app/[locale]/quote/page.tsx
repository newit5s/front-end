"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Container } from "@/components/ui/Container";
import { Card, CardContent } from "@/components/ui/Card";
import { CheckCircle2, Plane, Ship, Truck, Warehouse, ShieldCheck, ArrowRight, HelpCircle } from "lucide-react";
import { useTranslations } from "next-intl";

type ServiceType = 'air-freight' | 'sea-freight' | 'road-transport' | 'project-cargo' | 'customs-brokerage' | 'value-added' | 'other' | '';

const SERVICES_DATA = [
    { id: 'sea-freight', slugs: ['sea', 'ocean-freight', 'sea-freight'], titleKey: 'seaFreight', icon: Ship },
    { id: 'air-freight', slugs: ['air', 'air-freight'], titleKey: 'airFreight', icon: Plane },
    { id: 'road-transport', slugs: ['truck', 'road-transport', 'inland-trucking', 'trucking'], titleKey: 'inlandTrucking', icon: Truck },
    { id: 'project-cargo', slugs: ['project-cargo', 'warehouse', 'warehousing'], titleKey: 'projectCargo', icon: Warehouse },
    { id: 'customs-brokerage', slugs: ['customs', 'customs-brokerage'], titleKey: 'customsBrokerage', icon: ShieldCheck },
    { id: 'value-added', slugs: ['value-added', 'lastmile', 'last-mile'], titleKey: 'valueAdded', icon: ArrowRight },
    { id: 'other', slugs: ['other', 'special'], titleKey: 'otherSpecial', icon: HelpCircle },
] as const;

// All valid slug values (flattened)
const ALL_VALID_SLUGS = SERVICES_DATA.flatMap(s => s.slugs);

// Function to normalize any valid slug to internal ServiceType
const normalizeSlug = (slug: string): ServiceType => {
    const service = SERVICES_DATA.find(s => (s.slugs as readonly string[]).includes(slug));
    return service ? service.id as ServiceType : '';
};

interface QuoteFormData {
    serviceType: ServiceType;
    origin: string;
    destination: string;
    incoterms: string;
    grossWeight: string;
    fullName: string;
    email: string;
    phone: string;
    details: string;
}

const INITIAL_DATA: QuoteFormData = {
    serviceType: '',
    origin: '',
    destination: '',
    incoterms: 'exw',
    grossWeight: '',
    fullName: '',
    email: '',
    phone: '',
    details: ''
};

// Component for Service Option Card (Defined outside to prevent re-creation)
const ServiceOptionCard = ({ icon: Icon, title, value, current, onClick }: {
    icon: any, // LucideIcon type strictly
    title: string,
    value: ServiceType,
    current: ServiceType,
    onClick: (v: ServiceType) => void
}) => {
    const selected = value === current;
    return (
        <div
            onClick={() => onClick(value)}
            className={`cursor-pointer border-2 rounded-xl p-4 flex flex-col items-center gap-3 transition-all duration-200 hover:border-primary-500 hover:bg-primary-50 ${selected ? 'border-primary-500 bg-primary-50 ring-1 ring-primary-500 shadow-md' : 'border-gray-200 bg-white hover:shadow-sm'}`}
        >
            <div className={`h-10 w-10 rounded-full flex items-center justify-center transition-colors ${selected ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-500'}`}>
                <Icon className="h-5 w-5" />
            </div>
            <span className={`font-semibold text-center text-sm md:text-base ${selected ? 'text-primary-900' : 'text-gray-600'}`}>{title}</span>
        </div>
    );
};

function QuoteForm() {
    const searchParams = useSearchParams();
    const [formData, setFormData] = useState<QuoteFormData>(INITIAL_DATA);
    const t = useTranslations("quote");
    // Use services translation for service names (mapped by keys)
    const tServices = useTranslations("services"); // for service names if using services keys
    // OR we can use quote keys if we duplicated them in quote section. 
    // In json, we have "otherSpecial" in quote, but "seaFreight" etc in services.
    // Let's use logic to pick from "services" for regular ones, and "quote" for otherSpecial.

    // Step state
    const [currentStep, setCurrentStep] = useState(1);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Initial URL Check - Now supports both short and full slug formats
    useEffect(() => {
        const serviceParam = searchParams.get('service');
        if (serviceParam) {
            const normalizedService = normalizeSlug(serviceParam);
            if (normalizedService) {
                setFormData(prev => ({ ...prev, serviceType: normalizedService }));
                setCurrentStep(2);
            }
        }
    }, [searchParams]);

    // FAIL-SAFE Watcher for Step 2
    useEffect(() => {
        if (formData.serviceType) {
            setCurrentStep(2);
        }
    }, [formData.serviceType]);

    const handleServiceChange = (type: ServiceType) => {
        setFormData(prev => ({ ...prev, serviceType: type }));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        console.log("Submitting Quote Request:", formData);
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    // Helper to get translated title
    const getServiceTitle = (key: string) => {
        if (key === 'otherSpecial') return t('otherSpecial');
        return tServices(key as any);
    };

    if (isSuccess) {
        return (
            <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="h-24 w-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-12 w-12" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Quote Request Received!</h2>
                <p className="text-gray-600 text-lg max-w-lg mx-auto mb-8">
                    Thank you for choosing SeaAir Global. Your reference number is <span className="font-mono font-bold text-gray-900">#Q-{Math.floor(Math.random() * 10000)}</span>.
                    Check your email for confirmation.
                    {/* Note: Success message could also be translated if needed, kept simple for now */}
                </p>
                <Button onClick={() => { setIsSuccess(false); setFormData(INITIAL_DATA); setCurrentStep(1); }} variant="outline">Submit Another Request</Button>
            </div>
        );
    }

    // Prepare Current Service Data
    const currentServiceData = SERVICES_DATA.find(s => s.id === formData.serviceType) || SERVICES_DATA[0];
    const CurrentServiceIcon = currentServiceData.icon; // Capitalized variable for JSX
    const currentServiceTitle = getServiceTitle(currentServiceData.titleKey);

    return (
        <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">

            {/* STEP 1: SERVICE SELECTION */}
            <div>
                {currentStep === 1 ? (
                    <div className="animate-in fade-in zoom-in duration-300">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                            <span className="h-8 w-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center text-sm font-bold border border-primary-200">1</span>
                            {t("selectService")}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {SERVICES_DATA.map((service) => (
                                <div key={service.id}>
                                    <ServiceOptionCard
                                        icon={service.icon}
                                        title={getServiceTitle(service.titleKey)}
                                        value={service.id as ServiceType}
                                        current={formData.serviceType}
                                        onClick={handleServiceChange}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    // SHOW COMPACT SUMMARY
                    <div className="flex items-center justify-between p-4 bg-primary-50 border border-primary-100 rounded-xl animate-in fade-in slide-in-from-top-2 duration-300">
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-primary-500 text-white flex items-center justify-center shadow-md">
                                <CurrentServiceIcon className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="text-xs text-primary-600 font-semibold uppercase tracking-wider">{t("selectedService")}</p>
                                <h3 className="text-lg font-bold text-gray-900">{currentServiceTitle}</h3>
                            </div>
                        </div>
                        <Button variant="outline" size="sm" onClick={() => setCurrentStep(1)} type="button" className="bg-white hover:bg-gray-50 text-gray-600 border-gray-200">
                            {t("change")}
                        </Button>
                    </div>
                )}
            </div>

            {/* STEP 2: DETAILS */}
            {currentStep >= 2 && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 delay-150">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                                <span className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold border ${currentStep >= 2 ? 'bg-primary-100 text-primary-700 border-primary-200' : 'bg-gray-100 text-gray-500'}`}>
                                    2
                                </span>
                                {t("shipmentDetails")}
                            </h3>
                            <Input
                                label={t("origin")}
                                placeholder="e.g. Ho Chi Minh City"
                                name="origin"
                                value={formData.origin}
                                onChange={handleInputChange}
                            />
                            <Select
                                label={t("incoterms")}
                                name="incoterms"
                                value={formData.incoterms}
                                onChange={handleSelectChange}
                                options={[
                                    { value: 'exw', label: 'EXW - Ex Works' },
                                    { value: 'fob', label: 'FOB - Free on Board' },
                                    { value: 'cif', label: 'CIF - Cost, Insurance & Freight' },
                                    { value: 'ddp', label: 'DDP - Delivered Duty Paid' },
                                ]}
                            />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-transparent select-none hidden md:block">Spacer</h3>
                            <Input
                                label={t("destination")}
                                placeholder="e.g. Los Angeles"
                                name="destination"
                                value={formData.destination}
                                onChange={handleInputChange}
                            />
                            <Input
                                label={t("grossWeight")}
                                type="number"
                                placeholder="0"
                                name="grossWeight"
                                value={formData.grossWeight}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="mt-8 space-y-4">
                        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                            <span className="h-8 w-8 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-sm font-bold border border-gray-200">3</span>
                            {t("contactInfo")}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input label={t("fullName")} placeholder="John Doe" name="fullName" value={formData.fullName} onChange={handleInputChange} />
                            <Input label={t("email")} type="email" placeholder="john@company.com" name="email" value={formData.email} onChange={handleInputChange} />
                            <div className="md:col-span-2">
                                <Input label={t("phone")} type="tel" placeholder="+84 ..." name="phone" value={formData.phone} onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 space-y-4">
                        <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                            {formData.serviceType === 'other' ? t("describeRequest") + ' *' : t("additionalDetails")}
                        </h3>
                        {formData.serviceType === 'other' && (
                            <p className="text-sm text-amber-600 bg-amber-50 p-3 rounded-lg border border-amber-200">
                                {t("otherServiceNote")}
                            </p>
                        )}
                        <Textarea
                            placeholder={formData.serviceType === 'other'
                                ? t("otherPlaceholder")
                                : t("detailsPlaceholder")
                            }
                            className="h-32"
                            name="details"
                            value={formData.details}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="mt-8 flex justify-end">
                        <Button size="lg" className="px-8" icon={<ArrowRight className="h-5 w-5" />} iconPosition="right" isLoading={isSubmitting}>
                            {t("requestQuote")}
                        </Button>
                    </div>
                </div>
            )}
        </form>
    );
}

export default function QuotePage() {
    const t = useTranslations("quote");
    return (
        <>
            <Navbar />
            <div className="pt-24 pb-12 min-h-screen bg-gray-50">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-heading">{t("title")}</h1>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                {t("subtitle")}
                            </p>
                        </div>
                        <Card className="shadow-xl bg-white/80 backdrop-blur-sm border-white/50">
                            <CardContent className="p-6 md:p-10">
                                <Suspense fallback={<div className="text-center py-10">Loading quote form...</div>}>
                                    <QuoteForm />
                                </Suspense>
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </div>
            <Footer />
        </>
    );
}
