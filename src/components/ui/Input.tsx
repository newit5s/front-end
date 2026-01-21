'use client';

import { forwardRef, InputHTMLAttributes, ReactNode, useId } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    error?: string;
    helperText?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    fullWidth?: boolean;
    containerClassName?: string;
    size?: 'sm' | 'md' | 'lg';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            error,
            helperText,
            leftIcon,
            rightIcon,
            fullWidth = false,
            containerClassName,
            className,
            size = 'md',
            disabled,
            id,
            ...props
        },
        ref
    ) => {
        const generatedId = useId();
        const inputId = id || generatedId;
        const errorId = `${inputId}-error`;
        const helperId = `${inputId}-helper`;

        const containerClasses = clsx(
            'flex flex-col gap-1.5',
            { 'w-full': fullWidth },
            containerClassName
        );

        const inputClasses = twMerge(
            clsx(
                // Base styles
                'flex w-full rounded-lg border bg-white px-3 text-sm transition-colors',
                'placeholder:text-gray-400',
                'focus:outline-none focus:ring-2 focus:ring-offset-0',
                'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-50',

                // Size styles
                {
                    'h-8 py-1': size === 'sm',
                    'h-10 py-2': size === 'md',
                    'h-12 py-3 text-base': size === 'lg',
                },

                // Icon padding adjustments
                {
                    'pl-9': !!leftIcon,
                    'pr-9': !!rightIcon,
                },

                // State styles (Normal vs Error)
                error
                    ? 'border-red-500 text-red-900 focus:border-red-500 focus:ring-red-200'
                    : 'border-gray-200 text-gray-900 focus:border-primary-500 focus:ring-primary-100', // Using Brand Colors

                className
            )
        );

        return (
            <div className={containerClasses}>
                {label && (
                    <label
                        htmlFor={inputId}
                        className={clsx(
                            'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                            error ? 'text-red-500' : 'text-gray-700'
                        )}
                    >
                        {label}
                    </label>
                )}

                <div className="relative">
                    {leftIcon && (
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            {leftIcon}
                        </div>
                    )}

                    <input
                        ref={ref}
                        id={inputId}
                        disabled={disabled}
                        aria-invalid={!!error}
                        aria-describedby={
                            error ? errorId : helperText ? helperId : undefined
                        }
                        className={inputClasses}
                        {...props}
                    />

                    {rightIcon && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                            {rightIcon}
                        </div>
                    )}
                </div>

                {error && (
                    <p id={errorId} className="text-sm font-medium text-red-500">
                        {error}
                    </p>
                )}

                {!error && helperText && (
                    <p id={helperId} className="text-sm text-gray-500">
                        {helperText}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';
