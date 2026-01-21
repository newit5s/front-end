'use client';

import { forwardRef, InputHTMLAttributes, useId } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    error?: string;
    containerClassName?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    (
        { label, error, containerClassName, className, disabled, id, ...props },
        ref
    ) => {
        const generatedId = useId();
        const checkboxId = id || generatedId;
        const errorId = `${checkboxId}-error`;

        return (
            <div className={clsx('flex flex-col gap-1.5', containerClassName)}>
                <div className="flex items-start gap-3">
                    <div className="relative flex items-center h-5">
                        <input
                            ref={ref}
                            id={checkboxId}
                            type="checkbox"
                            disabled={disabled}
                            className="peer absolute inset-0 h-full w-full opacity-0 cursor-pointer z-10"
                            aria-invalid={!!error}
                            aria-describedby={error ? errorId : undefined}
                            {...props}
                        />
                        <div
                            className={twMerge(
                                clsx(
                                    // Base styles
                                    'h-5 w-5 rounded border bg-white transition-all duration-200 ease-in-out',
                                    'flex items-center justify-center',

                                    // Focus ring (via peer-focus on parent or simulate with peer-focus-visible)
                                    'peer-focus-visible:ring-2 peer-focus-visible:ring-primary-100 peer-focus-visible:ring-offset-2',

                                    // Styles based on state
                                    'peer-checked:bg-primary-500 peer-checked:border-primary-500',

                                    // Disabled state
                                    'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
                                    'peer-disabled:bg-gray-100 peer-disabled:border-gray-200',

                                    // Error state
                                    error
                                        ? 'border-red-500 peer-focus-visible:ring-red-200'
                                        : 'border-gray-300 hover:border-primary-400',

                                    className
                                )
                            )}
                        >
                            <svg
                                className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200 pointer-events-none"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                    </div>

                    {label && (
                        <label
                            htmlFor={checkboxId}
                            className={clsx(
                                'text-sm font-medium leading-5 text-gray-700 select-none cursor-pointer',
                                'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
                                error && 'text-red-600'
                            )}
                        >
                            {label}
                        </label>
                    )}
                </div>

                {error && (
                    <p id={errorId} className="text-sm font-medium text-red-500 pl-8">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

Checkbox.displayName = 'Checkbox';
