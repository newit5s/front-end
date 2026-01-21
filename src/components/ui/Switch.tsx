"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SwitchProps {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
    disabled?: boolean;
    className?: string;
    size?: "sm" | "md" | "lg";
}

const Switch = ({
    checked,
    onCheckedChange,
    disabled = false,
    className,
    size = "md",
}: SwitchProps) => {
    const sizeClasses = {
        sm: "h-5 w-9",
        md: "h-6 w-11",
        lg: "h-7 w-14",
    };

    const thumbSizes = {
        sm: "h-3 w-3 translate-x-1 data-[state=checked]:translate-x-5",
        md: "h-4 w-4 translate-x-1 data-[state=checked]:translate-x-6",
        lg: "h-5 w-5 translate-x-1 data-[state=checked]:translate-x-8",
    };

    // Adjust translation for unchecked state to be consistent
    const thumbTranslateClasses = {
        sm: checked ? "translate-x-5" : "translate-x-1",
        md: checked ? "translate-x-6" : "translate-x-1",
        lg: checked ? "translate-x-8" : "translate-x-1",
    };

    return (
        <button
            type="button"
            role="switch"
            aria-checked={checked}
            disabled={disabled}
            onClick={() => !disabled && onCheckedChange(!checked)}
            className={cn(
                "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50",
                checked ? "bg-primary" : "bg-gray-200",
                sizeClasses[size],
                className
            )}
        >
            <span
                data-state={checked ? "checked" : "unchecked"}
                className={cn(
                    "pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform",
                    size === "sm" && "h-3 w-3",
                    size === "md" && "h-5 w-5",
                    size === "lg" && "h-6 w-6",
                    thumbTranslateClasses[size]
                )}
            />
        </button>
    );
};

export { Switch };
