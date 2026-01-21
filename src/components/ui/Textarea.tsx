'use client';

import { forwardRef, TextareaHTMLAttributes, useId } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    helperText?: string;
    fullWidth?: boolean;
    containerClassName?: string;
    rows?: number;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    (
        {
            label,
            error,
            helperText,
            fullWidth = false,
            containerClassName,
            className,
            disabled,
            id,
            rows = 4,
            ...props
        },
        ref
    ) => {
        const generatedId = useId();
        const textareaId = id || generatedId;
        const errorId = `${textareaId}-error`;
        const helperId = `${textareaId}-helper`;

        const containerClasses = clsx(
            'flex flex-col gap-1.5',
            { 'w-full': fullWidth },
            containerClassName
        );

        const textareaClasses = twMerge(
            clsx(
                // Base styles
                'flex w-full rounded-lg border bg-white px-3 py-2 text-sm transition-colors',
                'placeholder:text-gray-400',
                'focus:outline-none focus:ring-2 focus:ring-offset-0',
                'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-50',
                'min-h-[80px]', // Minimum height

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
                        htmlFor={textareaId}
                        className={clsx(
                            'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                            error ? 'text-red-500' : 'text-gray-700'
                        )}
                    >
                        {label}
                    </label>
                )}

                <textarea
                    ref={ref}
                    id={textareaId}
                    rows={rows}
                    disabled={disabled}
                    aria-invalid={!!error}
                    aria-describedby={
                        error ? errorId : helperText ? helperId : undefined
                    }
                    className={textareaClasses}
                    {...props}
                />

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

Textarea.displayName = 'Textarea';
