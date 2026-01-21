'use client';

import * as React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Context ---
type AccordionType = 'single' | 'multiple';

interface AccordionContextValue {
    type: AccordionType;
    value: string[]; // Always store as array for uniformity
    onValueChange: (value: string) => void;
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(undefined);

const useAccordion = () => {
    const context = React.useContext(AccordionContext);
    if (!context) {
        throw new Error('AccordionItem must be used within an Accordion');
    }
    return context;
};

// --- Components ---

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
    type?: AccordionType;
    defaultValue?: string | string[];
    value?: string | string[];
    onValueChange?: (value: string | string[]) => void;
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
    ({ type = 'single', defaultValue, value: controlledValue, onValueChange, className, children, ...props }, ref) => {
        // Normalize value to string[]
        const ensureArray = (val: string | string[] | undefined): string[] => {
            if (val === undefined) return [];
            if (Array.isArray(val)) return val;
            return [val];
        }

        // Internal state for uncontrolled usage
        const [uncontrolledValue, setUncontrolledValue] = React.useState<string[]>(
            ensureArray(defaultValue)
        );

        const value = controlledValue !== undefined ? ensureArray(controlledValue) : uncontrolledValue;

        const handleValueChange = React.useCallback((itemValue: string) => {
            let newValue: string[] = [];

            if (type === 'single') {
                // If clicking the already open item, close it (toggle). Else, replace it.
                newValue = value.includes(itemValue) ? [] : [itemValue];
            } else {
                // Multiple: Toggle the specific item
                if (value.includes(itemValue)) {
                    newValue = value.filter(v => v !== itemValue);
                } else {
                    newValue = [...value, itemValue];
                }
            }

            // Update state
            if (controlledValue === undefined) {
                setUncontrolledValue(newValue);
            }

            // Notify parent
            if (onValueChange) {
                // Return string if single, string[] if multiple to match expected signature
                // casting to any to satisfy the union type flexibility
                onValueChange(type === 'single' ? (newValue[0] || '') : newValue as any);
            }
        }, [type, value, controlledValue, onValueChange]);


        return (
            <AccordionContext.Provider value={{ type, value, onValueChange: handleValueChange }}>
                <div ref={ref} className={className} {...props}>
                    {children}
                </div>
            </AccordionContext.Provider>
        );
    }
);
Accordion.displayName = 'Accordion';


const AccordionItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { value: string }>(
    ({ className, value, ...props }, ref) => (
        <div
            ref={ref}
            className={twMerge(clsx('border-b', className))}
            data-value={value}
            {...props}
        />
    )
);
AccordionItem.displayName = 'AccordionItem';


const AccordionTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
    ({ className, children, ...props }, ref) => {
        const { value: selectedValues, onValueChange } = useAccordion();
        // Helper to find the parent Item's value. 
        // In a real generic component we might use another Context for Item, strictly iterating up the tree.
        // For simplicity, we assume this is used correctly inside AccordionItem or we need to pass value to Trigger too.
        // To do this properly without prop drilling, let's create an ItemContext.

        // Retrying with simple Context nesting or requiring value prop? 
        // Best practice: AccordionItemContext.

        return (
            <AccordionTriggerInternal ref={ref} className={className} {...props}>
                {children}
            </AccordionTriggerInternal>
        )
    }
);
AccordionTrigger.displayName = 'AccordionTrigger';

// --- Item Context for cleaner API ---
const AccordionItemContext = React.createContext<{ value: string } | undefined>(undefined);

const AccordionItemWrapper = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { value: string }>(
    ({ className, value, children, ...props }, ref) => (
        <AccordionItemContext.Provider value={{ value }}>
            <div
                ref={ref}
                className={twMerge(clsx('border-b', className))}
                {...props}
            >
                {children}
            </div>
        </AccordionItemContext.Provider>
    )
);
AccordionItemWrapper.displayName = 'AccordionItem';

const AccordionTriggerInternal = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
    ({ className, children, onClick, ...props }, ref) => {
        const { value, onValueChange } = useAccordion();
        const itemContext = React.useContext(AccordionItemContext);

        if (!itemContext) throw new Error('AccordionTrigger must be used within AccordionItem');

        const isOpen = value.includes(itemContext.value);

        return (
            <div className="flex">
                <button
                    ref={ref}
                    type="button"
                    onClick={(e) => {
                        onValueChange(itemContext.value);
                        onClick?.(e);
                    }}
                    aria-expanded={isOpen}
                    className={twMerge(clsx(
                        'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[aria-expanded=true]>svg]:rotate-180',
                        className
                    ))}
                    {...props}
                >
                    {children}
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
                        className="h-4 w-4 shrink-0 transition-transform duration-200"
                    >
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </button>
            </div>
        )
    }
);

// Improving Animation with Grid
const AccordionContentGrid = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, children, ...props }, ref) => {
        const { value } = useAccordion();
        const itemContext = React.useContext(AccordionItemContext);
        if (!itemContext) throw new Error('AccordionContent must be used within AccordionItem');

        const isOpen = value.includes(itemContext.value);

        return (
            <div
                className={clsx(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
            >
                <div
                    ref={ref}
                    className={twMerge(clsx("overflow-hidden", className))}
                    {...props}
                >
                    <div className="pb-4 pt-0">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
);
AccordionContentGrid.displayName = 'AccordionContent';

export { Accordion, AccordionItemWrapper as AccordionItem, AccordionTrigger, AccordionContentGrid as AccordionContent };
