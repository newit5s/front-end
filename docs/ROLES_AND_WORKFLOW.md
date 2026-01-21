# 👥 ROLES & WORKFLOW - SEAAIR GLOBAL PROJECT

## ✅ ROLES ĐÃ CẬP NHẬT

### 👨‍💼 BẠN (Product Owner)
**Vai trò chính:**
- ✅ Quyết định cuối cùng về deliverables
- ✅ Cung cấp business requirements
- ✅ **Chạy lệnh thực tế** (deploy, build, test)
- ✅ **Cùng Claude tạo prompts** cho tasks
- ✅ Tạo GitHub issues
- ✅ Testing và verify

---

### 👔 CLAUDE (Tech Lead - Tôi)
**Vai trò chính:**
- ✅ Thiết kế architecture tổng thể
- ✅ **Cùng bạn viết prompts** cho Antigravity
- ✅ Review code từ Antigravity
- ✅ Technical decisions
- ✅ Quản lý documentation
- ✅ Track progress

---

### 🤖 GOOGLE ANTIGRAVITY (Main Developer)
**Vai trò chính:**
- ✅ Nhận prompts từ bạn + Claude
- ✅ Code implementation
- ✅ Tạo task logs
- ✅ Submit pull requests
- ✅ Fix bugs

---

## 🔄 WORKFLOW CHUẨN

### Bước 1: Tạo Task Prompt (Owner + Claude)
```
1. Bạn nói: "Cần làm feature X"
2. Claude đề xuất: "OK, để làm X cần A, B, C..."
3. Bạn + Claude discuss: requirements, design, approach
4. Claude draft prompt chi tiết
5. Bạn review và approve prompt
6. Lưu vào: docs/prompts/XXX-task-name.md
```

### Bước 2: Assign Task (Owner)
```
1. Bạn tạo GitHub issue
2. Attach prompt vào issue
3. Assign to @google-antigravity
4. Tag: "ready-for-dev"
```

### Bước 3: Development (Antigravity)
```
1. Antigravity đọc prompt
2. Tạo branch: feature/XXX-name
3. Code theo prompt
4. Tạo task log
5. Commit & push
6. Create Pull Request
```

### Bước 4: Code Review (Claude)
```
1. Antigravity tag @claude-tech-lead trong PR
2. Claude review code:
   - Check quality
   - Verify requirements
   - Test functionality
   - Accessibility check
3. Claude comment: APPROVED hoặc CHANGES_REQUESTED
```

### Bước 5: Testing & Deploy (Owner)
```
1. Nếu APPROVED → Bạn merge PR
2. Bạn chạy lệnh:
   - npm run build
   - npm run test
   - Deploy to staging
3. Bạn test trên staging
4. OK → Bạn deploy to production
5. Update task status: COMPLETED ✅
```

---

## 📋 MẪU CONVERSATION

### Khi bắt đầu task mới:

**Bạn:**
> "Claude, tôi cần làm button component. Hãy giúp tôi tạo prompt cho Antigravity"

**Claude:**
> "OK! Button component cần:
> - 4 variants (primary, secondary, outline, ghost)
> - 3 sizes (sm, md, lg)
> - Accessible (ARIA)
> - Responsive
> - Tailwind CSS
> 
> Tôi sẽ draft prompt chi tiết. Bạn có thêm requirements gì không?"

**Bạn:**
> "Thêm loading state và icon support"

**Claude:**
> "Noted! Đây là prompt draft: [chi tiết]
> Bạn xem OK không?"

**Bạn:**
> "OK, tạo issue và giao cho Antigravity"

---

### Khi review code:

**Antigravity (trong PR):**
> "PR #1: Button Component ready
> @claude-tech-lead please review"

**Claude:**
> "✅ APPROVED
> 
> Great work! Code clean, accessible, responsive.
> 
> Minor notes:
> - Consider memoizing icon component
> - Add hover state animation
> 
> @owner please test and merge"

**Bạn:**
> [Chạy lệnh test]
> [Merge PR]
> [Deploy]
> "Deployed! Moving to next task"

---

## 🎯 PHÂN CÔNG RÕ RÀNG

| Task | Owner | Claude | Antigravity |
|------|-------|--------|-------------|
| Tạo prompt | ✅ Co-create | ✅ Co-create | ❌ |
| Tạo issue | ✅ | ❌ | ❌ |
| Code | ❌ | ❌ | ✅ |
| Review code | ❌ | ✅ | ❌ |
| Chạy lệnh | ✅ | ❌ | ❌ |
| Merge PR | ✅ | ❌ | ❌ |
| Deploy | ✅ | ❌ | ❌ |
| Final approve | ✅ | ❌ | ❌ |

---

## 💡 LỢI ÍCH WORKFLOW NÀY

### Cho Owner (Bạn):
- ✅ Kiểm soát mọi quyết định
- ✅ Được tư vấn kỹ thuật từ Claude
- ✅ Không cần code nhưng vẫn hiểu rõ
- ✅ Có thể chạy/test mọi thứ

### Cho Claude (Tech Lead):
- ✅ Focus vào architecture & quality
- ✅ Không cần chạy lệnh thực tế
- ✅ Review code hiệu quả
- ✅ Mentor cả Owner và Dev

### Cho Antigravity (Developer):
- ✅ Nhận prompts rõ ràng
- ✅ Focus 100% vào code
- ✅ Feedback nhanh từ Claude
- ✅ Không lo về deploy

---

## 🚀 SẴN SÀNG BẮT ĐẦU?

**Bước đầu tiên:**
```
Bạn: "Claude, giúp tôi tạo prompt cho task đầu tiên - 
      Button Component. Tôi cần gì?"

Claude: [Tạo prompt chi tiết cùng bạn]

Bạn: [Tạo issue, assign Antigravity]

Antigravity: [Code]

Claude: [Review]

Bạn: [Deploy] ✅
```

---

**Let's build! 🎉**

*Roles Version: 2.0 - Updated*  
*Date: 2026-01-08*
