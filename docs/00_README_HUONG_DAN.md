# 📘 SEAAIR GLOBAL - HƯỚNG DẪN SỬ DỤNG TÀI LIỆU

## 📁 CẤU TRÚC TÀI LIỆU

Tài liệu dự án đã được chia thành **6 file** để dễ quản lý:

### 1️⃣ **01_PROJECT_OVERVIEW.md** - Tổng quan dự án
📖 **Nội dung**: Thông tin cơ bản về dự án
- Thông tin khách hàng (SEAAIR GLOBAL CO., LTD)
- Mục tiêu kinh doanh và kỹ thuật
- Tech stack (Next.js, Strapi, React Three Fiber...)
- Cấu trúc team (Client, Claude, Antigravity)
- Các giai đoạn phát triển (6 phases)
- Chỉ số đánh giá thành công (KPIs)

🎯 **Khi nào xem**: 
- Bắt đầu dự án
- Cần nhớ lại thông tin cơ bản
- Giới thiệu dự án cho người mới

---

### 2️⃣ **02_DESIGN_SYSTEM.md** - Hệ thống thiết kế
🎨 **Nội dung**: Tất cả về thiết kế UI/UX
- Bảng màu (Terracotta, Navy Blue, Orange)
- Typography (fonts, sizes)
- Spacing system (8px base unit)
- Border radius, shadows, animations
- Responsive breakpoints
- Guidelines sử dụng

🎯 **Khi nào xem**:
- Thiết kế component mới
- Cần biết màu sắc, kích thước
- Đảm bảo tính nhất quán UI

---

### 3️⃣ **03_WORKFLOW_GUIDE.md** - Quy trình làm việc
⚙️ **Nội dung**: Quy trình phát triển chi tiết
- 5 bước development cycle
- Cách tạo branch, commit, PR
- Template cho task log
- Code review checklist
- Emergency workflow (hotfix)
- Quality standards
- Git commands, deployment

🎯 **Khi nào xem**:
- Mỗi khi bắt đầu task mới
- Cần tạo PR hay commit
- Review code
- Xử lý bug khẩn cấp

---

### 4️⃣ **04_TASK_PROMPTS_INDEX.md** - Danh sách tất cả tasks
📋 **Nội dung**: Toàn bộ 107 tasks của dự án
- Phase 1: Design System Components (40 tasks)
- Phase 2: Layout & Navigation (8 tasks)
- Phase 3: 3D Components (10 tasks)
- Phase 4: Pages Development (25 tasks)
- Phase 5: Features & Integrations (15 tasks)
- Phase 6: Testing & Optimization (9 tasks)

Mỗi task có:
- ID (001-107)
- Tên task
- Status (Planned/In Progress/Completed)
- Assignee
- PR number

🎯 **Khi nào xem**:
- Lập kế hoạch sprint
- Track tiến độ dự án
- Biết task nào còn lại
- Tìm task theo ID

---

### 5️⃣ **05_FIRST_PROMPT_READY.md** - Prompt đầu tiên sẵn sàng
🚀 **Nội dung**: Prompt hoàn chỉnh cho TASK-001
- Chi tiết đầy đủ để implement Button Component
- Requirements, specifications, code template
- Acceptance criteria, testing checklist
- Submit format

🎯 **Khi nào xem**:
- Sẵn sàng bắt đầu code
- Muốn xem ví dụ prompt hoàn chỉnh
- Giao task cho Antigravity

---

### 6️⃣ **06_CONTINUATION_TEMPLATE.md** - Template tiếp tục dự án
🔄 **Nội dung**: Template để continue trong chat session mới
- Cách cung cấp context cho Claude
- Template điền thông tin hiện tại
- Các options: continue task, start new, review, etc.
- Tips sử dụng hiệu quả

🎯 **Khi nào xem**:
- Mở chat session mới với Claude
- Cần tiếp tục công việc đã dang dở
- Muốn Claude hiểu context nhanh

---

## 🚀 CÁC KỊCH BẢN SỬ DỤNG

### Scenario 1: Mới bắt đầu dự án
```
1. Đọc: 01_PROJECT_OVERVIEW.md (hiểu tổng quan)
2. Đọc: 02_DESIGN_SYSTEM.md (nắm design system)
3. Đọc: 03_WORKFLOW_GUIDE.md (học workflow)
4. Xem: 04_TASK_PROMPTS_INDEX.md (biết có bao nhiêu task)
5. Bắt đầu: 05_FIRST_PROMPT_READY.md (task đầu tiên)
```

### Scenario 2: Đang code một task
```
1. Xem task trong: 04_TASK_PROMPTS_INDEX.md
2. Follow workflow trong: 03_WORKFLOW_GUIDE.md
3. Check design trong: 02_DESIGN_SYSTEM.md
4. Tạo task log theo template trong: 03_WORKFLOW_GUIDE.md
```

### Scenario 3: Tiếp tục dự án sau vài ngày
```
1. Mở: 06_CONTINUATION_TEMPLATE.md
2. Điền thông tin hiện tại (phase, last completed, current task)
3. Copy và paste vào chat mới với Claude
4. Tiếp tục làm việc
```

### Scenario 4: Review code
```
1. Nhận PR link từ Antigravity
2. Mở: 03_WORKFLOW_GUIDE.md → "Code Review" section
3. Follow review checklist
4. Provide feedback theo template
```

### Scenario 5: Khẩn cấp - bug production
```
1. Mở: 03_WORKFLOW_GUIDE.md → "Emergency Workflow"
2. Follow hotfix process
3. Tạo post-mortem report
```

---

## 💡 MẸO SỬ DỤNG

### ✅ DO - Nên làm
- **Bookmark** file này để truy cập nhanh
- **Đọc lướt** các file trước khi bắt đầu
- **Tham khảo thường xuyên** trong quá trình làm việc
- **Update status** trong TASK_PROMPTS_INDEX khi hoàn thành task
- **Copy templates** thay vì viết lại từ đầu

### ❌ DON'T - Không nên
- Không đọc toàn bộ một lúc (quá nhiều thông tin)
- Không bỏ qua WORKFLOW_GUIDE (rất quan trọng!)
- Không tự ý thay đổi design system
- Không skip code review
- Không quên tạo task log

---

## 📞 HỖ TRỢ

### Khi gặp khó khăn:

**1. Câu hỏi về dự án/business**
→ Hỏi Client (Product Owner)

**2. Câu hỏi kỹ thuật/architecture**
→ Hỏi Claude (Project Lead)

**3. Bug/Issue trong code**
→ Tạo GitHub issue, tag @claude-project-lead

**4. Không rõ design**
→ Check lại 02_DESIGN_SYSTEM.md
→ Nếu vẫn chưa rõ → hỏi Claude

**5. Không biết task nào tiếp theo**
→ Xem 04_TASK_PROMPTS_INDEX.md
→ Hỏi Claude để được giao task mới

---

## 🎯 WORKFLOW NHANH

### Bắt đầu task mới:
```bash
1. Xem task trong INDEX
2. Nhận prompt từ Claude
3. Tạo branch: git checkout -b feature/XXX-name
4. Code theo prompt
5. Tạo task log
6. Commit & push
7. Tạo PR
8. Request review từ Claude
9. Sau approve → merge
10. Chuyển sang task tiếp theo
```

### Tiếp tục sau nghỉ:
```bash
1. Mở CONTINUATION_TEMPLATE
2. Điền current status
3. Paste vào chat với Claude
4. Nhận hướng dẫn tiếp theo
5. Continue working
```

---

## 📊 TIẾN ĐỘ DỰ ÁN

**Tổng số tasks**: 107
**Hoàn thành**: 0 (0%)
**Đang làm**: 0
**Còn lại**: 107

📍 **Cập nhật status trong file**: `04_TASK_PROMPTS_INDEX.md`

---

## 📚 QUICK REFERENCE

| Cần gì | Xem file nào |
|--------|--------------|
| Info dự án | 01_PROJECT_OVERVIEW |
| Màu sắc, font chữ | 02_DESIGN_SYSTEM |
| Quy trình làm việc | 03_WORKFLOW_GUIDE |
| List tất cả tasks | 04_TASK_PROMPTS_INDEX |
| Bắt đầu code | 05_FIRST_PROMPT_READY |
| Continue chat mới | 06_CONTINUATION_TEMPLATE |

---

## 🎉 SẴN SÀNG BẮT ĐẦU!

Bạn đã có đầy đủ tài liệu để:
- ✅ Hiểu rõ dự án
- ✅ Biết phải làm gì
- ✅ Biết làm như thế nào
- ✅ Theo dõi tiến độ
- ✅ Làm việc hiệu quả

**Next Step**: 
1. Đọc lướt qua 6 files
2. Mở file `05_FIRST_PROMPT_READY.md`
3. Giao cho Antigravity
4. Bắt đầu build! 🚀

---

**Chúc bạn thành công với dự án SEAAIR GLOBAL!** 🎊

---

*Document Version: 1.0*  
*Created: 2026-01-08*  
*Created by: Claude (Project Lead)*
