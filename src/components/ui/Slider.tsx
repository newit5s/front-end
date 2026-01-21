"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SliderProps {
    value: number;
    onValueChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    className?: string;
}

const Slider = ({
    value,
    onValueChange,
    min = 0,
    max = 100,
    step = 1,
    disabled = false,
    className,
}: SliderProps) => {
    const trackRef = React.useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = React.useState(false);

    const percentage = ((value - min) / (max - min)) * 100;

    const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
        if (disabled || !trackRef.current) return;

        // Prevent default to avoid text selection issues
        event.preventDefault();

        setIsDragging(true);
        // Capture pointer to ensure we receive events even if cursor leaves the element
        event.currentTarget.setPointerCapture(event.pointerId);

        updateValue(event.clientX);
    };

    const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
        if (!isDragging || disabled) return;
        updateValue(event.clientX);
    };

    const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
        if (disabled) return;
        setIsDragging(false);
        event.currentTarget.releasePointerCapture(event.pointerId);
    };

    const updateValue = (clientX: number) => {
        if (!trackRef.current) return;

        const rect = trackRef.current.getBoundingClientRect();
        const percent = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
        const rawValue = percent * (max - min) + min;
        const steppedValue = Math.round(rawValue / step) * step;
        const clampedValue = Math.min(Math.max(steppedValue, min), max); // Ensure within bounds

        if (clampedValue !== value) {
            onValueChange(clampedValue);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (disabled) return;

        let newValue = value;
        if (event.key === "ArrowLeft" || event.key === "ArrowDown") {
            newValue = Math.max(value - step, min);
        } else if (event.key === "ArrowRight" || event.key === "ArrowUp") {
            newValue = Math.min(value + step, max);
        } else if (event.key === "Home") {
            newValue = min;
        } else if (event.key === "End") {
            newValue = max;
        } else {
            return;
        }

        event.preventDefault(); // Prevent scroll
        onValueChange(newValue);
    };

    return (
        <div
            role="slider"
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={value}
            aria-disabled={disabled}
            tabIndex={disabled ? -1 : 0}
            onKeyDown={handleKeyDown}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className={cn(
                "relative flex w-full touch-none select-none items-center py-4 cursor-pointer outline-none",
                disabled && "cursor-not-allowed opacity-50",
                className
            )}
        >
            {/* Track */}
            <div
                ref={trackRef}
                className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-200"
            >
                {/* Range */}
                <div
                    className="absolute h-full bg-primary transition-[width] duration-75 ease-out"
                    style={{ width: `${percentage}%` }}
                />
            </div>

            {/* Thumb */}
            <div
                className={cn(
                    "absolute block h-5 w-5 rounded-full border-2 border-primary bg-white ring-offset-white transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-110",
                    isDragging && "scale-110 cursor-grabbing"
                )}
                style={{
                    left: `${percentage}%`,
                    transform: `translateX(-50%) ${isDragging ? 'scale(1.1)' : ''}`
                }}
            />
        </div>
    );
};

export { Slider };
