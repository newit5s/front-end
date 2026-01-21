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

