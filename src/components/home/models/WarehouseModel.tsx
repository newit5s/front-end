"use client";

import { useRef } from "react";
import { Mesh } from "three";

const BRAND_PALETTE = {
    wall: "#f1f5f9", // Slate 100
    roof: "#334155", // Slate 700
    door: "#0ea5e9", // Sky 500
    box: "#cbd5e1"
};

export function WarehouseModel(props: any) {
    const groupRef = useRef<Mesh>(null);

    return (
        <group ref={groupRef} {...props} dispose={null}>
            {/* Main Building Body - Light */}
            <mesh position={[0, 1, 0]}>
                <boxGeometry args={[4, 2, 3]} />
                <meshStandardMaterial color={BRAND_PALETTE.wall} />
            </mesh>

            {/* Roof - Dark */}
            <mesh position={[0, 2.1, 0]}>
                <boxGeometry args={[4.2, 0.2, 3.2]} />
                <meshStandardMaterial color={BRAND_PALETTE.roof} />
            </mesh>

            {/* Big Doors - Brand Blue */}
            <mesh position={[-1, 0.8, 1.51]}>
                <planeGeometry args={[1, 1.6]} />
                <meshStandardMaterial color={BRAND_PALETTE.door} />
            </mesh>
            <mesh position={[1, 0.8, 1.51]}>
                <planeGeometry args={[1, 1.6]} />
                <meshStandardMaterial color={BRAND_PALETTE.door} />
            </mesh>

            {/* Boxes */}
            <mesh position={[1.5, 0.25, 2]}>
                <boxGeometry args={[0.5, 0.5, 0.5]} />
                <meshStandardMaterial color={BRAND_PALETTE.box} />
            </mesh>
        </group>
    );
}
