'use client';

import { forwardRef, InputHTMLAttributes, useId } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    error?: string;
    containerClassName?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
    (
        { label, error, containerClassName, className, disabled, id, ...props },
        ref
    ) => {
        const generatedId = useId();
        const radioId = id || generatedId;
        const errorId = `${radioId}-error`;

        return (
            <div className={clsx('flex flex-col gap-1.5', containerClassName)}>
                <div className="flex items-start gap-3">
                    <div className="relative flex items-center h-5">
                        <input
                            ref={ref}
                            id={radioId}
                            type="radio"
                            disabled={disabled}
                            className="peer absolute inset-0 h-full w-full opacity-0 cursor-pointer z-10 disabled:cursor-not-allowed"
                            aria-invalid={!!error}
                            aria-describedby={error ? errorId : undefined}
                            {...props}
                        />
                        <div
                            className={twMerge(
                                clsx(
                                    // Base styles
                                    'h-5 w-5 rounded-full border bg-white transition-all duration-200 ease-in-out',
                                    'flex items-center justify-center',

                                    // Focus ring
                                    'peer-focus-visible:ring-2 peer-focus-visible:ring-primary-100 peer-focus-visible:ring-offset-2',

                                    // Checked state (Border change)
                                    'peer-checked:border-primary-500 peer-checked:bg-white',

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
                            {/* Inner Dot */}
                            <div
                                className={clsx(
                                    "h-2.5 w-2.5 rounded-full bg-primary-500 opacity-0 transform scale-0 transition-all duration-200",
                                    "peer-checked:opacity-100 peer-checked:scale-100",
                                    { 'bg-gray-400': disabled } // Gray dot if disabled
                                )}
                            />
                        </div>
                    </div>

                    {label && (
                        <label
                            htmlFor={radioId}
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

Radio.displayName = 'Radio';
