# SEAAIR GLOBAL - Design System

## 🎨 Brand Colors

### Primary - Terracotta
```css
--primary-50: #FAF5F3;
--primary-100: #F5EBE7;
--primary-500: #A0624F;  /* Main brand color */
--primary-600: #8B5646;  /* Hover state */
--primary-900: #4C322B;
```

### Secondary - Navy Blue
```css
--secondary-50: #EFF6FB;
--secondary-500: #1E4A7A;  /* Main */
--secondary-600: #1A3F68;  /* Hover */
--secondary-900: #0E1E32;
```

### Accent - Warm Orange
```css
--accent-50: #FEF6F0;
--accent-500: #F4A261;  /* Highlights */
--accent-600: #D68A51;
```

### Neutral
```css
--white: #FFFFFF;
--gray-50: #F8F9FA;
--gray-500: #6C757D;
--gray-900: #343A40;
```

## ✍️ Typography

### Font Families
```css
/* Headings */
font-family: 'Poppins', 'Be Vietnam Pro', sans-serif;
font-weight: 600-700;

/* Body Text */
font-family: 'Inter', 'Be Vietnam Pro', sans-serif;
font-weight: 400-500;
```

### Font Sizes
```css
h1: 48px / 3rem
h2: 36px / 2.25rem
h3: 30px / 1.875rem
h4: 24px / 1.5rem
body: 16px / 1rem
small: 14px / 0.875rem
```

## 📏 Spacing System

```css
/* Base unit: 4px */
xs: 8px
sm: 16px
md: 24px
lg: 32px
xl: 48px
2xl: 64px
3xl: 96px
```

## 🔲 Border Radius

```css
sm: 8px   /* Buttons, inputs */
md: 16px  /* Cards, sections */
lg: 24px  /* Hero elements */
xl: 32px  /* Modals */
```

## 🌟 Shadows

```css
soft: 0 2px 8px rgba(0, 0, 0, 0.08)
medium: 0 4px 16px rgba(0, 0, 0, 0.12)
strong: 0 8px 32px rgba(0, 0, 0, 0.16)
```

## 🎬 Animations

```css
/* Default transition */
transition: all 200ms ease-in-out;

/* Hover effects */
transform: translateY(-2px);
box-shadow: [increased];

/* 3D animations */
rotation: smooth, continuous
interaction: on hover/click
```

## 📱 Responsive Breakpoints

```css
mobile: 375px - 767px
tablet: 768px - 1023px
desktop: 1024px - 1439px
large: 1440px+
```

## 🎯 Usage Guidelines

### Color Usage
- **Primary (Terracotta)**: Main CTAs, important headings, key UI elements
- **Secondary (Navy Blue)**: Navigation, secondary CTAs, text headings
- **Accent (Orange)**: Highlights, hover states, attention-grabbing elements
- **Neutral**: Body text, backgrounds, borders

### Typography Hierarchy
1. **H1**: Page titles, hero headings
2. **H2**: Major section headings
3. **H3**: Subsection headings
4. **H4**: Card titles, small section headings
5. **Body**: Paragraph text, descriptions
6. **Small**: Captions, helper text, footnotes

### Spacing Consistency
- Use spacing system multiples (8px base)
- Section padding: xl-2xl (48-64px)
- Card padding: md-lg (24-32px)
- Element margins: sm-md (16-24px)

### Shadow Hierarchy
- **Soft**: Subtle elevation (cards at rest)
- **Medium**: Hover states, dropdowns
- **Strong**: Modals, important overlays
