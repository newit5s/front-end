import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'primary' | 'white' | 'gray';
}

export const Spinner = ({
    className,
    size = 'md',
    variant = 'primary',
    ...props
}: SpinnerProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={twMerge(
                clsx(
                    "animate-spin",
                    {
                        // Sizes
                        "h-4 w-4": size === "sm",
                        "h-6 w-6": size === "md",
                        "h-8 w-8": size === "lg",
                        "h-12 w-12": size === "xl",

                        // Variants (Colors)
                        "text-primary-500": variant === "primary",
                        "text-white": variant === "white",
                        "text-gray-500": variant === "gray",
                    },
                    className
                )
            )}
            {...props}
        >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
    );
};
Spinner.displayName = 'Spinner';
