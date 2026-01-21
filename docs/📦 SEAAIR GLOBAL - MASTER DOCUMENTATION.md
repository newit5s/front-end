📦 SEAAIR GLOBAL - MASTER DOCUMENTATION

📄 FILE 1: PROJECT_OVERVIEW.md
markdown# SEAAIR GLOBAL - Website Development Project

## 🏢 Client Information
**Company**: SEAAIR GLOBAL CO., LTD  
**Industry**: Logistics & International Shipping  
**Founded**: 2016  
**Location**: Ho Chi Minh City, Vietnam  

**Contact**:
- Address: 120A Tran Ke Xuong Street, Ward 7, Phu Nhuan District, HCMC
- Tel: +84 028 6681 3115
- Hotline: +84 938 975 329
- Email: hieu.tv@seaairglobal.com.vn
- Website: http://www.seaairglobal.com.vn/

## 🎯 Project Goals

### Business Objectives
- Modernize online presence with 3D interactive elements
- Attract B2B clients (manufacturers, importers, exporters)
- Showcase global network and capabilities
- Streamline quote request and tracking processes
- Establish authority in Vietnam logistics market

### Target Audience
- **Primary**: B2B clients (small to large enterprises)
- **Secondary**: Individual shippers
- **Geographic**: Vietnam, Asia, Global
- **Industries**: Manufacturing, Retail, E-commerce, Industrial

### Key Services
1. **Air Freight** - Fast international shipping
2. **Sea Freight** - FCL, LCL, Reefer, Breakbulk, Project cargo
3. **Customs Broker** - Licensed (Ref No. 969/QĐ-TCHQ)
4. **Project Cargo** - Specialized oversized shipments
5. **Multimodal Transport** - Combined transport solutions
6. **Inland Trucking** - Domestic delivery
7. **Insurance Services** - Cargo protection

### Key Partners
**Airlines**: Singapore Airlines, Qatar Airways, Vietnam Airlines, Turkish Cargo  
**Shipping Lines**: APL, ONE, MSC, CMA CGM, COSCO, Evergreen, KMTC, OOCL  
**Customers**: MM Packaging, Alphapack, Venus Concept, TNT, Sumitomo, TMT Medical, Alanmi, AMS, Saigon Newport

## 🛠️ Technical Stack

### Backend
- **CMS**: Strapi v4 (Headless CMS)
- **Database**: PostgreSQL (or MySQL)
- **API**: REST + GraphQL
- **Storage**: Cloudinary
- **Email**: Nodemailer (SMTP)
- **Authentication**: JWT

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Engine**: React Three Fiber + Drei + Three.js
- **Animations**: Framer Motion + GSAP
- **State Management**: Zustand
- **HTTP Client**: Axios
- **i18n**: next-intl

### AI & Analytics
- **Chatbot**: Claude API (Anthropic)
- **Analytics**: Google Analytics 4
- **Tracking**: Facebook Pixel
- **SEO**: Next.js built-in + custom meta tags

### DevOps
- **Version Control**: GitHub
- **CI/CD**: GitHub Actions
- **Backend Hosting**: Matbao VPS
- **Frontend Hosting**: Vercel (or Matbao)
- **CDN**: Cloudflare
- **SSL**: Let's Encrypt
- **Process Manager**: PM2

## 👥 Team Structure

### Roles
````
┌─────────────────────────────────────────────┐
│  👨‍💼 CLIENT (Product Owner)                   │
│  ├── Final approval on all deliverables     │
│  ├── Provides business requirements         │
│  ├── Content & assets provision             │
│  └── User acceptance testing                │
│                                             │
│  👔 CLAUDE (Project Lead/Architect)         │
│  ├── Overall architecture design            │
│  ├── Write detailed prompts for tasks       │
│  ├── Code review & quality assurance        │
│  ├── Technical decision making              │
│  ├── Documentation management               │
│  └── Progress tracking                      │
│                                             │
│  🤖 ANTIGRAVITY (Developer)                 │
│  ├── Execute development tasks              │
│  ├── Implement features per prompts         │
│  ├── Write unit tests                       │
│  ├── Create task logs                       │
│  ├── Submit pull requests                   │
│  └── Fix bugs and issues                    │
└─────────────────────────────────────────────┘
````

## 🎨 Design System

### Brand Colors
````css
/* Primary - Terracotta */
--primary-50: #FAF5F3;
--primary-100: #F5EBE7;
--primary-500: #A0624F;  /* Main brand color */
--primary-600: #8B5646;  /* Hover state */
--primary-900: #4C322B;

/* Secondary - Navy Blue */
--secondary-50: #EFF6FB;
--secondary-500: #1E4A7A;  /* Main */
--secondary-600: #1A3F68;  /* Hover */
--secondary-900: #0E1E32;

/* Accent - Warm Orange */
--accent-50: #FEF6F0;
--accent-500: #F4A261;  /* Highlights */
--accent-600: #D68A51;

/* Neutral */
--white: #FFFFFF;
--gray-50: #F8F9FA;
--gray-500: #6C757D;
--gray-900: #343A40;
````

### Typography
````css
/* Headings */
font-family: 'Poppins', 'Be Vietnam Pro', sans-serif;
font-weight: 600-700;

/* Body Text */
font-family: 'Inter', 'Be Vietnam Pro', sans-serif;
font-weight: 400-500;

/* Sizes */
h1: 48px / 3rem
h2: 36px / 2.25rem
h3: 30px / 1.875rem
h4: 24px / 1.5rem
body: 16px / 1rem
small: 14px / 0.875rem
````

### Spacing System
````css
/* Base unit: 4px */
xs: 8px
sm: 16px
md: 24px
lg: 32px
xl: 48px
2xl: 64px
3xl: 96px
````

### Border Radius
````css
sm: 8px   /* Buttons, inputs */
md: 16px  /* Cards, sections */
lg: 24px  /* Hero elements */
xl: 32px  /* Modals */
````

### Shadows
````css
soft: 0 2px 8px rgba(0, 0, 0, 0.08)
medium: 0 4px 16px rgba(0, 0, 0, 0.12)
strong: 0 8px 32px rgba(0, 0, 0, 0.16)
````

### Animations
````css
/* Default transition */
transition: all 200ms ease-in-out;

/* Hover effects */
transform: translateY(-2px);
box-shadow: [increased];

/* 3D animations */
rotation: smooth, continuous
interaction: on hover/click
````

## 📱 Responsive Breakpoints
````css
mobile: 375px - 767px
tablet: 768px - 1023px
desktop: 1024px - 1439px
large: 1440px+
````

## 🌐 Languages
- **Primary**: Vietnamese (vi)
- **Secondary**: English (en)
- **Tertiary**: Chinese (zh)

**i18n Strategy**: 
- Route-based: `/vi/`, `/en/`, `/zh/`
- Language switcher in header
- Auto-detect browser language
- Store preference in localStorage

## 📊 Project Phases

### Phase 0: Planning & Design (Week 1)
- [x] Requirements gathering
- [x] Architecture design
- [x] Design system definition
- [ ] Wireframes creation
- [ ] Mockups approval
- [ ] GitHub repository setup

### Phase 1: Backend Setup (Week 2)
- [ ] Strapi installation
- [ ] Content types creation
- [ ] API configuration
- [ ] Plugin setup (i18n, upload, email)
- [ ] Sample data population
- [ ] Admin training

### Phase 2: Frontend Foundation (Week 3)
- [ ] Next.js project setup
- [ ] Design system implementation
- [ ] UI component library
- [ ] Layout components (Header, Footer)
- [ ] Routing setup
- [ ] i18n configuration

### Phase 3: Core Pages (Week 4)
- [ ] Homepage with 3D globe
- [ ] About page
- [ ] Service pages (4x)
- [ ] Quote request form
- [ ] Tracking page
- [ ] Contact page

### Phase 4: Advanced Features (Week 5)
- [ ] AI Chatbot integration
- [ ] News aggregation
- [ ] 3D animations polish
- [ ] Email notifications
- [ ] Analytics setup
- [ ] SEO optimization

### Phase 5: Testing & Launch (Week 6)
- [ ] Cross-browser testing
- [ ] Mobile testing
- [ ] Performance optimization
- [ ] Security audit
- [ ] Content migration
- [ ] Staff training
- [ ] Deployment
- [ ] Go-live!

### Phase 6: Post-Launch (Ongoing)
- [ ] Monitor analytics
- [ ] Gather user feedback
- [ ] Bug fixes
- [ ] Content updates
- [ ] Feature enhancements

## 🎯 Success Metrics

### Technical KPIs
- Page load time: < 2 seconds
- Mobile performance: > 90 Lighthouse score
- SEO score: > 90
- Uptime: > 99.5%
- Zero critical bugs

### Business KPIs
- Quote requests: +50% vs old site
- Time on site: > 3 minutes average
- Bounce rate: < 40%
- Mobile traffic: > 60%
- Conversion rate: > 5%

## 📁 Repository Structure
````
seaair-global/
├── backend/              # Strapi CMS
├── frontend/             # Next.js App
├── docs/                 # All documentation
│   ├── prompts/         # Task prompts
│   ├── reviews/         # Code reviews
│   ├── logs/            # Development logs
│   └── assets/          # Design files
├── .github/             # CI/CD workflows
└── README.md
````

## 📞 Communication Channels
- **Daily Updates**: GitHub comments
- **Weekly Reviews**: Client meetings
- **Urgent Issues**: Email/Phone
- **Code Reviews**: GitHub Pull Requests
- **Documentation**: GitHub Wiki/Docs folder

## 🚀 Getting Started
See [SETUP_GUIDE.md](SETUP_GUIDE.md) for detailed setup instructions.

## 📚 Additional Resources
- [Master Development Plan](MASTER_PLAN.md)
- [Design System Guide](DESIGN_SYSTEM.md)
- [API Documentation](API_DOCS.md)
- [Deployment Guide](DEPLOYMENT.md)
- [Contributing Guidelines](CONTRIBUTING.md)

---

**Last Updated**: January 8, 2026  
**Version**: 1.0.0  
**Status**: In Planning Phase

📄 FILE 2: WORKFLOW_GUIDE.md
markdown# Development Workflow Guide

## 🔄 Standard Development Cycle

### 1️⃣ **Task Assignment**

**Claude's Responsibility:**
1. Create detailed task prompt
2. Save to `docs/prompts/[category]/[task-number]-[name].md`
3. Create GitHub issue
4. Assign to Antigravity

**Prompt Format:**
````markdown
# TASK #XXX: [Component/Feature Name]

## CONTEXT
[Background information]

## OBJECTIVE
[What needs to be built]

## REQUIREMENTS
### Functional
- [ ] Requirement 1
- [ ] Requirement 2

### Technical
- Framework: [...]
- Language: [...]

### Design Specs
- Colors: [...]
- Typography: [...]

## ACCEPTANCE CRITERIA
1. [ ] Criterion 1
2. [ ] Criterion 2

## DO's
✅ Best practice 1
✅ Best practice 2

## DON'Ts
❌ Anti-pattern 1
❌ Anti-pattern 2

## SUBMIT FORMAT
[Expected deliverables]
````

### 2️⃣ **Development**

**Antigravity's Responsibility:**

**Step 1: Create Branch**
````bash
git checkout develop
git pull origin develop
git checkout -b feature/XXX-task-name
````

**Step 2: Code Implementation**
- Write clean, well-documented code
- Follow project conventions
- Use TypeScript strictly
- Follow design system
- Handle errors gracefully

**Step 3: Create Task Log**
````bash
# Create log file
touch docs/logs/tasks/TASK-XXX-task-name.md
````

**Log Template:**
````markdown
# TASK #XXX: [Task Name]

## 📊 Metadata
- **Assigned to**: Antigravity
- **Started**: YYYY-MM-DD
- **Completed**: YYYY-MM-DD
- **Status**: 🔄 In Progress
- **Sprint**: Sprint XX

## 🎯 Objective
[Brief summary]

## 💻 Implementation

### Files Created/Modified
- ✅ `path/to/file.tsx` (Created)
- ✅ `path/to/file2.tsx` (Modified)

### Code Summary
[Brief explanation of approach]

**Lines of Code**: ~XX LOC

### Implementation Notes by Antigravity

#### Approach
[Detailed explanation]

#### Challenges Faced
[Any difficulties encountered]

#### Decisions Made
1. Decision 1 and reasoning
2. Decision 2 and reasoning

#### Time Spent
- Planning: X minutes
- Coding: X minutes
- Testing: X minutes
- Documentation: X minutes
- **Total**: ~X minutes

## 🧪 Testing Results

### Manual Testing
- [ ] Desktop (1920px)
- [ ] Tablet (768px)
- [ ] Mobile (375px)
- [ ] Keyboard navigation
- [ ] Screen reader

### Browser Testing
- [ ] Chrome 120+
- [ ] Firefox 121+
- [ ] Safari 17+
- [ ] Edge 120+

### TypeScript Compilation
```bash
$ npm run type-check
[Results]
```

## 📚 Usage Examples
```tsx
[Code examples]
```

## 🔗 Related Tasks
- **Depends on**: [Task IDs]
- **Blocks**: [Task IDs]

## 📎 References
- Prompt: [Link]
- Design: [Link]

## 🏷️ Tags
`tag1` `tag2` `tag3`
````

**Step 4: Commit with Convention**
````bash
git add .
git commit -m "feat(scope): brief description

- Detailed change 1
- Detailed change 2
- Detailed change 3

Closes #XXX"
````

**Commit Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting, no code change
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance tasks

**Step 5: Push and Create PR**
````bash
git push origin feature/XXX-task-name
````

Then create Pull Request on GitHub with template:
````markdown
## Task: #XXX - [Task Name]

### 📋 Summary
[Brief description of changes]

### 🔗 Related
- Prompt: docs/prompts/.../XXX-task.md
- Log: docs/logs/tasks/TASK-XXX-task.md
- Issue: #XXX

### ✅ Checklist
- [ ] Code follows project conventions
- [ ] TypeScript types are correct
- [ ] Component is accessible
- [ ] Tested on multiple browsers
- [ ] Documentation updated
- [ ] Task log created and complete

### 📸 Screenshots
[Attach screenshots if UI component]

### 🧪 How to Test
```bash
npm run dev
# Test instructions
```

### 👀 Requesting Review From
@claude-project-lead
````

### 3️⃣ **Code Review**

**Client's Responsibility:**
1. Copy PR link from GitHub
2. Paste link to Claude
3. Wait for review

**Claude's Responsibility:**

**Review Checklist:**
````markdown
## Code Review for PR #XX - TASK #XXX

### ✅ Code Quality
- [ ] Clean, readable code
- [ ] Proper TypeScript types (no `any`)
- [ ] Follows project conventions
- [ ] No code smells
- [ ] Proper error handling
- [ ] Security best practices

### ✅ Functionality
- [ ] Meets all requirements
- [ ] Acceptance criteria passed
- [ ] Edge cases handled
- [ ] No bugs found

### ✅ Design System
- [ ] Correct brand colors
- [ ] Proper spacing/sizing
- [ ] Follows Tailwind conventions
- [ ] Responsive design works
- [ ] Animations smooth

### ✅ Performance
- [ ] No unnecessary re-renders
- [ ] Optimized images/assets
- [ ] Lazy loading where appropriate
- [ ] No memory leaks

### ✅ Accessibility
- [ ] Proper ARIA attributes
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Focus states visible
- [ ] Color contrast sufficient

### ✅ Testing
- [ ] Manual testing complete
- [ ] Cross-browser tested
- [ ] Mobile tested
- [ ] TypeScript compiles
- [ ] No console errors

### ✅ Documentation
- [ ] Task log created and complete
- [ ] Code comments where needed
- [ ] Usage examples provided
- [ ] README updated if needed
````

**Review Outcomes:**

**A) ✅ APPROVED**
````markdown
## ✅ APPROVED - Ready to Merge

Excellent work @antigravity!

### Highlights
- [Positive points]

### Minor Notes (Optional improvements)
- [Suggestions for future]

### Next Steps
- Merge to develop
- Move to TASK-XXX: [Next Task Name]

**Status**: LGTM 🚀
````

**B) 🔄 CHANGES REQUESTED**
````markdown
## 🔄 CHANGES REQUESTED

Good start, but needs some adjustments before merge.

### Issues Found

#### Issue 1: [Title]
- **Current**: [What's wrong]
- **Expected**: [What should be]
- **Fix**: [How to fix]
- **Priority**: High/Medium/Low

#### Issue 2: [Title]
[Same format]

### Suggestions
- [Optional improvements]

### Action Required
Please address the issues above and update the PR.
````

**C) ❌ REJECTED (Rare)**
````markdown
## ❌ REJECTED

Significant issues found that require major rework.

### Critical Issues
1. [Major problem 1]
2. [Major problem 2]

### Recommendation
- Start fresh with a new approach
- Refer back to original prompt
- Consult with team before proceeding
````

### 4️⃣ **Merge & Deploy**

**After Approval:**

1. **Merge PR**
````bash
git checkout develop
git merge feature/XXX-task-name
git push origin develop
````

2. **Update Trackers**
````markdown
# docs/logs/sprint-XX.md
## Completed This Sprint
- ✅ TASK-XXX: [Task Name] (Date) - @antigravity

# docs/PROGRESS.md
## Recently Completed ✅
- TASK-XXX: [Task Name] (Date)

## In Progress 🔄
- TASK-YYY: [Next Task]
````

3. **Tag Release (If milestone)**
````bash
git tag -a v0.1.0 -m "Release: Design System Complete"
git push origin v0.1.0
````

4. **Deploy to Staging** (Automatic via CI/CD)

5. **Client Testing**

6. **Deploy to Production** (After client approval)

### 5️⃣ **Next Task**

**Claude creates next prompt → Cycle repeats**

## 🚨 Emergency Workflow

### If Bug Found in Production

1. **Create Hotfix Branch**
````bash
git checkout main
git checkout -b hotfix/critical-bug-name
````

2. **Fix + Test**

3. **Emergency PR**
````markdown
## 🚨 HOTFIX: [Bug Description]

### Impact
[What was broken]

### Fix
[What was changed]

### Testing
[How it was verified]

**Priority**: URGENT
````

4. **Fast-track Review** (< 1 hour)

5. **Deploy Immediately**

6. **Post-mortem**
````markdown
# docs/logs/incidents/YYYY-MM-DD-bug-name.md

## Incident Report

### What Happened
[Description]

### Root Cause
[Why it occurred]

### Fix Applied
[What was done]

### Prevention
[How to avoid in future]
````

## 📊 Progress Tracking

### Daily Standup (Async via GitHub)
````markdown
**Yesterday**:
- Completed: TASK-XXX
- Blocked by: [If any]

**Today**:
- Working on: TASK-YYY
- Expected completion: [Date]

**Blockers**:
- [Any issues]
````

### Weekly Sprint Review
````markdown
# Sprint XX Review (YYYY-MM-DD)

## Completed
- ✅ TASK-001: Button (Antigravity)
- ✅ TASK-002: Input (Antigravity)
[...]

## In Progress
- 🔄 TASK-010: Header (Antigravity)

## Blocked
- ⚠️ TASK-015: API Integration (Waiting for backend)

## Metrics
- Planned: 10 tasks
- Completed: 8 tasks
- Velocity: 80%
- Quality: All PRs approved first try

## Next Sprint Plan
- Complete remaining 2 tasks
- Start Phase 3: Core Pages
````

## 🎯 Quality Standards

### Definition of Done
- [ ] Code reviewed and approved
- [ ] All tests passing
- [ ] Documentation updated
- [ ] Task log complete
- [ ] Deployed to staging
- [ ] Client tested and approved
- [ ] No known bugs
- [ ] Performance acceptable
- [ ] Accessibility verified
- [ ] Merged to develop

### Code Standards
- **TypeScript**: Strict mode, no `any`
- **Formatting**: Prettier + ESLint
- **Naming**: camelCase for variables, PascalCase for components
- **Comments**: Only for complex logic
- **File Size**: < 300 lines per file
- **Function Size**: < 50 lines per function

### Git Standards
- **Branch Naming**: `feature/XXX-task-name`, `bugfix/issue-name`, `hotfix/critical-bug`
- **Commit Messages**: Follow conventional commits
- **PR Size**: < 500 lines changed (split if larger)
- **PR Description**: Use template, include context

## 🛠️ Tools & Commands

### Development
````bash
# Frontend
npm run dev          # Start dev server
npm run build        # Production build
npm run type-check   # TypeScript check
npm run lint         # ESLint
npm run format       # Prettier

# Backend
npm run develop      # Strapi dev mode
npm run build        # Build admin panel
npm run start        # Production mode
````

### Git
````bash
# Common workflows
git checkout develop
git pull origin develop
git checkout -b feature/XXX-name
# ... work ...
git add .
git commit -m "feat: description"
git push origin feature/XXX-name

# Sync with develop
git checkout develop
git pull origin develop
git checkout feature/XXX-name
git rebase develop

# Clean up
git branch -d feature/XXX-name  # Local
git push origin --delete feature/XXX-name  # Remote
````

### Deployment
````bash
# Backend (VPS)
ssh user@server
cd /var/www/seaair-backend
git pull origin main
npm install
npm run build
pm2 restart seaair-backend

# Frontend (Vercel)
vercel --prod

# Or Matbao
npm run build
scp -r .next user@server:/var/www/seaair-frontend
pm2 restart seaair-frontend
````

## 📞 Escalation Path

### Level 1: Self-Service
- Check documentation
- Search GitHub issues
- Review similar tasks

### Level 2: Ask Project Lead (Claude)
- Technical questions
- Architecture decisions
- Code review questions

### Level 3: Client Decision
- Business requirements
- Budget/timeline changes
- Major feature changes

### Level 4: Emergency
- Production down
- Security breach
- Data loss

**Emergency Contact**: [Client phone/email]

---

**Remember**: Quality over speed. It's better to take an extra day and do it right than to rush and create technical debt.

📄 FILE 3: TASK_PROMPTS_INDEX.md
markdown# Task Prompts Index

Complete list of all development tasks with prompts.

## Legend
- ✅ Completed
- 🔄 In Progress  
- 📋 Planned
- ⏸️ On Hold
- ❌ Cancelled

---

## PHASE 1: DESIGN SYSTEM COMPONENTS

### UI Primitives (Week 1)

| ID | Task | Status | Assignee | PR | Completed |
|----|------|--------|----------|----|-----------| 
| 001 | Button Component | 📋 | - | - | - |
| 002 | Input Component | 📋 | - | - | - |
| 003 | Textarea Component | 📋 | - | - | - |
| 004 | Select Component | 📋 | - | - | - |
| 005 | Checkbox Component | 📋 | - | - | - |
| 006 | Radio Component | 📋 | - | - | - |
| 007 | Badge Component | 📋 | - | - | - |
| 008 | Card Component | 📋 | - | - | - |
| 009 | Modal Component | 📋 | - | - | - |
| 010 | Toast Component | 📋 | - | - | - |

**Prompt Locations**: `docs/prompts/ui-components/`

### Complex UI (Week 2)

| ID | Task | Status | Assignee | PR | Completed |
|----|------|--------|----------|----|-----------| 
| 011 | Loading Spinner | 📋 | - | - | - |
| 012 | Skeleton Loader | 📋 | - | - | - |
| 013 | Tabs Component | 📋 | - | - | - |
| 014 | Accordion Component | 📋 | - | - | - |
| 015 | Tooltip Component | 📋 | - | - | - |
| 016 | Dropdown Menu | 📋 | - | - | - |
| 017 | Breadcrumb | 📋 | - | - | - |
| 018 | Pagination | 📋 | - | - | - |
| 019 | Table Component | 📋 | - | - | - |
| 020 | Form Builder | 📋 | - | - | - |

**Prompt Locations**: `docs/prompts/ui-components/`

---

## PHASE 2: LAYOUT & NAVIGATION

### Core Layout (Week 3)

| ID | Task | Status | Assignee | PR | Completed |
|----|------|--------|----------|----|-----------| 
| 021 | Header Component | 📋 | - | - | - |
| 022 | Footer Component | 📋 | - | - | - |
| 023 | Navigation Menu | 📋 | - | - | - |
| 024 | Mobile Menu | 📋 | - | - | - |
| 025 | Language Switcher | 📋 | - | - | - |
| 026 | Search Bar | 📋 | - | - | - |
| 027 | Page Container | 📋 | - | - | - |
| 028 | Section Wrapper | 📋 | - | - | - |

**Prompt Locations**: `docs/prompts/layout-components/`

---

## PHASE 3: 3D COMPONENTS

### 3D Elements (Week 4)

| ID | Task | Status | Assignee | PR | Completed |
|----|------|--------|----------|----|-----------| 
| 029 | 3D Scene Setup | 📋 | - | - | - |
| 030 | Globe Component | 📋 | - | - | - |
| 031 | Route Lines | 📋 | - | - | - |
| 032 | Plane Model | 📋 | - | - | - |
| 033 | Ship Model | 📋 | - | - | - |
| 034 | Container Model | 📋 | - | - | - |
| 035 | Warehouse Model | 📋 | - | - | - |
| 036 | Loading 3D Assets | 📋 | - | - | - |

**Prompt Locations**: `docs/prompts/3d-components/`

---

## PHASE 4: PAGE SECTIONS

### Homepage Sections (Week 5)

| ID | Task | Status | Assignee | PR | Completed |
|----|------|--------|----------|----|-----------| 
| 037 | Hero Section | 📋 | - | - | - |
| 038 | Services Grid | 📋 | - | - | - |
| 039 | Statistics Counter | 📋 | - | - | - |
| 040 | Why Choose Us | 📋 | - | - | - |
| 041 | Partners Slider | 📋 | - | - | - |
| 042 | Testimonials | 📋 | - | - | - |
| 043 | Latest News | 📋 | - | - | - |
| 044 | CTA Section | 📋 | - | - | - |

**Prompt Locations**: `docs/prompts/page-sections/`

### Other Sections (Week 5-6)

| ID | Task | Status | Assignee | PR | Completed |
|----|------|--------|----------|----|-----------| 
| 045 | About Timeline | 📋 | - | - | - |
| 046 | Team Grid | 📋 | - | - | - |
| 047 | Office Map | 📋 | - | - | - |
| 048 | Contact Form | 📋 | - | - | - |
| 049 | FAQ Accordion | 📋 | - | - | - |
| 050 | Service Features | 📋 | - | - | - |

**Prompt Locations**: `docs/prompts/page-sections/`

---

## PHASE 5: FULL PAGES

### Main Pages (Week 6-7)

| ID | Task | Status | Assignee | PR | Completed |
|----|------|--------|----------|----|-----------| 
| 051 | Homepage | 📋 | - | - | - |
| 052 | About Page | 📋 | - | - | - |
| 053 | Air Freight Page | 📋 | - | - | - |
| 054 | Sea Freight Page | 📋 | - | - | - |
| 055 | Customs Broker Page | 📋 | - | - | - |
| 056 | Project Cargo Page | 📋 | - | - | - |
| 057 | News Listing | 📋 | - | - | - |
| 058 | News Detail | 📋 | - | - | - |
| 059 | Contact Page | 📋 | - | - | - |
| 060 | 404 Page | 📋 | - | - | - |

**Prompt Locations**: `docs/prompts/pages/`

---

## PHASE 6: FEATURES

### Core Features (Week 7-8)

| ID | Task | Status | Assignee | PR | Completed |
|----|------|--------|----------|----|-----------| 
| 061 | Quote Request Form | 📋 | - | - | - |
| 062 | Form Validation | 📋 | - | - | - |
| 063 | Quote Submission API | 📋 | - | - | - |
| 064 | Email Notifications | 📋 | - | - | - |
| 065 | Tracking Input | 📋 | - | - | - |
| 066 | Tracking Display | 📋 | - | - | - |
| 067 | Tracking Timeline | 📋 | - | - | - |

**Prompt Locations**: `docs/prompts/features/`

### AI & Advanced (Week 8-9)

| ID | Task | Status | Assignee | PR | Completed |
|----|------|--------|----------|----|-----------| 
| 068 | AI Chatbot Widget | 📋 | - | - | - |
| 069 | Chatbot API Route | 📋 | - | - | - |
| 070 | Conversation History | 📋 | - | - | - |
| 071 | Multi-language Chat | 📋 | - | - | - |
| 072 | News Aggregation | 📋 | - | - | - |
| 073 | News Translation | 📋 | - | - | - |
| 074 | Search Functionality | 📋 | - | - | - |

**Prompt Locations**: `docs/prompts/features/`

---

## PHASE 7: BACKEND (STRAPI)

### Content Types (Week 2-3)

| ID | Task | Status | Assignee | PR | Completed |
|----|------|--------|----------|----|-----------| 
| 075 | Service Content Type | 📋 | - | - | - |
| 076 | Partner Content Type | 📋 | - | - | - |
| 077 | News Content Type | 📋 | - | - | - |
| 078 | Quote Content Type | 📋 | - | - | - |
| 079 | Tracking Content Type | 📋 | - | - | - |
| 080 | Office Content Type | 📋 | - | - | - |
| 081 | Team Content Type | 📋 | - | - | - |
| 082 | Certification Type | 📋 | - | - | - |
| 083 | Testimonial Type | 📋 | - | - | - |
| 084 | Page Content Type | 📋 | - | - | - |

**Prompt Locations**: `docs/prompts/backend/`

### API & Plugins (Week 3)

| ID | Task | Status | Assignee | PR | Completed |
|----|------|--------|----------|----|-----------| 
| 085 | i18n Plugin Setup | 📋 | - | - | - |
| 086 | Upload Plugin Config | 📋 | - | - | - |
| 087 | Email Plugin Setup | 📋 | - | - | - |
| 088 | API Permissions | 📋 | - | - | - |
| 089 | Custom API Routes | 📋 | - | - | - |
| 090 | Webhooks Setup | 📋 | - | - | - |

**Prompt Locations**: `docs/prompts/backend/`

---

## PHASE 8: OPTIMIZATION & DEPLOYMENT

### Performance (Week 9)

| ID | Task | Status | Assignee | PR | Completed |
|----|------|--------|----------|----|-----------| 
| 091 | Image Optimization | 📋 | - | - | - |
| 092 | Code Splitting | 📋 | - | - | - |
| 093 | Lazy Loading | 📋 | - | - | - |
| 094 | Caching Strategy | 📋 | - | - | - |
| 095 | 3D Performance Tuning | 📋 | - | - | - |

**Prompt Locations**: `docs/prompts/optimization/`

### SEO & Analytics (Week 9)

| ID | Task | Status | Assignee | PR | Completed |
|----|------|--------|----------|----|-----------| 
| 096 | Meta Tags Component | 📋 | - | - | - |
| 097 | Sitemap Generator | 📋 | - | - | - |
| 098 | robots.txt | 📋 | - | - | - |
| 099 | Google Analytics | 📋 | - | - | - |
| 100 | Facebook Pixel | 📋 | - | - | - |
| 101 | Structured Data | 📋 | - | - | - |

**Prompt Locations**: `docs/prompts/seo/`

### Deployment (Week 10)

| ID | Task | Status | Assignee | PR | Completed |
|----|------|--------|----------|----|-----------| 
| 102 | Backend Deployment Script | 📋 | - | - | - |
| 103 | Frontend Deployment Script | 📋 | - | - | - |
| 104 | CI/CD Pipeline | 📋 | - | - | - |
| 105 | Environment Variables | 📋 | - | - | - |
| 106 | SSL Setup | 📋 | - | - | - |
| 107 | Monitoring Setup | 📋 | - | - | - |

**Prompt Locations**: `docs/prompts/deployment/`

---

## Summary

**Total Tasks**: 107  
**Estimated Duration**: 10 weeks  
**Team Size**: 2 (Claude + Antigravity)

### By Phase
- Phase 1 (Design System): 20 tasks
- Phase 2 (Layout): 8 tasks
- Phase 3 (3D): 8 tasks
- Phase 4 (Sections): 14 tasks
- Phase 5 (Pages): 10 tasks
- Phase 6 (Features): 14 tasks
- Phase 7 (Backend): 16 tasks
- Phase 8 (Optimization): 17 tasks

### By Priority
- **P0 (Must Have)**: 60 tasks
- **P1 (Should Have)**: 30 tasks
- **P2 (Nice to Have)**: 17 tasks

---

## Quick Access

### Current Sprint Tasks
[Link to current sprint board]

### Next Up
[Next 5 tasks in queue]

### Blocked Tasks
[Tasks waiting on dependencies]

### Bug Fixes
[Active bug tickets]

---

**Last Updated**: 2026-01-08  
**Maintained By**: Claude (Project Lead)

📄 FILE 4: FIRST_PROMPT_READY.md
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

📄 FILE 5: CONTINUATION_TEMPLATE.md
markdown# Session Continuation Template

Use this template to continue the project in a new chat session with Claude.

---

## 🔄 CONTINUE SEAAIR GLOBAL PROJECT

### Project Context
````yaml
Project: SEAAIR GLOBAL Website Development
Type: B2B Logistics Company Website
Client: SEAAIR GLOBAL CO., LTD, Vietnam

Tech Stack:
  Backend: Strapi v4 (Headless CMS)
  Frontend: Next.js 14 + TypeScript + Tailwind CSS
  3D: React Three Fiber + Three.js
  AI: Claude API (Anthropic)

Team:
  Product Owner: [Client Name]
  Project Lead: Claude (Architecture, Prompts, Reviews)
  Developer: Antigravity (Implementation)

Repository: [GitHub URL when created]
````

### Current Status
````yaml
Phase: [Current phase number and name]
Sprint: [Current sprint]
Last Completed: [Last completed task with ID]
Currently Working On: [Current task with ID]
Next Up: [Next 2-3 tasks]

Progress:
  Total Tasks: 107
  Completed: X
  In Progress: X
  Remaining: X
  Percentage: X%
````

### Recent Activity
````
[Date] - Completed TASK-XXX: [Task name]
[Date] - Started TASK-XXX: [Task name]
[Date] - Reviewed PR #XX
````

### Active Blockers
````
- [Blocker 1 if any]
- [Blocker 2 if any]
- None currently
````

---

## 📍 WHAT I NEED HELP WITH

Choose one:

### A) Continue Previous Task
````
I'm continuing work on TASK-XXX: [Task Name]

Current situation:
- [What's been done]
- [What remains]
- [Any issues encountered]

I need: [Specific help needed]
````

### B) Start New Task
````
Ready to start TASK-XXX: [Task Name]

I need:
- [ ] Detailed prompt for Antigravity
- [ ] Any additional context
- [ ] Clarification on [specific aspect]
````

### C) Code Review
````
Antigravity completed TASK-XXX: [Task Name]

PR Link: [GitHub PR URL]

Please review:
- [Specific areas to focus on]
- [Any concerns]
````

### D) Planning/Architecture
````
Need help planning:
- [What you want to discuss]
- [Decisions to be made]
- [Technical questions]
````

### E) Problem Solving
````
Encountered issue:
- Task: TASK-XXX
- Problem: [Description]
- What I've tried: [Attempts]
- Error messages: [If any]
````

---

## 📚 QUICK LINKS

### Documentation
- Master Plan: `docs/MASTER_PLAN.md`
- Workflow Guide: `docs/WORKFLOW_GUIDE.md`
- Design System: `docs/DESIGN_SYSTEM.md`
- All Prompts: `docs/prompts/README.md`
- Progress Tracker: `docs/PROGRESS.md`

### Current Sprint
- Sprint Log: `docs/logs/sprint-XX.md`
- Task Index: `docs/TASK_PROMPTS_INDEX.md`

### GitHub
- Repository: [URL]
- Issues: [URL/issues]
- Pull Requests: [URL/pulls]
- Project Board: [URL/projects]

---

## 🎯 READY FOR CLAUDE

After filling in the sections above, send to Claude with:
````
Continue SEAAIR GLOBAL project

[Paste filled template above]
````

Claude will:
1. ✅ Acknowledge context
2. ✅ Understand current state
3. ✅ Provide exactly what you need
4. ✅ Maintain consistency with previous work

---

## 💡 TIPS FOR EFFECTIVE CONTINUATION

### DO ✅
- Reference specific task IDs (TASK-XXX)
- Include PR links for reviews
- Mention any changes since last session
- Be specific about what you need
- Attach error messages if debugging

### DON'T ❌
- Start completely fresh without context
- Forget to mention completed work
- Skip the current status
- Be vague about needs

---

## 📋 EXAMPLE (Filled Template)
````
Continue SEAAIR GLOBAL project

Phase: Phase 1 - Design System
Sprint: Sprint 01
Last Completed: TASK-001 Button Component (Jan 8)
Currently Working On: TASK-002 Input Component
Next Up: TASK-003 Card Component, TASK-004 Modal

Progress: 1/107 tasks (0.9%)

Recent Activity:
Jan 8 - Completed TASK-001: Button Component ✅
Jan 8 - PR #1 reviewed and merged
Jan 8 - Started TASK-002: Input Component

Active Blockers: None

---

WHAT I NEED:

Ready to start TASK-002: Input Component

I need:
- Detailed prompt for Antigravity
- Should Input component follow same patterns as Button?
- Any specific validation requirements?
````

---

**Template Version**: 1.0  
**Last Updated**: 2026-01-08  
**Created By**: Claude (Project Lead)
````

---

## ✅ **FILES SUMMARY**

You now have **5 complete markdown files**:

1. **PROJECT_OVERVIEW.md** - Complete project context, tech stack, design system, team structure
2. **WORKFLOW_GUIDE.md** - Detailed development workflow, review process, quality standards  
3. **TASK_PROMPTS_INDEX.md** - All 107 tasks indexed and categorized
4. **FIRST_PROMPT_READY.md** - Complete, ready-to-use prompt for TASK-001 (Button Component)
5. **CONTINUATION_TEMPLATE.md** - Template for continuing work in new chat sessions

---

## 🚀 **IMMEDIATE NEXT STEPS**

### Option 1: Save These Files
Copy all 5 files above and save them to your project

### Option 2: Start Development
Take **FIRST_PROMPT_READY.md**, give it to Antigravity, and start building!

### Option 3: Setup GitHub First
Let me know and I'll create:
- Repository setup script
- GitHub issue templates
- CI/CD workflow files
- README.md for the repo

---

## 💬 **HOW TO USE IN NEXT CHAT**

When you come back:
````
Continue SEAAIR GLOBAL project

Phase: 1 - Design System
Last Completed: [Whatever you finished]
Currently Working On: [Current task]

I need: [What you need help with]
