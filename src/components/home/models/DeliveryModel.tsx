"use client";

import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

const BRAND_PALETTE = {
    box: "#d4a373", // Cardboard color
    arrow: "#0ea5e9", // Brand Blue
};

export function DeliveryModel(props: any) {
    const groupRef = useRef<Mesh>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.position.y = Math.abs(Math.sin(state.clock.elapsedTime * 2)) * 0.5;
        }
    });

    return (
        <group ref={groupRef} {...props} dispose={null}>
            {/* Package */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[1.5, 1.5, 1.5]} />
                <meshStandardMaterial color={BRAND_PALETTE.box} />
            </mesh>
            {/* Tape - Fixed rotation prop */}
            <mesh position={[0, 0.76, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[1.5, 1.5]} />
                <meshStandardMaterial color="#e5e5e5" />
            </mesh>

            {/* Dynamic Arrow */}
            <mesh position={[1.2, 0.5, 0.8]} rotation={[0, 0, -Math.PI / 4]}>
                <boxGeometry args={[0.4, 1.5, 0.2]} />
                <meshStandardMaterial color={BRAND_PALETTE.arrow} emissive={BRAND_PALETTE.arrow} emissiveIntensity={0.5} />
            </mesh>
            <mesh position={[1.2, -0.2, 0.8]} rotation={[0, 0, Math.PI / 4]}>
                <coneGeometry args={[0.4, 0.6, 4]} />
                <meshStandardMaterial color={BRAND_PALETTE.arrow} emissive={BRAND_PALETTE.arrow} emissiveIntensity={0.5} />
            </mesh>
        </group>
    );
}
