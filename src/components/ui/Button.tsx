'use client';

import { forwardRef, ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    fullWidth?: boolean;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    children?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = 'primary',
            size = 'md',
            isLoading = false,
            fullWidth = false,
            icon,
            iconPosition = 'left',
            children,
            className,
            disabled,
            type = 'button',
            ...props
        },
        ref
    ) => {
        // Merge base styles, variant styles, size styles, and custom classes
        const buttonClasses = twMerge(
            clsx(
                // Base styles
                'inline-flex items-center justify-center',
                'font-medium rounded-lg',
                'transition-all duration-200 ease-in-out',
                'focus:outline-none focus:ring-2 focus:ring-offset-2',
                'disabled:opacity-50 disabled:cursor-not-allowed',

                // Variant styles
                {
                    'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500 hover:-translate-y-[1px] shadow-sm hover:shadow-md':
                        variant === 'primary',
                    'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500 hover:-translate-y-[1px] shadow-sm hover:shadow-md':
                        variant === 'secondary',
                    'border-2 border-primary-500 text-primary-500 hover:bg-primary-50 focus:ring-primary-500':
                        variant === 'outline',
                    'text-primary-500 hover:bg-primary-50 focus:ring-primary-500':
                        variant === 'ghost',
                },

                // Size styles
                {
                    'px-3 py-1.5 text-sm': size === 'sm',
                    'px-4 py-2 text-base': size === 'md',
                    'px-6 py-3 text-lg': size === 'lg',
                },

                // Layout
                {
                    'w-full': fullWidth,
                },

                // Custom classes
                className
            )
        );

        const Spinner = () => (
            <svg
                className={clsx('animate-spin -ml-1 mr-2', {
                    'h-3 w-3': size === 'sm',
                    'h-4 w-4': size === 'md',
                    'h-5 w-5': size === 'lg',
                })}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                ></circle>
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
            </svg>
        );

        return (
            <button
                ref={ref}
                type={type}
                className={buttonClasses}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading && <Spinner />}
                {!isLoading && icon && iconPosition === 'left' && (
                    <span className="mr-2 inline-flex items-center">{icon}</span>
                )}
                {children}
                {!isLoading && icon && iconPosition === 'right' && (
                    <span className="ml-2 inline-flex items-center">{icon}</span>
                )}
            </button>
        );
    }
);

Button.displayName = 'Button';
