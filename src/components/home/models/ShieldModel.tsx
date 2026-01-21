"use client";

import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

const BRAND_PALETTE = {
    primary: "#0ea5e9",
    white: "#ffffff",
    silver: "#e2e8f0"
};

export function ShieldModel(props: any) {
    const groupRef = useRef<Mesh>(null);

    useFrame((state) => {
        if (groupRef.current) {
            // Gentle rotation to show it off
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
        }
    });

    return (
        <group ref={groupRef} {...props} dispose={null}>
            {/* Shield Body (Approximated with Box/Cylinder blend or just a simple geometry) 
                Let's use a flattened cylinder or just a thick Plane for simplicity in low poly
            */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[1.2, 0.1, 2.5, 6]} /> {/* Hexagon-ish shield */}
                <meshStandardMaterial color={BRAND_PALETTE.primary} metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[0, 0, 0.1]}>
                <cylinderGeometry args={[0.8, 0.1, 1.8, 6]} />
                <meshStandardMaterial color={BRAND_PALETTE.white} />
            </mesh>

            {/* Checkmark */}
            <mesh position={[-0.2, -0.2, 0.2]} rotation={[0, 0, -Math.PI / 4]}>
                <boxGeometry args={[0.2, 0.8, 0.1]} />
                <meshStandardMaterial color={BRAND_PALETTE.primary} />
            </mesh>
            <mesh position={[0.2, 0.2, 0.2]} rotation={[0, 0, Math.PI / 4]}>
                <boxGeometry args={[0.2, 1.2, 0.1]} />
                <meshStandardMaterial color={BRAND_PALETTE.primary} />
            </mesh>
        </group>
    );
}
