# SEAAIR GLOBAL - Website Development Project

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
```
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
```

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
```
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
```

## 📞 Communication Channels
- **Daily Updates**: GitHub comments
- **Weekly Reviews**: Client meetings
- **Urgent Issues**: Email/Phone
- **Code Reviews**: GitHub Pull Requests
- **Documentation**: GitHub Wiki/Docs folder

## 🌐 Languages
- **Primary**: Vietnamese (vi)
- **Secondary**: English (en)
- **Tertiary**: Chinese (zh)

**i18n Strategy**: 
- Route-based: `/vi/`, `/en/`, `/zh/`
- Language switcher in header
- Auto-detect browser language
- Store preference in localStorage
