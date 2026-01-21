

import { Plane, Ship, Truck, Package, ShieldCheck, ArrowRight, Anchor, Globe, Clock, BarChart } from "lucide-react";

export interface Service {
    id: string;
    slug: string;
    title: string;
    icon: any; // Lucide icon component
    shortDescription: string;
    fullDescription: string;
    features: string[];
    benefits: string[];
    image: string;
}

export const SERVICES: Service[] = [
    {
        id: "sea-freight",
        slug: "sea-freight",
        title: "Sea Freight",
        icon: Ship,
        shortDescription: "Cost-effective container shipping solutions for large volume international trade.",
        fullDescription: "As a cost-effective solution for large shipping volumes, our Sea Freight services connect you to major ports worldwide. We offer Full Container Load (FCL) and Less than Container Load (LCL) options, giving you flexibility regardless of your cargo size. Our strong relationships with shipping lines ensure space allocation and competitive pricing even during peak seasons.",
        features: [
            "FCL (Full Container Load)",
            "LCL (Less than Container Load)",
            "Reefer / Temperature Controlled Containers",
            "Breakbulk & RORO Services",
            "Port-to-Port & Door-to-Door"
        ],
        benefits: [
            "Most economical for large volumes",
            "Suitable for non-urgent shipments",
            "Capable of handling oversized/heavy cargo",
            "Environmentally friendly option"
        ],
        image: "/assets/cinematic/ship.png"
    },
    {
        id: "air-freight",
        slug: "air-freight",
        title: "Air Freight",
        icon: Plane,
        shortDescription: "Fast and reliable air cargo services for your time-sensitive shipments globally.",
        fullDescription: "When time is of the essence, our Air Freight services provide the speed and reliability you need. We partner with major commercial airlines and cargo carriers to offer flexible routing and competitive rates. Whether it's a small urgent parcel or oversized cargo, we handle it with precision and care, ensuring your goods reach their destination safely and on schedule.",
        features: [
            "Express/Priority Air Freight",
            "Consolidation Services",
            "Door-to-Door Delivery",
            "Charter Services for Project Cargo",
            "Hazardous Materials Handling"
        ],
        benefits: [
            "Fastest transit times for urgent shipments",
            "High security and lower risk of damage",
            "Real-time global tracking visibility",
            "Reliable departure and arrival schedules"
        ],
        image: "/assets/cinematic/plane.png"
    },
    {
        id: "road-transport",
        slug: "road-transport",
        title: "Inland Trucking",
        icon: Truck,
        shortDescription: "Seamless domestic delivery tailored to your schedule.",
        fullDescription: "Seamless domestic delivery tailored to your schedule. We provide Express, Standard, and Scheduled delivery options with flexible pickup and temperature-controlled capabilities.",
        features: [
            "Door-to-Door & Port-to-Port",
            "Flexible Pickup Options",
            "Temperature-Controlled Delivery",
            "Express & Scheduled Options",
            "Real-Time Tracking"
        ],
        benefits: [
            "Door-to-door service flexibility",
            "Cost-effective for short to medium distances",
            "Flexible departure schedules",
            "Real-time tracking of vehicles"
        ],
        image: "/assets/cinematic/truck.png"
    },
    {
        id: "project-cargo",
        slug: "project-cargo",
        title: "Project Cargo",
        icon: Package,
        shortDescription: "Specialized handling for complex, oversized, and heavy-lift shipments.",
        fullDescription: "Our Project Cargo team provides specialized handling for complex, oversized, and heavy-lift shipments. We manage every aspect of complex logistics projects, from route feasibility studies and permit acquisition to specialized loading equipment and real-time risk management, ensuring timely and safe delivery.",
        features: [
            "Oversized Cargo Handling & Permits",
            "Heavy-Lift Transportation",
            "Customized Route Planning",
            "Real-Time Risk Management",
            "Dedicated Project Coordinator"
        ],
        benefits: [
            "End-to-end project management",
            "Access to specialized equipment",
            "Expert handling of permits and regulations",
            "Minimized supply chain disruption"
        ],
        image: "/assets/cinematic/warehouse.png"
    },
    {
        id: "customs-brokerage",
        slug: "customs-brokerage",
        title: "Customs Brokerage",
        icon: ShieldCheck,
        shortDescription: "Licensed broker (Ref 969/QĐ-TCHQ) navigating complex regulations.",
        fullDescription: "As a licensed Customs Broker (Ref No. 969/QĐ-TCHQ), our team ensures your shipments comply with all local and international laws, preventing delays and penalties. We handle all documentation, duty calculations, and filing processes, facilitating smooth clearance for your imports and exports.",
        features: [
            "Import & Export Declaration",
            "Duty & Tax Calculation",
            "HS Code Classification",
            "License & Permit Application",
            "Free Trade Agreement (FTA) Consultation"
        ],
        benefits: [
            "Prevention of costly delays/fines",
            "Compliance with latest regulations",
            "Accurate duty/tax assessment",
            "Speedy cargo release"
        ],
        image: "/assets/cinematic/customs.png"
    },
    {
        id: "value-added",
        slug: "value-added",
        title: "Value-Added Services",
        icon: Package,
        shortDescription: "Cargo insurance and specialized personal cargo handling.",
        fullDescription: "Going beyond transport. We offer Cargo Insurance and specialized handling for Personal Cargo to ensure total peace of mind.",
        features: [
            "Cargo Insurance Services",
            "Personal Cargo Handling",
            "Safe & Secure Handling",
            "Specialized Packaging",
            "Documentation Support"
        ],
        benefits: [
            "Peace of mind with insurance coverage",
            "Personalized service",
            "Comprehensive cargo protection",
            "Expert handling of sensitive items"
        ],
        image: "/assets/cinematic/delivery.png"
    },
    {
        id: "consulting",
        slug: "solution-consulting",
        title: "Solution Consulting",
        icon: BarChart,
        shortDescription: "Tailored supply chain strategies to optimize efficiency and reduce costs.",
        fullDescription: "Every business has unique logistics challenges. Our Solution Consulting services analyze your current supply chain to identify inefficiencies and opportunities for improvement. We design tailored strategies that result in cost savings, improved speed-to-market, and enhanced scalability for your business growth.",
        features: [
            "Supply Chain Analysis",
            "Network Optimization",
            "Cost Reduction Strategies",
            "Risk Management",
            "Sustainability Solutions"
        ],
        benefits: [
            "Optimized total cost of logistics",
            "Improved operational efficiency",
            "Scalable processes for growth",
            "Enhanced customer satisfaction through reliability"
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
    }
];
