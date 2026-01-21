'use client';

import {
    HTMLAttributes,
    forwardRef,
    useEffect,
    useState,
    useCallback,
    MouseEvent,
} from 'react';
import { createPortal } from 'react-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children, className, ...props }: ModalProps) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        // Prevent scrolling when modal is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // keydown 'Escape' to close
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);


    if (!isMounted) return null;
    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/50 transition-opacity animate-in fade-in duration-200"
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Content Container */}
            <div
                className={twMerge(
                    clsx(
                        'relative z-50 w-full max-w-lg scale-100 gap-4 bg-white p-6 opacity-100 shadow-lg rounded-xl',
                        'animate-in fade-in zoom-in-95 duration-200 sm:rounded-xl',
                        className
                    )
                )}
                {...props}
            >
                {children}

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-gray-100 data-[state=open]:text-gray-500"
                >
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
                    <span className="sr-only">Close</span>
                </button>
            </div>
        </div>,
        document.body
    );
};
Modal.displayName = 'Modal';

const ModalHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={twMerge(
                clsx('flex flex-col space-y-1.5 text-center sm:text-left', className)
            )}
            {...props}
        />
    )
);
ModalHeader.displayName = 'ModalHeader';

const ModalFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={twMerge(
                clsx(
                    'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
                    className
                )
            )}
            {...props}
        />
    )
);
ModalFooter.displayName = 'ModalFooter';

const ModalTitle = forwardRef<
    HTMLHeadingElement,
    HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={twMerge(
            clsx('text-lg font-semibold leading-none tracking-tight text-gray-900', className)
        )}
        {...props}
    />
));
ModalTitle.displayName = 'ModalTitle';

const ModalDescription = forwardRef<
    HTMLParagraphElement,
    HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={twMerge(clsx('text-sm text-gray-500', className))}
        {...props}
    />
));
ModalDescription.displayName = 'ModalDescription';

export { Modal, ModalHeader, ModalFooter, ModalTitle, ModalDescription };
