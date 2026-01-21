import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    fluid?: boolean;
}

export function Container({ className, fluid = false, children, ...props }: ContainerProps) {
    return (
        <div
            className={cn(
                "w-full px-4 md:px-6 mx-auto",
                fluid ? "max-w-full" : "max-w-7xl",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
