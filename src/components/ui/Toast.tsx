'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Types ---

export type ToastVariant = 'default' | 'success' | 'error' | 'warning';

export interface ToastProps {
    id: string;
    title?: string;
    description?: string;
    variant?: ToastVariant;
    duration?: number;
    onDismiss: (id: string) => void;
}

export interface ToastOptions {
    title?: string;
    description?: string;
    variant?: ToastVariant;
    duration?: number;
}

interface ToastContextType {
    toast: (options: ToastOptions) => void;
    dismiss: (id: string) => void;
}

// --- Context ---

const ToastContext = createContext<ToastContextType | undefined>(undefined);

// --- Hook ---

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

// --- Component: Toast ---

const Toast = ({
    id,
    title,
    description,
    variant = 'default',
    duration = 5000,
    onDismiss,
}: ToastProps) => {
    // Auto-dismiss
    React.useEffect(() => {
        const timer = setTimeout(() => {
            onDismiss(id);
        }, duration);
        return () => clearTimeout(timer);
    }, [id, duration, onDismiss]);

    return (
        <div
            className={twMerge(
                clsx(
                    'pointer-events-auto relative w-full overflow-hidden rounded-lg border p-4 shadow-lg transition-all',
                    'animate-in slide-in-from-right-full fade-in duration-300',
                    {
                        'bg-white border-gray-200 text-gray-950': variant === 'default',
                        'bg-green-50 border-green-200 text-green-900': variant === 'success',
                        'bg-red-50 border-red-200 text-red-900': variant === 'error',
                        'bg-amber-50 border-amber-200 text-amber-900': variant === 'warning',
                    }
                )
            )}
            role="alert"
        >
            <div className="flex items-start gap-4">
                <div className="flex-1">
                    {title && <h5 className="mb-1 font-medium leading-none tracking-tight">{title}</h5>}
                    {description && <div className="text-sm opacity-90">{description}</div>}
                </div>
                <button
                    onClick={() => onDismiss(id)}
                    className={clsx(
                        'inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-md text-sm font-medium transition-colors hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
                        variant === 'default' ? 'text-gray-500 hover:text-gray-900' : 'opacity-70 hover:opacity-100'
                    )}
                >
                    <span className="sr-only">Close</span>
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
                        className="h-4 w-4"
                    >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

// --- Provider ---

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toasts, setToasts] = useState<ToastProps[]>([]);

    const dismiss = useCallback((id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    const toast = useCallback(
        ({ title, description, variant = 'default', duration = 3000 }: ToastOptions) => {
            const id = Math.random().toString(36).substring(2, 9);
            setToasts((prev) => [
                ...prev,
                { id, title, description, variant, duration, onDismiss: dismiss },
            ]);
        },
        [dismiss]
    );

    return (
        <ToastContext.Provider value={{ toast, dismiss }}>
            {children}
            <div className="fixed bottom-0 right-0 z-[100] flex flex-col gap-2 p-4 w-full max-w-[420px] max-h-screen overflow-hidden pointer-events-none">
                {toasts.map((t) => (
                    <Toast key={t.id} {...t} />
                ))}
            </div>
        </ToastContext.Provider>
    );
};
