"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent } from "@/components/ui/Card";

interface TrackingFormProps {
    onSearch: (trackingNumber: string) => void;
    isLoading?: boolean;
}

export function TrackingForm({ onSearch, isLoading = false }: TrackingFormProps) {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!value.trim()) {
            setError("Please enter a tracking number");
            return;
        }
        setError("");
        onSearch(value);
    };

    return (
        <Card className="w-full max-w-2xl mx-auto shadow-lg border-primary-100/50">
            <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                        <Input
                            placeholder="Enter Bill of Lading, Container, or Booking No."
                            value={value}
                            onChange={(e) => {
                                setValue(e.target.value);
                                if (error) setError("");
                            }}
                            error={error}
                            className="h-12 text-lg"
                            leftIcon={<Search className="w-5 h-5 text-gray-400" />}
                        />
                    </div>
                    <Button
                        type="submit"
                        size="lg"
                        isLoading={isLoading}
                        className="h-12 px-8 font-semibold"
                    >
                        Track Shipment
                    </Button>
                </form>
                <p className="mt-3 text-sm text-gray-500 text-center md:text-left">
                    Track up to 10 shipments at once. Separate by comma.
                </p>
            </CardContent>
        </Card>
    );
}
