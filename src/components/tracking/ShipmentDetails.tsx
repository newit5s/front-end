import { Package, MapPin, Calendar, Scale, Anchor, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

// Mock data interface for now
export interface ShipmentData {
    id: string;
    origin: string;
    destination: string;
    status: "In Transit" | "Delivered" | "Pending" | "Exception";
    eta: string;
    carrier: string;
    type: string;
    weight: string;
    pieces: number;
}

interface ShipmentDetailsProps {
    data: ShipmentData;
}

export function ShipmentDetails({ data }: ShipmentDetailsProps) {
    const getStatusColor = (status: string) => {
        switch (status) {
            case "Delivered": return "success"; // Assuming Badge supports this or we use default variants
            case "In Transit": return "secondary"; // Blueish usually
            case "Exception": return "destructive";
            default: return "outline";
        }
    };

    return (
        <Card className="w-full h-full">
            <CardHeader className="border-b bg-gray-50/50 pb-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <p className="text-sm font-medium text-gray-500">Tracking Number</p>
                        <CardTitle className="text-2xl font-bold font-mono text-primary-600">{data.id}</CardTitle>
                    </div>
                    <Badge
                        variant={getStatusColor(data.status) as any}
                        className="self-start md:self-center px-4 py-1.5 text-sm"
                    >
                        {data.status}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="p-6 space-y-8">
                {/* Route */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full border-t-2 border-dashed border-gray-200 -z-10" />

                    <div className="flex items-center gap-3 bg-white pr-4 z-10">
                        <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 shadow-sm">
                            <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Origin</p>
                            <p className="text-lg font-semibold text-gray-900">{data.origin}</p>
                        </div>
                    </div>

                    <div className="flex md:hidden items-center justify-center w-full py-2">
                        <ArrowRight className="h-5 w-5 text-gray-400 rotate-90" />
                    </div>

                    <div className="flex items-center gap-3 bg-white pl-4 z-10 md:ml-auto">
                        <div className="text-right mr-3 hidden md:block">
                            <p className="text-sm text-gray-500 font-medium">Destination</p>
                            <p className="text-lg font-semibold text-gray-900">{data.destination}</p>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 shadow-sm order-first md:order-last">
                            <MapPin className="h-5 w-5" />
                        </div>
                        <div className="md:hidden">
                            <p className="text-sm text-gray-500 font-medium">Destination</p>
                            <p className="text-lg font-semibold text-gray-900">{data.destination}</p>
                        </div>
                    </div>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 border-t">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <Anchor className="h-4 w-4" />
                            <span>Carrier</span>
                        </div>
                        <p className="font-semibold">{data.carrier}</p>
                    </div>
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <Package className="h-4 w-4" />
                            <span>Type/Pkg</span>
                        </div>
                        <p className="font-semibold">{data.type} ({data.pieces} pcs)</p>
                    </div>
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <Scale className="h-4 w-4" />
                            <span>Weight</span>
                        </div>
                        <p className="font-semibold">{data.weight}</p>
                    </div>
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <Calendar className="h-4 w-4" />
                            <span>ETA</span>
                        </div>
                        <p className="font-semibold text-primary-600">{data.eta}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
