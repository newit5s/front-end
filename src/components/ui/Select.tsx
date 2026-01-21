'use client';

import { forwardRef, SelectHTMLAttributes, useId } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
    label?: string;
    error?: string;
    helperText?: string;
    options: SelectOption[];
    fullWidth?: boolean;
    containerClassName?: string;
    placeholder?: string;
    size?: 'sm' | 'md' | 'lg';
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
    (
        {
            label,
            error,
            helperText,
            options,
            fullWidth = false,
            containerClassName,
            className,
            size = 'md',
            disabled,
            placeholder,
            id,
            ...props
        },
        ref
    ) => {
        const generatedId = useId();
        const selectId = id || generatedId;
        const errorId = `${selectId}-error`;
        const helperId = `${selectId}-helper`;

        const containerClasses = clsx(
            'flex flex-col gap-1.5',
            { 'w-full': fullWidth },
            containerClassName
        );

        const selectClasses = twMerge(
            clsx(
                // Base styles
                'flex w-full appearance-none rounded-lg border bg-white px-3 text-sm transition-colors',
                'placeholder:text-gray-400',
                'focus:outline-none focus:ring-2 focus:ring-offset-0',
                'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-50',

                // Size styles
                {
                    'h-8 py-1': size === 'sm',
                    'h-10 py-2': size === 'md',
                    'h-12 py-3 text-base': size === 'lg',
                },

                // State styles (Normal vs Error)
                error
                    ? 'border-red-500 text-red-900 focus:border-red-500 focus:ring-red-200'
                    : 'border-gray-200 text-gray-900 focus:border-primary-500 focus:ring-primary-100',

                className
            )
        );

        return (
            <div className={containerClasses}>
                {label && (
                    <label
                        htmlFor={selectId}
                        className={clsx(
                            'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                            error ? 'text-red-500' : 'text-gray-700'
                        )}
                    >
                        {label}
                    </label>
                )}

                <div className="relative">
                    <select
                        ref={ref}
                        id={selectId}
                        disabled={disabled}
                        aria-invalid={!!error}
                        aria-describedby={
                            error ? errorId : helperText ? helperId : undefined
                        }
                        className={selectClasses}
                        {...props}
                    >
                        {placeholder && (
                            <option value="" disabled>
                                {placeholder}
                            </option>
                        )}
                        {options.map((option) => (
                            <option
                                key={option.value}
                                value={option.value}
                                disabled={option.disabled}
                            >
                                {option.label}
                            </option>
                        ))}
                    </select>

                    {/* Custom Chevron Indicator */}
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={clsx({
                                'h-3 w-3': size === 'sm',
                                'h-4 w-4': size === 'md',
                                'h-5 w-5': size === 'lg',
                            })}
                        >
                            <path d="m6 9 6 6 6-6" />
                        </svg>
                    </div>
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

Select.displayName = 'Select';
