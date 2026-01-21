import { HTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Card
const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={twMerge(
                clsx(
                    'rounded-xl border border-gray-100 bg-white text-gray-950 shadow-sm transition-all hover:shadow-md',
                    className
                )
            )}
            {...props}
        />
    )
);
Card.displayName = 'Card';

// CardHeader
const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={twMerge(clsx('flex flex-col space-y-1.5 p-6', className))}
            {...props}
        />
    )
);
CardHeader.displayName = 'CardHeader';

// CardTitle
const CardTitle = forwardRef<
    HTMLParagraphElement,
    HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={twMerge(
            clsx('font-semibold leading-none tracking-tight text-xl text-primary-900', className)
        )}
        {...props}
    />
));
CardTitle.displayName = 'CardTitle';

// CardDescription
const CardDescription = forwardRef<
    HTMLParagraphElement,
    HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={twMerge(clsx('text-sm text-gray-500', className))}
        {...props}
    />
));
CardDescription.displayName = 'CardDescription';

// CardContent
const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={twMerge(clsx('p-6 pt-0', className))} {...props} />
    )
);
CardContent.displayName = 'CardContent';

// CardFooter
const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={twMerge(clsx('flex items-center p-6 pt-0', className))}
            {...props}
        />
    )
);
CardFooter.displayName = 'CardFooter';

export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
};
