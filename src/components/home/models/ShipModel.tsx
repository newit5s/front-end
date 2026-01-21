"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

const BRAND_PALETTE = {
    primary: "#0ea5e9", // Sky 500
    secondary: "#94a3b8", // Slate 400
    hull: "#334155", // Slate 700
    white: "#f8fafc",
};

export function ShipModel(props: any) {
    const groupRef = useRef<Mesh>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8) * 0.02;
            groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1 - 1;
        }
    });

    return (
        <group ref={groupRef} {...props} dispose={null}>
            {/* Hull - Dark Slate */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[6, 1.5, 2]} />
                <meshStandardMaterial color={BRAND_PALETTE.hull} roughness={0.2} />
            </mesh>
            <mesh position={[3, 0.5, 0]} rotation={[0, 0, -Math.PI / 8]}>
                <boxGeometry args={[1.5, 1.5, 2]} />
                <meshStandardMaterial color={BRAND_PALETTE.hull} roughness={0.2} />
            </mesh>
            <mesh position={[-3.5, 0.5, 0]} rotation={[0, 0, Math.PI / 8]}>
                <boxGeometry args={[1.5, 1.5, 2]} />
                <meshStandardMaterial color={BRAND_PALETTE.hull} roughness={0.2} />
            </mesh>

            {/* Bridge - White */}
            <mesh position={[-2, 1.5, 0]}>
                <boxGeometry args={[1, 2, 1.8]} />
                <meshStandardMaterial color={BRAND_PALETTE.white} />
            </mesh>

            {/* Containers - Brand Colors only */}
            <mesh position={[0, 1, 0]}>
                <boxGeometry args={[3, 1, 1.6]} />
                <meshStandardMaterial color={BRAND_PALETTE.primary} metalness={0.1} />
            </mesh>
            <mesh position={[1, 2, 0]}>
                <boxGeometry args={[1, 1, 1.6]} />
                <meshStandardMaterial color={BRAND_PALETTE.secondary} metalness={0.1} />
            </mesh>
        </group>
    );
}
