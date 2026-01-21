import { HTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'secondary' | 'outline' | 'destructive' | 'success' | 'warning';
    size?: 'sm' | 'md';
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
    ({ className, variant = 'default', size = 'md', ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={twMerge(
                    clsx(
                        'inline-flex items-center rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
                        {
                            // Variant styles
                            'border-transparent bg-primary-500 text-white hover:bg-primary-600':
                                variant === 'default',
                            'border-transparent bg-secondary-500 text-white hover:bg-secondary-600':
                                variant === 'secondary',
                            'text-primary-500 border border-primary-500': variant === 'outline',
                            'border-transparent bg-red-500 text-white hover:bg-red-600':
                                variant === 'destructive',
                            'border-transparent bg-green-500 text-white hover:bg-green-600':
                                variant === 'success',
                            'border-transparent bg-amber-500 text-white hover:bg-amber-600':
                                variant === 'warning',

                            // Size styles
                            'px-2.5 py-0.5 text-xs': size === 'md',
                            'px-2 py-[2px] text-[10px]': size === 'sm',
                        },
                        className
                    )
                )}
                {...props}
            />
        );
    }
);

Badge.displayName = 'Badge';
