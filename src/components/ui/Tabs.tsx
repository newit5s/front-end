'use client';

import * as React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Context ---
interface TabsContextValue {
    value: string;
    onValueChange: (value: string) => void;
}
const TabsContext = React.createContext<TabsContextValue | undefined>(undefined);

const useTabs = () => {
    const context = React.useContext(TabsContext);
    if (!context) {
        throw new Error('Tabs compound components must be used within key Tabs component');
    }
    return context;
};

// --- Components ---

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
    ({ defaultValue, value: controlledValue, onValueChange, children, ...props }, ref) => {
        const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue);

        const value = controlledValue !== undefined ? controlledValue : uncontrolledValue;

        // Safety check: ensure we have a value relative to controlled/uncontrolled usage
        // If both are undefined, value will be undefined, which might be okay if no tabs are selected initially

        const handleValueChange = React.useCallback((newValue: string) => {
            if (onValueChange) {
                onValueChange(newValue);
            }
            if (controlledValue === undefined) {
                setUncontrolledValue(newValue);
            }
        }, [onValueChange, controlledValue]);

        return (
            <TabsContext.Provider value={{ value: value || '', onValueChange: handleValueChange }}>
                <div ref={ref} {...props}>
                    {children}
                </div>
            </TabsContext.Provider>
        );
    }
);
Tabs.displayName = 'Tabs';


const TabsList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={twMerge(
                clsx(
                    'inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500',
                    className
                )
            )}
            {...props}
        />
    )
);
TabsList.displayName = 'TabsList';


interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string;
}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
    ({ className, value, onClick, ...props }, ref) => {
        const context = useTabs();
        const isActive = context.value === value;

        return (
            <button
                ref={ref}
                type="button"
                role="tab"
                aria-selected={isActive}
                data-state={isActive ? 'active' : 'inactive'}
                className={twMerge(
                    clsx(
                        'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                        'data-[state=active]:bg-white data-[state=active]:text-gray-950 data-[state=active]:shadow-sm',
                        'hover:text-gray-900',
                        className
                    )
                )}
                onClick={(e) => {
                    context.onValueChange(value);
                    onClick?.(e);
                }}
                {...props}
            />
        );
    }
);
TabsTrigger.displayName = 'TabsTrigger';


interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
    ({ className, value, ...props }, ref) => {
        const context = useTabs();
        const isActive = context.value === value;

        if (!isActive) return null;

        return (
            <div
                ref={ref}
                role="tabpanel"
                data-state={isActive ? 'active' : 'inactive'}
                className={twMerge(
                    clsx(
                        'mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2',
                        'animate-in fade-in zoom-in-95 duration-200',
                        className
                    )
                )}
                {...props}
            />
        );
    }
);
TabsContent.displayName = 'TabsContent';

export { Tabs, TabsList, TabsTrigger, TabsContent };
