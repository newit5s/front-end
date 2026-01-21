"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

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
    onInteractionChange?: (isInteracting: boolean) => void;
}

export function GlobeVisualization({ altitude = 2.5, isZoomComplete = false, isPaused = false, onInteractionChange }: Props) {
    const t = useTranslations("hero");
    const globeRef = useRef<any>(null);
    const [globeReady, setGlobeReady] = useState(false);
    const [shouldMount, setShouldMount] = useState(false);
    const [webGLSupported, setWebGLSupported] = useState(true);
    const [selectedPort, setSelectedPort] = useState<Port | null>(null);
    const [hoveredPort, setHoveredPort] = useState<string | null>(null);
    const [countries, setCountries] = useState<any>({ features: [] });
    // Mobile Interaction Logic
    const [isInteractionEnabled, setIsInteractionEnabled] = useState(false);
    const [mobileAltitude, setMobileAltitude] = useState<number | null>(null);

    // Calculate effective altitude: Use prop altitude normally, but override if mobile interaction is active
    const effectiveAltitude = useMemo(() => {
        if (isInteractionEnabled && mobileAltitude !== null) return mobileAltitude;
        return altitude;
    }, [altitude, isInteractionEnabled, mobileAltitude]);

    // Handle Mobile Interaction Toggle
    const handleMobileInteract = () => {
        setIsInteractionEnabled(true);
        onInteractionChange?.(true);
        // Auto-zoom IN to detail view
        setMobileAltitude(1.8);

        // Disable body scroll when interacting to prevent weirdness
        document.body.style.overflow = 'hidden';
    };

    const handleCloseMobileInteract = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsInteractionEnabled(false);
        onInteractionChange?.(false);
        setMobileAltitude(null); // Return to scroll-controlled altitude
        setSelectedPort(null);

        // Re-enable body scroll
        document.body.style.overflow = '';

        // Custom Scroll Logic: Scroll to Services
        setTimeout(() => {
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    // Cleanup scroll lock on unmount
    useEffect(() => {
        return () => { document.body.style.overflow = ''; };
    }, []);

    useEffect(() => {
        // Enable interaction by default on desktop, disable on mobile
        const checkMobile = () => {
            if (window.innerWidth >= 768) {
                setIsInteractionEnabled(true);
            } else {
                setIsInteractionEnabled(false);
            }
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Check WebGL support on client side
    useEffect(() => {
        try {
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            if (!gl) {
                setWebGLSupported(false);
            }
        } catch (e) {
            setWebGLSupported(false);
        }
    }, []);

    // Load countries GeoJSON
    useEffect(() => {
        if (!webGLSupported) return;
        fetch('https://unpkg.com/world-atlas@2.0.2/countries-110m.json')
            .then(res => res.json())
            .then(data => {
                import('topojson-client').then(topojson => {
                    const geoData = topojson.feature(data, data.objects.countries);
                    setCountries(geoData);
                });
            })
            .catch(() => setCountries({ features: [] }));
    }, [webGLSupported]);

    // Defer Globe mount
    useEffect(() => {
        if (!webGLSupported) return;
        const timer = setTimeout(() => setShouldMount(true), 150);
        return () => clearTimeout(timer);
    }, [webGLSupported]);

    // Camera Control - Optimized for mobile
    useEffect(() => {
        if (globeRef.current && globeReady) {
            const controls = globeRef.current.controls();
            if (controls) {
                // Disable manual zoom on ALL devices to enforce Cinematic Scroll flow
                controls.enableZoom = false;

                const isMobile = window.innerWidth < 768;
                // Auto-rotate ONLY if not interacting on mobile
                controls.autoRotate = !isMobile || (!isInteractionEnabled && !isMobile);
                controls.autoRotateSpeed = 0.25;
                controls.enableDamping = true;
                controls.dampingFactor = 0.1;
            }
            // Use effectiveAltitude for zoom level
            globeRef.current.pointOfView({ lat: 15, lng: 110, altitude: effectiveAltitude }, 1000);
        }
    }, [globeReady, effectiveAltitude, isInteractionEnabled]);

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
        <div className={`w-full h-full relative group ${hoveredPort ? 'cursor-pointer' : 'cursor-default'}`}>
            {/* Loading Placeholder */}
            {(!shouldMount || !globeReady) && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-2 border-primary-500/40 bg-gradient-to-br from-secondary-900/30 via-secondary-600/20 to-transparent animate-pulse shadow-[0_0_60px_rgba(30,74,122,0.3)]" />
                </div>
            )}

            {/* Mobile "Tap to Interact" Overlay */}
            {!isInteractionEnabled && shouldMount && (
                <div
                    onClick={handleMobileInteract}
                    className="absolute inset-0 z-20 flex items-center justify-center bg-black/10 md:hidden cursor-pointer touch-pan-y"
                    style={{ touchAction: 'pan-y' }}
                >
                    <div className="bg-secondary-900/80 backdrop-blur-md text-white px-6 py-3 rounded-full border border-white/20 shadow-xl flex items-center gap-3 animate-pulse">
                        <span className="text-xl">👆</span>
                        <span className="font-medium text-sm">{t('tapToInteract')}</span>
                    </div>
                </div>
            )}

            {/* Mobile Interaction Mode UI */}
            {isInteractionEnabled && shouldMount && (
                <>
                    {/* 1. Instruction Tooltip (Bottom Center) - Raised position */}
                    <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-40 md:hidden pointer-events-none w-full px-4 text-center">
                        <div className="inline-block bg-black/60 backdrop-blur-md text-white/90 text-xs px-4 py-2 rounded-full border border-white/10 shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300">
                            {t('tapHubInstruction')}
                        </div>
                    </div>

                    {/* 2. "Continue Reading" Button (Bottom) - Raised position */}
                    <button
                        onClick={handleCloseMobileInteract}
                        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-50 bg-white text-secondary-900 hover:bg-white/90 font-medium text-sm px-6 py-3 rounded-full md:hidden flex items-center gap-2 shadow-xl shadow-black/20 transition-all active:scale-95 animate-in fade-in slide-in-from-bottom-4"
                    >
                        <span>{t('continueScrolling')}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce">
                            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                        </svg>
                    </button>

                    {/* 3. Close Icon (Top Right) - Optional fallback if user just wants to close without scrolling? 
                        Keeping it removed for now to force the "Continue" flow as discussed. 
                    */}
                </>
            )}

            {/* Digital Globe with Design System Colors */}
            {shouldMount && (
                <div className={`w-full h-full transition-opacity duration-500 ${!isInteractionEnabled ? 'pointer-events-none' : 'pointer-events-auto'}`}>
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

                        // Labels when zoomed - force show on mobile interaction
                        labelsData={isZoomComplete || (isInteractionEnabled && window.innerWidth < 768) ? pointsData : []}
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
                </div>
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
