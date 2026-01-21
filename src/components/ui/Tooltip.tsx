'use client';

import * as React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Context ---
interface TooltipContextValue {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}
const TooltipContext = React.createContext<TooltipContextValue | undefined>(undefined);

const useTooltip = () => {
    const context = React.useContext(TooltipContext);
    if (!context) {
        throw new Error('Tooltip components must be used within a TooltipProvider and Tooltip');
    }
    return context;
};

// --- Provider ---
// Basic Provider to simplify API, though we handle state in TooltipRoot
// In more complex libs (Radix), Provider handles global settings.
const TooltipProvider = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};

// --- Components ---

interface TooltipProps {
    children: React.ReactNode;
    delayDuration?: number;
}

const Tooltip = ({ children, delayDuration = 300 }: TooltipProps) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    const open = React.useCallback(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setIsOpen(true);
        }, delayDuration);
    }, [delayDuration]);

    const close = React.useCallback(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsOpen(false);
    }, []);

    // Cleanup
    React.useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        }
    }, []);

    return (
        <TooltipContext.Provider value={{ isOpen, open, close }}>
            <div className="relative inline-block">
                {children}
            </div>
        </TooltipContext.Provider>
    );
};


const TooltipTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
    ({ className, children, ...props }, ref) => {
        const { open, close } = useTooltip();

        return (
            <button
                ref={ref}
                type="button"
                onMouseEnter={open}
                onMouseLeave={close}
                onFocus={open}
                onBlur={close}
                className={className}
                {...props}
            >
                {children}
            </button>
        );
    }
);
TooltipTrigger.displayName = 'TooltipTrigger';


interface TooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
    side?: 'top' | 'bottom' | 'left' | 'right';
}

const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>(
    ({ className, side = 'top', children, ...props }, ref) => {
        const { isOpen } = useTooltip();

        if (!isOpen) return null;

        return (
            <div
                ref={ref}
                className={twMerge(
                    clsx(
                        'absolute z-50 overflow-hidden rounded-md bg-gray-900 px-3 py-1.5 text-xs text-white animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
                        {
                            // Simplified positioning using Tailwind
                            // For robust positioning, libraries like Popper or Floating UI are recommended. 
                            // Here we use absolute positioning relative to the container.
                            'bottom-full left-1/2 -translate-x-1/2 mb-2': side === 'top',
                            'top-full left-1/2 -translate-x-1/2 mt-2': side === 'bottom',
                            'right-full top-1/2 -translate-y-1/2 mr-2': side === 'left',
                            'left-full top-1/2 -translate-y-1/2 ml-2': side === 'right',
                        },
                        className
                    )
                )}
                data-side={side}
                {...props}
            >
                {children}
                {/* Optional Arrow */}
                {/* <div className="absolute w-2 h-2 bg-gray-900 rotate-45 ..." /> */}
            </div>
        );
    }
);
TooltipContent.displayName = 'TooltipContent';

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent };
