# Project Status & Antigravity Context

## Project Overview
**Seaair Global** - A premium logistics and freight forwarding website.
**Tech Stack**: Next.js 16+ (App Router), TypeScript, Tailwind CSS v4, Framer Motion.

## Design System Colors
- **Primary**: `#A0624F` (Terracotta)
- **Secondary**: `#1E4A7A` (Navy Blue)
- **Accent**: `#F4A261` (Orange/Amber)
- **Dark**: `#0E1E32` (Dark Navy)

## Recent Completed Work

### 1. UI Infrastructure
- [x] Basic Layout (Navbar, Footer)
- [x] Core UI Components (Badge, Button, Container, Card, Input, Select, etc.)
- [x] Responsive Design implementation

### 2. Feature Modules
- [x] **3D Globe Module**: 
    - Interactive globe visualization for homepage
    - Digital wireframe style with polygon country borders
    - Uses brand colors (Navy blue atmosphere, accent markers)
    - Optimized texture loading (~300KB earth-night.jpg)
    - Port markers with transit time info (Sea/Air days)
- [x] **Services Page**: 
    - Cinematic design with branded images
    - Consistent naming: Sea Freight → Air Freight → Road Transport → Warehousing → Customs Brokerage → Last Mile Delivery
    - Optimized hover animations for smooth performance
- [x] **About Us**: Structure and layout completed.
- [x] **Quote Request**: 
    - Full form logic with 7 service types
    - Auto-selection via URL query parameters (`?service=xxx`)
    - Smart UX: Steps auto-advance; Service grid collapses into summary after selection
    - All slugs normalized (supports both short and full slugs)
- [x] **Statistics Counter**: Optimized with single IntersectionObserver and smooth count-up animation
- [x] **Homepage Performance**: Removed heavy animations, optimized hover effects

### 3. Feature Modules (Continued)
- [x] **Tracking Feature**:
    - Full tracking page `/track` with Hero section.
    - Mock Data for Sea, Air, and Delivered shipments (`SGL-84920211`).
    - Detailed shipment timeline UI and "Not Found" state.
    - Mobile-responsive layout.
- [x] **News & Blog Engine**:
    - Data layer `src/data/news.ts` with categories and Markdown support.
    - `/news` listing page with category filters.
    - `/news/[slug]` detail page with sidebar and related articles.
    - Dynamic data integration for Homepage "Latest News".

### 4. Assets & Branding
- [x] Integrated Official Logo
- [x] Generated and fixed branded cinematic images for service categories

### 5. UI/UX Polish
- [x] **Mobile Responsive**: Optimized Menu (Slide-down with backdrop), Quote Form flow, and Tracking layouts.
- [x] **Hero Layout**: Refined absolute positioning of Text and Popup to prevent overlapping.
- [x] **Navigation**: Added "Track" and "News" links to Navbar with active state handling.

## Naming Conventions (IMPORTANT)
All services must use consistent naming across files:

| Order | Service Name | Slug | Files Using |
|-------|--------------|------|-------------|
| 1 | Sea Freight | `sea-freight` | Services.tsx, services.ts, quote/page.tsx, services/page.tsx |
| 2 | Air Freight | `air-freight` | Same as above |
| 3 | Road Transport | `road-transport` | Same as above |
| 4 | Warehousing | `warehousing` | Same as above |
| 5 | Customs Brokerage | `customs-brokerage` | Same as above |
| 6 | Last Mile Delivery | `last-mile` | Same as above |
| 7 | Solution Consulting | `solution-consulting` | quote/page.tsx only |

## Context for Next Agent
- **Styles**: We are optimizing for a "premium, cinematic" look with brand colors.
- **Components**: Located in `src/components`. Reusable UI components in `src/components/ui`.
- **Pages**: App router structure in `src/app`.
- **Data**: News data is in `src/data/news.ts`. Service data in `src/data/services.ts`.
- **Globe**: Uses `react-globe.gl`. Popup is absolute positioned (`top-[48%]`) to avoid hero text overlap.
- **Quote Logic**: The Quote page (`src/app/quote/page.tsx`) uses `currentStep` state. Listens to `searchParams` to auto-fill service.

## Upcoming Tasks (Backlog)
- [ ] **Backend Integration**: Setup API for Quote form submissions & Newsletter
- [ ] **Email Notification**: Send emails upon form submission
- [ ] **Admin Panel**: For managing News and Tracking data (Strapi suggested)
- [ ] Final Deployment / GitHub Push

## Design Change Guidelines
When making design changes:
1. **Check globals.css** for design tokens (colors, fonts, radius)
2. **Use brand colors** - Don't use arbitrary colors like cyan (#06b6d4), use design system colors
3. **Avoid heavy animations** - Keep duration ≤ 300ms for hover, ≤ 500ms for page transitions
4. **Solid colors preferred** - Use single colors instead of gradients unless specified
5. **Always update this file** when adding new features or changing architecture
