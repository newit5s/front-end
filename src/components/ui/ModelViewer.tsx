"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, Center } from "@react-three/drei";
import { Suspense } from "react";

interface ModelViewerProps {
    children: React.ReactNode;
    height?: string;
    intensity?: number;
}

export function ModelViewer({ children, height = "200px", intensity = 1 }: ModelViewerProps) {
    return (
        <div className="w-full relative" style={{ height }}>
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 2, 6]} fov={50} />
                {/* Lighting */}
                <ambientLight intensity={0.5 * intensity} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1 * intensity} />
                <pointLight position={[-10, -10, -10]} intensity={1 * intensity} />
                <Environment preset="city" />

                <Suspense fallback={null}>
                    <Center>
                        {children}
                    </Center>
                </Suspense>

                {/* Interactions */}
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={4}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 2.2}
                />
            </Canvas>
        </div>
    );
}
