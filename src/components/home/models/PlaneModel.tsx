"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export function PlaneModel(props: any) {
    const groupRef = useRef<Mesh>(null);
    const ringRef = useRef<Mesh>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1) * 0.1;

            // Scanner ring animation
            if (ringRef.current) {
                ringRef.current.rotation.x = Math.PI / 2;
                ringRef.current.rotation.z += 0.02;
                ringRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.05);
            }
        }
    });

    const techMaterial = {
        color: "#0ea5e9", // Sky 500
        emissive: "#0ea5e9",
        emissiveIntensity: 0.8,
        wireframe: true,
        transparent: true,
        opacity: 0.5
    };

    const solidCore = {
        color: "#ffffff",
        roughness: 0.1,
        metalness: 0.9,
    };

    return (
        <group ref={groupRef} {...props} dispose={null}>
            {/* Tech Ring / Scanner */}
            <mesh ref={ringRef} position={[0, -0.5, 0]}>
                <torusGeometry args={[2.5, 0.02, 16, 100]} />
                <meshBasicMaterial color="#38bdf8" transparent opacity={0.6} />
            </mesh>

            {/* Abstract Plane - Constructed of "Data Blocks" for Tech feel */}
            {/* Main Body */}
            <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <capsuleGeometry args={[0.4, 3.5, 4, 16]} />
                <meshStandardMaterial {...solidCore} />
            </mesh>
            {/* Wireframe Overlay */}
            <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                <capsuleGeometry args={[0.42, 3.52, 4, 16]} />
                <meshBasicMaterial {...techMaterial} />
            </mesh>

            {/* Wings - Geometric Shards */}
            <mesh position={[0.2, 0.1, 0]}>
                <boxGeometry args={[1.2, 0.05, 4.5]} />
                <meshStandardMaterial {...solidCore} />
            </mesh>
            <mesh position={[0.2, 0.1, 0]}>
                <boxGeometry args={[1.25, 0.06, 4.55]} />
                <meshBasicMaterial {...techMaterial} wireframe />
            </mesh>

            {/* Tail */}
            <mesh position={[-1.4, 0.5, 0]} rotation={[Math.PI / 6, 0, 0]}>
                <boxGeometry args={[0.8, 1.2, 0.05]} />
                <meshBasicMaterial {...techMaterial} wireframe={false} opacity={0.8} />
            </mesh>

            {/* Engine glows */}
            <mesh position={[0, -0.3, 1.5]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.2, 0.1, 0.5, 8]} />
                <meshBasicMaterial color="#00ffff" />
            </mesh>
            <mesh position={[0, -0.3, -1.5]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.2, 0.1, 0.5, 8]} />
                <meshBasicMaterial color="#00ffff" />
            </mesh>
        </group>
    );
}
