"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";

// Dynamic import
const Globe = dynamic(() => import("react-globe.gl"), {
    ssr: false,
    loading: () => null
});

interface Port {
    id: string;
    name: string;
    lat: number;
    lng: number;
    country: string;
    isHQ?: boolean;
    oceanDays?: number;
    airDays?: number;
}

const PORTS: Port[] = [
    { id: "hcmc", name: "Ho Chi Minh City", lat: 10.8231, lng: 106.6297, country: "Vietnam", isHQ: true },
    { id: "singapore", name: "Singapore", lat: 1.3521, lng: 103.8198, country: "Singapore", oceanDays: 3, airDays: 1 },
    { id: "shanghai", name: "Shanghai", lat: 31.2304, lng: 121.4737, country: "China", oceanDays: 7, airDays: 2 },
    { id: "rotterdam", name: "Rotterdam", lat: 51.9244, lng: 4.4777, country: "Netherlands", oceanDays: 25, airDays: 4 },
    { id: "losangeles", name: "Los Angeles", lat: 33.7489, lng: -118.2551, country: "USA", oceanDays: 18, airDays: 3 },
    { id: "dubai", name: "Jebel Ali (Dubai)", lat: 25.0657, lng: 55.2708, country: "UAE", oceanDays: 12, airDays: 2 },
    { id: "busan", name: "Busan", lat: 35.1796, lng: 129.0756, country: "South Korea", oceanDays: 5, airDays: 2 },
    { id: "hamburg", name: "Hamburg", lat: 53.5511, lng: 9.9937, country: "Germany", oceanDays: 26, airDays: 4 },
    { id: "sydney", name: "Sydney", lat: -33.8688, lng: 151.2093, country: "Australia", oceanDays: 14, airDays: 3 },
];
const HQ_PORT = PORTS.find(p => p.isHQ)!;

// DESIGN SYSTEM COLORS
const COLORS = {
    primary: "#A0624F",      // Terracotta
    secondary: "#1E4A7A",    // Navy blue
    accent: "#F4A261",       // Orange/amber
    dark: "#0E1E32",         // Dark navy (for background)
    light: "#FAF5F3",        // Light cream
};

interface Props {
    altitude?: number;
    isZoomComplete?: boolean;
    isPaused?: boolean; // Pause animations to free GPU
}

export function GlobeVisualization({ altitude = 2.5, isZoomComplete = false, isPaused = false }: Props) {
    const globeRef = useRef<any>(null);
    const [globeReady, setGlobeReady] = useState(false);
    const [shouldMount, setShouldMount] = useState(false);
    const [selectedPort, setSelectedPort] = useState<Port | null>(null);
    const [hoveredPort, setHoveredPort] = useState<string | null>(null);
    const [countries, setCountries] = useState<any>({ features: [] });

    // Load countries GeoJSON
    useEffect(() => {
        fetch('https://unpkg.com/world-atlas@2.0.2/countries-110m.json')
            .then(res => res.json())
            .then(data => {
                import('topojson-client').then(topojson => {
                    const geoData = topojson.feature(data, data.objects.countries);
                    setCountries(geoData);
                });
            })
            .catch(() => setCountries({ features: [] }));
    }, []);

    // Defer Globe mount
    useEffect(() => {
        const timer = setTimeout(() => setShouldMount(true), 150);
        return () => clearTimeout(timer);
    }, []);

    // Camera Control - Optimized for mobile
    useEffect(() => {
        if (globeRef.current && globeReady) {
            const controls = globeRef.current.controls();
            if (controls) {
                controls.enableZoom = false;
                // Disable auto-rotate on mobile for better performance
                const isMobile = window.innerWidth < 768;
                controls.autoRotate = !isMobile;
                controls.autoRotateSpeed = 0.25;
                controls.enableDamping = true;
                controls.dampingFactor = 0.1;
            }
            globeRef.current.pointOfView({ lat: 15, lng: 110, altitude }, 300);
        }
    }, [globeReady, altitude]);

    // Pause auto-rotate when isPaused or on mobile
    useEffect(() => {
        const controls = globeRef.current?.controls();
        if (controls) {
            const isMobile = window.innerWidth < 768;
            controls.autoRotate = !selectedPort && !hoveredPort && !isMobile && !isPaused;
        }
    }, [selectedPort, hoveredPort, isPaused]);

    const handleClick = useCallback((point: any) => {
        const port = PORTS.find(p => p.id === point.id);
        if (port && !port.isHQ) {
            setSelectedPort(prev => prev?.id === port.id ? null : port);
        }
    }, []);

    const arcsData = useMemo(() => {
        if (!selectedPort) return [];
        return [{
            startLat: HQ_PORT.lat,
            startLng: HQ_PORT.lng,
            endLat: selectedPort.lat,
            endLng: selectedPort.lng,
            color: COLORS.accent // Solid accent color
        }];
    }, [selectedPort]);

    const pointsData = useMemo(() => PORTS.map(port => ({
        id: port.id,
        lat: port.lat,
        lng: port.lng,
        name: port.name,
        country: port.country,
        isHQ: port.isHQ,
        size: port.isHQ ? 0.7 : 0.45,
        color: port.isHQ ? COLORS.accent : (selectedPort?.id === port.id ? COLORS.accent : COLORS.secondary),
    })), [selectedPort]);

    return (
        <div className={`w-full h-full ${hoveredPort ? 'cursor-pointer' : 'cursor-default'}`}>
            {/* Loading Placeholder */}
            {(!shouldMount || !globeReady) && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-2 border-primary-500/40 bg-gradient-to-br from-secondary-900/30 via-secondary-600/20 to-transparent animate-pulse shadow-[0_0_60px_rgba(30,74,122,0.3)]" />
                </div>
            )}

            {/* Digital Globe with Design System Colors */}
            {shouldMount && (
                <Globe
                    ref={globeRef}
                    onGlobeReady={() => setGlobeReady(true)}

                    // 2K texture - balanced quality and file size (~300KB)
                    globeImageUrl="//unpkg.com/three-globe@2.31.0/example/img/earth-night.jpg"
                    backgroundColor="rgba(0,0,0,0)"

                    // Secondary (navy blue) atmosphere glow
                    showAtmosphere={true}
                    atmosphereColor={COLORS.secondary}
                    atmosphereAltitude={0.22}

                    // Country polygons with brand colors
                    polygonsData={countries.features}
                    polygonCapColor={() => "rgba(30, 74, 122, 0.08)"}      // secondary with transparency
                    polygonSideColor={() => "rgba(160, 98, 79, 0.12)"}     // primary with transparency
                    polygonStrokeColor={() => COLORS.secondary}            // secondary for borders
                    polygonAltitude={0.006}

                    // Points for ports
                    pointsData={pointsData}
                    pointLat="lat"
                    pointLng="lng"
                    pointColor="color"
                    pointAltitude={0.025}
                    pointRadius="size"
                    onPointClick={handleClick}
                    onPointHover={(point: any) => setHoveredPort(point ? point.id : null)}

                    pointLabel={(d: any) => `
                        <div style="background: ${COLORS.secondary}; padding:8px 14px; border-radius:12px; border:1px solid rgba(255,255,255,0.3); backdrop-filter:blur(12px); font-family: system-ui, sans-serif; pointer-events: none; box-shadow: 0 0 20px rgba(30,74,122,0.4), 0 4px 15px rgba(0,0,0,0.2);">
                            <div style="font-weight:700; color:white; font-size:13px;">${d.isHQ ? "📍 " : ""}${d.name}</div>
                        </div>
                    `}

                    // Arcs with accent gradient
                    arcsData={arcsData}
                    arcColor="color"
                    arcDashLength={0.5}
                    arcDashGap={0.15}
                    arcDashAnimateTime={1200}
                    arcStroke={1.5}

                    // Labels when zoomed
                    labelsData={isZoomComplete ? pointsData : []}
                    labelLat="lat"
                    labelLng="lng"
                    labelText="name"
                    labelSize={1.3}
                    labelDotRadius={0.35}
                    labelColor={() => "rgba(255,255,255,0.95)"}
                    labelResolution={2}
                    labelAltitude={0.03}
                    onLabelClick={handleClick}
                />
            )}

            {/* Selected Port Info Card - Using brand colors */}
            {selectedPort && (
                <div className="absolute top-[50%] md:top-[48%] left-1/2 -translate-x-1/2 z-50 animate-in fade-in zoom-in slide-in-from-top-5 duration-300 pointer-events-none">
                    <div className="bg-secondary-900/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-[0_0_30px_rgba(30,74,122,0.3)] py-3 px-5 flex items-center gap-4 pointer-events-auto min-w-max">

                        {/* Route Title */}
                        <div className="border-r border-white/20 pr-4">
                            <span className="text-white text-sm font-bold whitespace-nowrap">
                                HCMC <span className="text-accent-500 mx-1">→</span> {selectedPort.name}
                            </span>
                        </div>

                        {/* Transit Times */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1.5" title="Sea Freight">
                                <span className="text-lg">🚢</span>
                                <span className="text-blue-200 font-bold text-sm">{selectedPort.oceanDays}d</span>
                            </div>
                            <div className="flex items-center gap-1.5" title="Air Freight">
                                <span className="text-lg">✈️</span>
                                <span className="text-white font-bold text-sm">{selectedPort.airDays}d</span>
                            </div>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedPort(null)}
                            className="ml-2 w-6 h-6 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary-500/40 text-white/70 hover:text-white transition-all"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
