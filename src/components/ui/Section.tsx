import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    background?: "white" | "gray" | "dark" | "primary";
}

export function Section({ className, background = "white", children, ...props }: SectionProps) {
    const bgColors = {
        white: "bg-white",
        gray: "bg-gray-50",
        dark: "bg-gray-900",
        primary: "bg-primary-900"
    };

    return (
        <section
            className={cn(
                "py-16 md:py-24", // Standard vertical rhythm
                bgColors[background],
                className
            )}
            {...props}
        >
            {children}
        </section>
    );
}
