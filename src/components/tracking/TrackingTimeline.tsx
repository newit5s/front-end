import { CheckCircle2, Circle, Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TimelineEvent {
    status: string;
    date: string;
    time: string;
    location: string;
    description: string;
    completed: boolean;
    current?: boolean;
}

interface TrackingTimelineProps {
    events: TimelineEvent[];
}

export function TrackingTimeline({ events }: TrackingTimelineProps) {
    return (
        <div className="w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Shipment Progress</h3>
            <div className="space-y-0 relative">
                {/* Vertical Line */}
                <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-gray-100 z-0" />

                {events.map((event, index) => {
                    const isLast = index === events.length - 1;

                    return (
                        <div key={index} className="relative flex gap-6 pb-8 last:pb-0 group">
                            {/* Icon/Indicator */}
                            <div className="relative z-10 flex-shrink-0">
                                {event.completed ? (
                                    <div className="h-10 w-10 rounded-full bg-green-50 border-2 border-green-500 flex items-center justify-center text-green-600 shadow-sm">
                                        <CheckCircle2 className="h-5 w-5" />
                                    </div>
                                ) : event.current ? (
                                    <div className="h-10 w-10 rounded-full bg-blue-50 border-2 border-blue-500 flex items-center justify-center text-blue-600 shadow-md ring-4 ring-blue-50">
                                        <Clock className="h-5 w-5 animate-pulse" />
                                    </div>
                                ) : (
                                    <div className="h-10 w-10 rounded-full bg-gray-50 border-2 border-gray-300 flex items-center justify-center text-gray-400">
                                        <Circle className="h-5 w-5" />
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className={cn(
                                "flex-1 pt-1",
                                !event.completed && !event.current && "opacity-60"
                            )}>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                                    <div>
                                        <h4 className={cn(
                                            "font-semibold text-lg",
                                            event.current ? "text-blue-700" : "text-gray-900"
                                        )}>
                                            {event.status}
                                        </h4>
                                        <p className="text-gray-600 mt-1 max-w-md">{event.description}</p>

                                        {event.location && (
                                            <div className="flex items-center gap-1.5 mt-2 text-sm text-gray-500">
                                                <MapPin className="h-4 w-4" />
                                                <span>{event.location}</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-left sm:text-right mt-2 sm:mt-0">
                                        <p className="font-medium text-gray-900">{event.date}</p>
                                        <p className="text-sm text-gray-500">{event.time}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
