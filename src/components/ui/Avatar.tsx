'use client';

import * as React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Context ---
type AvatarLoadingStatus = 'idle' | 'loading' | 'loaded' | 'error';

interface AvatarContextValue {
    status: AvatarLoadingStatus;
    setStatus: (status: AvatarLoadingStatus) => void;
}

const AvatarContext = React.createContext<AvatarContextValue | undefined>(undefined);

const useAvatar = () => {
    const context = React.useContext(AvatarContext);
    if (!context) {
        throw new Error('Avatar components must be used within an Avatar');
    }
    return context;
};

// --- Components ---

const Avatar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        const [status, setStatus] = React.useState<AvatarLoadingStatus>('idle');

        return (
            <AvatarContext.Provider value={{ status, setStatus }}>
                <div
                    ref={ref}
                    className={twMerge(
                        clsx(
                            'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
                            className
                        )
                    )}
                    {...props}
                />
            </AvatarContext.Provider>
        );
    }
);
Avatar.displayName = 'Avatar';


const AvatarImage = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
    ({ className, src, alt = '', ...props }, ref) => {
        const { setStatus } = useAvatar();

        React.useEffect(() => {
            if (!src) {
                setStatus('error');
                return;
            }

            setStatus('loading');
            const img = new Image();
            img.src = src as string;
            img.onload = () => setStatus('loaded');
            img.onerror = () => setStatus('error');

            // Cleanup not strictly necessary for simple Image object but good practice if cancelling
            return () => {
                img.onload = null;
                img.onerror = null;
            }
        }, [src, setStatus]);

        // We can either render the JS Image object or just a normal img tag that is controlled.
        // Ideally we assume the status covers us.
        // We only render the img if we consider it 'safe' or if we want the browser to handle it.
        // Radix strategy: Always render img, hide if not loaded? Or rely on the callback?
        // Let's use the explicit state: if 'loaded', show img.

        // Actually, handling `onLoad` on the element itself is often more reliable for SSR hydration.
        // But for this simple implementation, the `useEffect` pre-loader is a standard robust pattern for "showing fallback until ready".

        const { status } = useAvatar();

        if (status !== 'loaded') return null;

        return (
            <img
                ref={ref}
                src={src}
                alt={alt}
                className={twMerge(clsx('aspect-square h-full w-full object-cover', className))}
                {...props}
            />
        );
    }
);
AvatarImage.displayName = 'AvatarImage';


const AvatarFallback = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        const { status } = useAvatar();

        if (status === 'loaded') {
            return null;
        }

        return (
            <div
                ref={ref}
                className={twMerge(
                    clsx(
                        'flex h-full w-full items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800',
                        className
                    )
                )}
                {...props}
            />
        );
    }
);
AvatarFallback.displayName = 'AvatarFallback';

export { Avatar, AvatarImage, AvatarFallback };
