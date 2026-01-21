"use client";

import { useRef } from "react";
import { Mesh } from "three";

const BRAND_PALETTE = {
    primary: "#0ea5e9", // Sky 500
    trailer: "#f8fafc", // White/Slate 50
    cabin: "#3b82f6", // Blue 500 (Consistent with heavy machinery usually being distinct, but let's stick to brand blue)
    wheels: "#1e293b",
};

export function TruckModel(props: any) {
    const groupRef = useRef<Mesh>(null);

    return (
        <group ref={groupRef} {...props} dispose={null}>
            {/* Trailer - Clean White with Brand Stripe possibly, but keeping it simple White */}
            <mesh position={[0, 0.5, 0]}>
                <boxGeometry args={[4, 1.5, 1.2]} />
                <meshStandardMaterial color={BRAND_PALETTE.trailer} roughness={0.2} />
            </mesh>

            {/* Brand Logo/Stripe area on trailer */}
            <mesh position={[0, 0.5, 0.61]}>
                <planeGeometry args={[2, 0.4]} />
                <meshStandardMaterial color={BRAND_PALETTE.primary} />
            </mesh>

            {/* Cabin - Primary Blue */}
            <mesh position={[2.5, 0.2, 0]}>
                <boxGeometry args={[1, 1.2, 1.1]} />
                <meshStandardMaterial color={BRAND_PALETTE.primary} roughness={0.3} />
            </mesh>

            {/* Wheels */}
            <mesh position={[-1.5, -0.4, 0.6]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.4, 0.4, 0.2]} />
                <meshStandardMaterial color={BRAND_PALETTE.wheels} />
            </mesh>
            <mesh position={[-1.5, -0.4, -0.6]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.4, 0.4, 0.2]} />
                <meshStandardMaterial color={BRAND_PALETTE.wheels} />
            </mesh>
            <mesh position={[0.5, -0.4, 0.6]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.4, 0.4, 0.2]} />
                <meshStandardMaterial color={BRAND_PALETTE.wheels} />
            </mesh>
            <mesh position={[0.5, -0.4, -0.6]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.4, 0.4, 0.2]} />
                <meshStandardMaterial color={BRAND_PALETTE.wheels} />
            </mesh>
            <mesh position={[2.5, -0.4, 0.6]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.4, 0.4, 0.2]} />
                <meshStandardMaterial color={BRAND_PALETTE.wheels} />
            </mesh>
            <mesh position={[2.5, -0.4, -0.6]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.4, 0.4, 0.2]} />
                <meshStandardMaterial color={BRAND_PALETTE.wheels} />
            </mesh>
        </group>
    );
}
