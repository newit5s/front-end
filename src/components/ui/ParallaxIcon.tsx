"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

interface ParallaxIconProps {
    src: string;
    alt: string;
    className?: string;
    intensity?: number;
}

export function ParallaxIcon({ src, alt, className = "", intensity = 20 }: ParallaxIconProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Calculate distance from center
        const xPos = (clientX - centerX) / (width / 2);
        const yPos = (clientY - centerY) / (height / 2);

        x.set(xPos * intensity);
        y.set(yPos * intensity);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, (value) => value * -1); // Invert tilt
    const rotateY = useTransform(mouseX, (value) => value);

    return (
        <motion.div
            className={`relative flex items-center justify-center w-full h-full perspective-1000 ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000
            }}
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative w-full h-full flex items-center justify-center"
            >
                {/* Shadow/Reflect layer behind */}
                <motion.div
                    style={{
                        translateZ: -10,
                        opacity: 0.2,
                        translateX: useTransform(mouseX, value => value * -0.5),
                        translateY: useTransform(mouseY, value => value * -0.5),
                    }}
                    className="absolute inset-0 bg-primary-500/20 blur-xl rounded-full"
                />

                {/* Main Icon */}
                <div className="relative w-full h-full drop-shadow-2xl">
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        className="object-contain" // Use contain to show full icon
                    />
                </div>

                {/* Glare effect */}
                <motion.div
                    style={{
                        rotateX,
                        rotateY,
                        translateZ: 20,
                        opacity: useTransform(mouseX, [-20, 20], [0, 0.4])
                    }}
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent mix-blend-overlay pointer-events-none rounded-full"
                />
            </motion.div>
        </motion.div>
    );
}
