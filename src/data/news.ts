import { LucideIcon, Building2, BarChart3, Lightbulb, Globe } from "lucide-react";

export interface NewsArticle {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    readTime: string;
    image: string;
    category: NewsCategory;
    author: {
        name: string;
        role: string;
        avatar?: string;
    };
    featured?: boolean;
}

export type NewsCategory = "company" | "industry" | "market" | "insights";

export const CATEGORIES: Record<NewsCategory, { label: string; icon: LucideIcon; color: string }> = {
    company: { label: "Company News", icon: Building2, color: "bg-primary-100 text-primary-700" },
    industry: { label: "Industry Insights", icon: Lightbulb, color: "bg-blue-100 text-blue-700" },
    market: { label: "Market Report", icon: BarChart3, color: "bg-green-100 text-green-700" },
    insights: { label: "Global Trade", icon: Globe, color: "bg-purple-100 text-purple-700" },
};

export const NEWS_ARTICLES: NewsArticle[] = [
    {
        id: "1",
        slug: "seaair-expands-north-america",
        title: "Seaair Global Expands Operations to North America",
        excerpt: "We are proud to announce the opening of our new regional headquarters in Los Angeles, strengthening our trans-pacific route capabilities.",
        content: `
## A New Chapter in Global Logistics

Seaair Global is thrilled to announce the grand opening of our new regional headquarters in Los Angeles, California. This strategic expansion marks a significant milestone in our commitment to providing seamless logistics solutions across the Pacific.

### Strategic Location

Our new Los Angeles facility is strategically positioned near the Port of Long Beach, one of the busiest container ports in North America. This location enables us to:

- **Reduce transit times** for Asia-to-US shipments
- **Improve customs clearance** efficiency
- **Provide local support** for North American clients
- **Expand our warehousing** capabilities

### Enhanced Services

With this expansion, we're introducing several new services for our North American customers:

1. **Express Air Freight** - Same-day and next-day delivery options
2. **Bonded Warehousing** - Secure storage with flexible release options
3. **Cross-docking Services** - Streamlined distribution solutions
4. **E-commerce Fulfillment** - End-to-end online retail logistics

### Looking Ahead

This expansion is just the beginning. We plan to open additional facilities in Chicago and Miami by 2027, creating a comprehensive network that spans the entire United States.

> "Our North American expansion represents our unwavering commitment to being closer to our customers and providing them with the best possible service." - Mr. Tran Van Hieu, CEO of Seaair Global
        `,
        date: "Oct 15, 2026",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1464037866556-27c7680176cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1174&q=80",
        category: "company",
        author: { name: "Marketing Team", role: "Seaair Global" },
        featured: true
    },
    {
        id: "2",
        slug: "green-logistics-future",
        title: "Navigating the Future of Green Logistics",
        excerpt: "How sustainable shipping practices are reshaping the industry and what Seaair Global is doing to reduce carbon footprint.",
        content: `
## The Green Revolution in Shipping

The logistics industry is undergoing a profound transformation as sustainability becomes a top priority for businesses worldwide. At Seaair Global, we're at the forefront of this green revolution.

### Current State of Emissions

The shipping industry accounts for approximately 3% of global greenhouse gas emissions. As regulations tighten and customers demand more sustainable options, logistics providers must adapt.

### Our Sustainability Initiatives

**1. Fleet Modernization**
We're investing in newer, more fuel-efficient vessels and trucks that meet the latest environmental standards.

**2. Route Optimization**
Using AI-powered logistics planning to minimize fuel consumption and reduce empty miles.

**3. Carbon Offset Programs**
Partnering with certified organizations to offset emissions from our operations.

**4. Green Packaging**
Encouraging clients to switch to recyclable and biodegradable packaging materials.

### The Road Ahead

By 2030, we aim to reduce our carbon footprint by 40% compared to 2020 levels. This ambitious goal requires innovation, investment, and collaboration across the supply chain.
        `,
        date: "Oct 10, 2026",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1577705998148-6da4f5de6d95?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
        category: "insights",
        author: { name: "Sustainability Team", role: "Seaair Global" }
    },
    {
        id: "3",
        slug: "q4-2026-market-outlook",
        title: "Q4 2026 Market Outlook: Peak Season Trends",
        excerpt: "Analysis of freight rate movements and capacity constraints expected for the upcoming holiday season.",
        content: `
## Q4 2026 Market Analysis

As we approach the holiday peak season, the freight market is showing interesting dynamics that shippers should be aware of.

### Ocean Freight Trends

**Transpacific Routes:**
- Rates have stabilized after summer volatility
- Capacity remains tight but manageable
- Expected rate increases of 10-15% for peak season

**Asia-Europe:**
- Suez Canal transits normalized
- Competitive pricing due to overcapacity
- New alliance structures taking effect

### Air Freight Outlook

Air cargo demand is expected to surge 20% above baseline during November-December, driven by:
- E-commerce growth (+25% YoY)
- Semiconductor shipments
- Luxury goods for holiday retail

### Key Recommendations

1. **Book Early** - Secure capacity at least 3-4 weeks in advance
2. **Flexible Routing** - Consider alternative ports to avoid congestion
3. **Inventory Planning** - Account for potential delays in your safety stock
        `,
        date: "Sep 28, 2026",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        category: "market",
        author: { name: "Market Research", role: "Seaair Global" }
    },
    {
        id: "4",
        slug: "vietnam-logistics-hub",
        title: "Vietnam Emerges as Southeast Asia's Logistics Hub",
        excerpt: "How Vietnam's strategic location and improving infrastructure are attracting global supply chain investments.",
        content: `
## Vietnam's Rise in Global Logistics

Vietnam has rapidly emerged as a key logistics hub in Southeast Asia, offering compelling advantages for businesses looking to optimize their supply chains.

### Strategic Advantages

- **Geographic Position** - Gateway to ASEAN markets
- **Trade Agreements** - Member of CPTPP, RCEP, and EVFTA
- **Cost Competitiveness** - Lower operating costs vs. regional peers
- **Infrastructure Investment** - $25B+ planned for ports and roads

### Key Developments

The new Cat Lai Terminal expansion will increase container handling capacity by 50%, positioning Ho Chi Minh City as a major transshipment hub.

### Seaair Global's Investment

We continue to expand our presence in Vietnam with:
- New 50,000 sqm warehouse in Binh Duong
- Enhanced customs brokerage team
- Digital tracking platform for Vietnam routes
        `,
        date: "Sep 20, 2026",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        category: "industry",
        author: { name: "Regional Director", role: "Seaair Global Vietnam" }
    },
    {
        id: "5",
        slug: "digital-transformation-logistics",
        title: "Digital Transformation in Modern Logistics",
        excerpt: "Exploring how AI, IoT, and blockchain are revolutionizing supply chain visibility and efficiency.",
        content: `
## The Digital Logistics Revolution

Technology is reshaping every aspect of logistics, from warehouse operations to last-mile delivery. Here's how digital transformation is changing the game.

### Key Technologies

**Artificial Intelligence**
- Demand forecasting with 95% accuracy
- Automated route optimization
- Predictive maintenance for fleets

**Internet of Things (IoT)**
- Real-time container tracking
- Temperature monitoring for cold chain
- Asset utilization analytics

**Blockchain**
- Immutable shipment records
- Automated customs documentation
- Smart contracts for payments

### Our Digital Initiatives

Seaair Global has invested heavily in digital capabilities:
- Customer portal with real-time visibility
- Mobile app for tracking and documents
- API integration for enterprise clients
        `,
        date: "Sep 15, 2026",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1172&q=80",
        category: "insights",
        author: { name: "Technology Team", role: "Seaair Global" }
    },
    {
        id: "6",
        slug: "partnership-announcement-one",
        title: "Strategic Partnership with Ocean Network Express",
        excerpt: "Seaair Global announces expanded cooperation with ONE for enhanced Asia-Pacific shipping services.",
        content: `
## New Partnership Announcement

We are pleased to announce a strategic partnership with Ocean Network Express (ONE), one of the world's leading container shipping companies.

### Partnership Benefits

- **Priority Booking** - Guaranteed space allocation during peak seasons
- **Competitive Rates** - Volume-based pricing advantages
- **Enhanced Services** - Access to ONE's premium service tiers
- **Network Expansion** - Coverage of 120+ countries

### Service Improvements

Starting October 2026, our customers will benefit from:
- Faster transit times on key trade lanes
- Improved schedule reliability
- Dedicated customer service hotline

This partnership reinforces our commitment to providing world-class logistics solutions.
        `,
        date: "Sep 10, 2026",
        readTime: "3 min read",
        image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        category: "company",
        author: { name: "Business Development", role: "Seaair Global" }
    }
];

export function getArticleBySlug(slug: string): NewsArticle | undefined {
    return NEWS_ARTICLES.find(article => article.slug === slug);
}

export function getArticlesByCategory(category: NewsCategory): NewsArticle[] {
    return NEWS_ARTICLES.filter(article => article.category === category);
}

export function getFeaturedArticles(): NewsArticle[] {
    return NEWS_ARTICLES.filter(article => article.featured);
}

export function getRelatedArticles(currentSlug: string, limit: number = 3): NewsArticle[] {
    const current = getArticleBySlug(currentSlug);
    if (!current) return NEWS_ARTICLES.slice(0, limit);

    return NEWS_ARTICLES
        .filter(article => article.slug !== currentSlug && article.category === current.category)
        .slice(0, limit);
}
