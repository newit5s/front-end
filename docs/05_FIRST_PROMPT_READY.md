markdown# TASK #001: Button Component

## 📊 METADATA
- **Category**: UI Components / Design System
- **Priority**: P0 - Critical (Foundation component)
- **Complexity**: Low
- **Estimated Time**: 1-2 hours
- **Dependencies**: None
- **Blocks**: 20+ other components

---

## 🎯 CONTEXT

You are building the **foundational Button component** for SEAAIR GLOBAL's website. This component will be used extensively throughout the entire application - in forms, navigation, CTAs, and interactive elements.

**Why This Matters**:
- First component in design system
- Template for all other components
- Sets standards for code quality
- Most frequently used component

**Project Info**:
- Company: B2B Logistics (SEAAIR GLOBAL)
- Tech: Next.js 14 + TypeScript + Tailwind CSS
- Style: Modern, professional, clean

---

## 🎨 OBJECTIVE

Create a **reusable, accessible, production-ready Button component** with multiple variants, sizes, and states that follows the established design system and will serve as the foundation for the entire component library.

---

## ✅ REQUIREMENTS

### Functional Requirements

**Must Have**:
- [ ] 4 visual variants (primary, secondary, outline, ghost)
- [ ] 3 size options (sm, md, lg)
- [ ] Loading state with animated spinner
- [ ] Disabled state
- [ ] Full-width option (`fullWidth` prop)
- [ ] Support for icons (left, right, or icon-only)
- [ ] Proper hover and focus states
- [ ] Keyboard accessibility (Enter, Space)
- [ ] Forward ref support

**Nice to Have** (Optional enhancements):
- Ripple effect animation
- Custom icon size adjustment
- Button groups support

### Technical Requirements

**Framework & Language**:
````typescript
Framework: React 18+
Language: TypeScript (strict mode)
Styling: Tailwind CSS only (no inline styles)
Build Tool: Next.js 14 App Router compatible
````

**Type Safety**:
- Must extend `ButtonHTMLAttributes`
- All props must be properly typed
- No use of `any` type
- Proper union types for variants/sizes

**Performance**:
- No unnecessary re-renders
- Memoization if needed for expensive computations
- Proper use of React patterns

---

## 🎨 DESIGN SPECIFICATIONS

### Brand Colors
````typescript
// Tailwind color tokens to use
const COLORS = {
  primary: {
    50: 'primary-50',   // #FAF5F3 - Hover background for outline/ghost
    500: 'primary-500', // #A0624F - Main brand color
    600: 'primary-600', // #8B5646 - Hover state
  },
  secondary: {
    50: 'secondary-50',   // #EFF6FB
    500: 'secondary-500', // #1E4A7A
    600: 'secondary-600', // #1A3F68
  },
  white: 'white',
  transparent: 'transparent',
};
````

### Variant Specifications

#### 1. **Primary Variant** (Default)
````css
Background: bg-primary-500
Text: text-white
Hover: bg-primary-600
Focus Ring: ring-primary-500
Shadow: Optional subtle shadow
````

**Use Cases**: Main CTAs, form submissions, primary actions

#### 2. **Secondary Variant**
````css
Background: bg-secondary-500
Text: text-white
Hover: bg-secondary-600
Focus Ring: ring-secondary-500
````

**Use Cases**: Secondary actions, alternative CTAs

#### 3. **Outline Variant**
````css
Background: bg-transparent
Border: border-2 border-primary-500
Text: text-primary-500
Hover: bg-primary-50
Focus Ring: ring-primary-500
````

**Use Cases**: Less emphasized actions, cancel buttons

#### 4. **Ghost Variant**
````css
Background: bg-transparent
Border: none
Text: text-primary-500
Hover: bg-primary-50
Focus Ring: ring-primary-500
````

**Use Cases**: Tertiary actions, inline links styled as buttons

### Size Specifications
````typescript
const SIZES = {
  sm: {
    padding: 'px-3 py-1.5',
    text: 'text-sm',
    icon: 'w-4 h-4',
    spinner: 'h-3 w-3',
  },
  md: {
    padding: 'px-4 py-2',
    text: 'text-base',
    icon: 'w-5 h-5',
    spinner: 'h-4 w-4',
  },
  lg: {
    padding: 'px-6 py-3',
    text: 'text-lg',
    icon: 'w-6 h-6',
    spinner: 'h-5 w-5',
  },
};
````

### State Specifications

**Disabled State**:
````css
Opacity: opacity-50
Cursor: cursor-not-allowed
Pointer Events: All hover effects disabled
````

**Loading State**:
````css
Cursor: cursor-wait
Spinner: Animated spinner appears
Button Text: Remains visible
Interaction: Automatically disabled
````

**Focus State**:
````css
Outline: none (using ring instead)
Ring: ring-2 ring-offset-2 ring-[variant-color]
````

**Hover State**:
````css
Transform: Optional subtle translateY(-1px)
Shadow: Optional increased shadow
Background: Variant-specific darker shade
````

### Typography
````css
Font Family: font-sans (inherits from body)
Font Weight: font-medium (500)
Line Height: leading-none
Letter Spacing: tracking-normal
````

### Spacing & Layout
````css
Border Radius: rounded-lg (8px)
Icon Gap: gap-2 (8px between icon and text)
Full Width: w-full
Min Height: Implicit from padding
````

### Animations
````css
Transition: transition-all duration-200 ease-in-out
Hover Transform: Optional transform translateY(-1px)
Spinner Rotation: animate-spin
````

---

## 🔧 COMPONENT API

### Props Interface
````typescript
interface ButtonProps extends ButtonHTMLAttributes {
  /**
   * Visual style variant
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  
  /**
   * Button size
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Shows loading spinner and disables interaction
   * @default false
   */
  isLoading?: boolean;
  
  /**
   * Makes button full width of container
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Icon to display (left side by default)
   * Use React element: 
   */
  icon?: React.ReactNode;
  
  /**
   * Position of icon
   * @default 'left'
   */
  iconPosition?: 'left' | 'right';
  
  /**
   * Button content (text or elements)
   */
  children?: React.ReactNode;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  // All standard button HTML attributes inherited
  // onClick, disabled, type, form, etc.
}
````

---

## 📋 IMPLEMENTATION GUIDE

### File Structure
````
src/components/ui/Button.tsx       # Main component
src/components/ui/index.ts         # Export barrel (update)
````

### Code Structure Template
````typescript
'use client'; // Required for Next.js App Router if using client features

import { forwardRef, ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

// 1. Define Props Interface
interface ButtonProps extends ButtonHTMLAttributes {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children?: React.ReactNode;
}

// 2. Main Component (with forwardRef)
export const Button = forwardRef(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      fullWidth = false,
      icon,
      iconPosition = 'left',
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    // 3. Build className with clsx
    const buttonClasses = clsx(
      // Base styles
      'inline-flex items-center justify-center',
      'font-medium rounded-lg',
      'transition-all duration-200 ease-in-out',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      
      // Variant styles
      {
        'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500':
          variant === 'primary',
        'bg-secondary-500 text-white hover:bg-secondary-600 focus:ring-secondary-500':
          variant === 'secondary',
        'border-2 border-primary-500 text-primary-500 hover:bg-primary-50 focus:ring-primary-500':
          variant === 'outline',
        'text-primary-500 hover:bg-primary-50 focus:ring-primary-500':
          variant === 'ghost',
      },
      
      // Size styles
      {
        'px-3 py-1.5 text-sm': size === 'sm',
        'px-4 py-2 text-base': size === 'md',
        'px-6 py-3 text-lg': size === 'lg',
      },
      
      // Layout
      {
        'w-full': fullWidth,
      },
      
      // Custom classes
      className
    );
    
    // 4. Render Spinner Component
    const Spinner = () => (
      <svg
        className={clsx('animate-spin -ml-1 mr-2', {
          'h-3 w-3': size === 'sm',
          'h-4 w-4': size === 'md',
          'h-5 w-5': size === 'lg',
        })}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        
        
      
    );
    
    // 5. Return Button Element
    return (
      
        {isLoading && }
        {!isLoading && icon && iconPosition === 'left' && (
          {icon}
        )}
        {children}
        {!isLoading && icon && iconPosition === 'right' && (
          {icon}
        )}
      
    );
  }
);

// 6. Display Name (for React DevTools)
Button.displayName = 'Button';
````

### Export in index.ts
````typescript
// src/components/ui/index.ts
export { Button } from './Button';
export type { ButtonProps } from './Button'; // If you export the type
````

---

## ✅ ACCEPTANCE CRITERIA

### Functionality
- [ ] All 4 variants render with correct colors
- [ ] All 3 sizes render with correct dimensions
- [ ] Loading state shows spinner and disables button
- [ ] Disabled state prevents interaction visually and functionally
- [ ] Icons display correctly in left/right positions
- [ ] Full-width prop makes button span container
- [ ] onClick handler fires correctly (when not disabled/loading)
- [ ] All standard button attributes work (type, form, etc.)

### Visual Design
- [ ] Matches design system colors exactly
- [ ] Hover states work on all variants
- [ ] Focus states show visible ring
- [ ] Disabled state shows reduced opacity
- [ ] Transitions are smooth (200ms)
- [ ] Typography is consistent
- [ ] Border radius is 8px
- [ ] Proper spacing between icon and text

### Accessibility
- [ ] Focusable via keyboard (Tab)
- [ ] Activatable via Enter and Space keys
- [ ] ARIA attributes if needed (aria-label for icon-only)
- [ ] Color contrast meets WCAG AA (4.5:1 minimum)
- [ ] Focus indicator is visible
- [ ] Disabled state announced to screen readers

### Code Quality
- [ ] TypeScript shows zero errors
- [ ] No use of `any` type
- [ ] ESLint passes with no warnings
- [ ] Prettier formatting applied
- [ ] Proper use of React hooks (if any)
- [ ] No console errors or warnings
- [ ] Forward ref implemented correctly
- [ ] Display name set for debugging

### Testing
- [ ] Manually tested in Chrome
- [ ] Manually tested in Firefox
- [ ] Manually tested in Safari
- [ ] Tested at mobile width (375px)
- [ ] Tested at desktop width (1920px)
- [ ] Keyboard navigation tested
- [ ] All interactive states tested

---

## 🚫 DO's and DON'Ts

### ✅ DO

- **DO** use `clsx` for conditional className building
- **DO** use Tailwind utility classes exclusively
- **DO** extend `ButtonHTMLAttributes` for props
- **DO** use `forwardRef` for ref forwarding
- **DO** set `displayName` for debugging
- **DO** disable button when `isLoading` is true
- **DO** handle all edge cases (no children, icon-only, etc.)
- **DO** add proper TypeScript types
- **DO** follow React naming conventions
- **DO** keep the component under 200 lines
- **DO** add comments for complex logic
- **DO** test all variants and states

### ❌ DON'T

- **DON'T** use inline styles (style prop)
- **DON'T** use `any` type anywhere
- **DON'T** hardcode colors (use Tailwind tokens)
- **DON'T** forget to handle disabled + loading together
- **DON'T** ignore accessibility
- **DON'T** create side effects in render
- **DON'T** use class components (use functional)
- **DON'T** ignore TypeScript errors
- **DON'T** skip the forwardRef pattern
- **DON'T** forget to export in index.ts
- **DON'T** add unnecessary dependencies

---

## 📚 USAGE EXAMPLES

After implementation, the Button should work like this:
````tsx
// 1. Basic Usage
Click Me

// 2. With Variant and Size

  Get a Quote


// 3. Loading State
Submitting...

// 4. Disabled
Not Available

// 5. With Icon (Left)
}>
  Add Service


// 6. With Icon (Right)
}
  iconPosition="right"
>
  Learn More


// 7. Icon Only (Need aria-label)
}
  aria-label="Search"
/>

// 8. Full Width

  Submit Form


// 9. With onClick Handler
<Button onClick={() => console.log('Clicked!')}>
  Click Me


// 10. In a Form

  Send Quote Request


// 11. With Ref
const buttonRef = useRef(null);
Focus Me Programmatically

// 12. Custom Classes

  Custom Styled


// 13. All Props Combined
}
  iconPosition="right"
  onClick={handleSubmit}
  className="mt-6"
>
  Submit Application

````

---

## 🧪 TESTING CHECKLIST

### Visual Testing

Open the app and manually verify:
````tsx
// Create a test page: app/test/button/page.tsx
export default function ButtonTest() {
  return (
    
      
        Variants
        
          Primary
          Secondary
          Outline
          Ghost
        
      
      
      
        Sizes
        
          Small
          Medium
          Large
        
      
      
      
        States
        
          Loading...
          Disabled
          Normal
        
      
      
      
        With Icons
        
          →}>With Icon
          →} iconPosition="right">
            Icon Right
          
        
      
      
      
        Full Width
        Full Width Button
      
    
  );
}
````

**Test Checklist**:
- [ ] All variants display correct colors
- [ ] Hover changes background color
- [ ] Focus shows ring around button
- [ ] Loading spinner animates
- [ ] Disabled state looks faded
- [ ] Icons align with text
- [ ] Full-width spans container
- [ ] Text is readable on all backgrounds
- [ ] Borders (outline variant) are visible

### Interaction Testing

- [ ] Click handler fires
- [ ] Button doesn't fire when disabled
- [ ] Button doesn't fire when loading
- [ ] Tab key focuses button
- [ ] Enter key activates button
- [ ] Space key activates button
- [ ] Multiple rapid clicks handled
- [ ] Touch events work on mobile

### Browser Testing

Test in:
- [ ] Chrome 120+ (Desktop)
- [ ] Firefox 121+ (Desktop)
- [ ] Safari 17+ (Desktop & iOS)
- [ ] Edge 120+ (Desktop)
- [ ] Chrome Android (Mobile)

### Responsive Testing

Test at widths:
- [ ] 375px (Mobile)
- [ ] 768px (Tablet)
- [ ] 1024px (Desktop)
- [ ] 1920px (Large Desktop)

### TypeScript Check
````bash
npm run type-check
# Should show ZERO errors
````

Expected output:
````
✓ Type checking completed successfully
````

---

## 📤 SUBMISSION FORMAT

Please provide your submission in the following format:

### 1. Code Files

**File: `src/components/ui/Button.tsx`**
````typescript
[YOUR COMPLETE BUTTON COMPONENT CODE]
````

**File: `src/components/ui/index.ts`** (Updated)
````typescript
[EXPORT STATEMENT]
````

### 2. Task Log

**File: `docs/logs/tasks/TASK-001-button-component.md`**

Use this template:
````markdown
# TASK #001: Button Component

## 📊 Metadata
- **Assigned to**: Antigravity
- **Started**: [Date]
- **Completed**: [Date]
- **Status**: ✅ Ready for Review
- **Sprint**: Sprint 01 - Design System

## 🎯 Objective
Created reusable Button component with 4 variants, 3 sizes, loading/disabled states.

## 💻 Implementation

### Files Created/Modified
- ✅ `src/components/ui/Button.tsx` (Created, ~150 LOC)
- ✅ `src/components/ui/index.ts` (Modified, added export)

### Code Summary
[Brief description of your implementation approach]

**Lines of Code**: ~XXX LOC

### Implementation Notes by Antigravity

#### Approach
[Explain your implementation strategy]

#### Challenges Faced
[Any difficulties or interesting problems solved]

#### Decisions Made
1. [Decision 1 and reasoning]
2. [Decision 2 and reasoning]

#### Time Spent
- Planning: XX minutes
- Coding: XX minutes
- Testing: XX minutes
- Documentation: XX minutes
- **Total**: ~XX minutes

## 🧪 Testing Results

### Manual Testing
- [x] Desktop (1920px) - All variants work
- [x] Tablet (768px) - Responsive
- [x] Mobile (375px) - Touch targets OK
- [x] Keyboard navigation - Tab, Enter, Space work
- [x] Screen reader - Properly announced

### Browser Testing
- [x] Chrome 120+ ✅
- [x] Firefox 121+ ✅
- [x] Safari 17+ ✅
- [x] Edge 120+ ✅

### TypeScript Compilation
```bash
$ npm run type-check
✅ No errors found
```

## 📚 Usage Examples
[Include 2-3 code examples showing how to use the component]

## 🔗 Related Tasks
- **Depends on**: None (foundational)
- **Blocks**: #002 Input, #008 Card, #029 Hero Section

## 📎 References
- Prompt: docs/prompts/ui-components/001-button.md
- Design System: docs/01-design-system.md#buttons

## 🏷️ Tags
`ui-component` `design-system` `typescript` `foundational` `ready-for-review`
````

### 3. Pull Request

Create PR with title: `feat(ui): add Button component - TASK-001`

PR Description:
````markdown
## Task: #001 - Button Component

### 📋 Summary
Implemented foundational Button component with 4 variants (primary, secondary, outline, ghost), 3 sizes, loading/disabled states, and full accessibility support.

### 🔗 Related
- Prompt: docs/prompts/ui-components/001-button.md
- Log: docs/logs/tasks/TASK-001-button-component.md
- Issue: #001

### ✅ Checklist
- [x] Code follows TypeScript strict mode
- [x] All variants working correctly
- [x] Component is accessible (ARIA)
- [x] Tested on multiple browsers
- [x] Documentation complete
- [x] Task log created

### 📸 Screenshots
[Attach screenshots showing all 4 variants]

### 🧪 How to Test
```bash
npm run dev
# Navigate to /test/button
# Test all variants, sizes, states
# Test keyboard navigation
# Test on mobile device
```

### 👀 Requesting Review From
@claude-project-lead
````

---

## 🔗 ADDITIONAL RESOURCES

### Tailwind CSS Documentation
- [Colors](https://tailwindcss.com/docs/customizing-colors)
- [Spacing](https://tailwindcss.com/docs/customizing-spacing)
- [Border Radius](https://tailwindcss.com/docs/border-radius)
- [Transitions](https://tailwindcss.com/docs/transition-property)

### React Documentation
- [forwardRef](https://react.dev/reference/react/forwardRef)
- [ButtonHTMLAttributes](https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase#wrappingmirroring-html-attributes)

### Accessibility
- [ARIA Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/)
- [Keyboard Interaction](https://www.w3.org/WAI/ARIA/apg/patterns/button/#keyboardinteraction)

### Tools
- [clsx Documentation](https://github.com/lukeed/clsx)
- [Tailwind Merge](https://github.com/dcastil/tailwind-merge) (if needed)

---

## 🚀 READY TO START?

**You have everything you need:**
- ✅ Clear objective
- ✅ Detailed specifications
- ✅ Code structure template
- ✅ Design system colors
- ✅ Acceptance criteria
- ✅ Testing checklist
- ✅ Submission format

**Estimated Time**: 1-2 hours

**When Complete**:
1. Create files
2. Write task log
3. Create PR
4. Tag @claude-project-lead for review

**Questions Before Starting?**
- Post in GitHub issue #001
- Tag @claude-project-lead

---

**Good luck! Looking forward to reviewing your work! 🎉**

---

**Prompt Created**: 2026-01-08  
**Prompt Version**: 1.0  
**Last Updated**: 2026-01-08

