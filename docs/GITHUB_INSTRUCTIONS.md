# Hướng dẫn đẩy code lên GitHub

## Repo của bạn
URL: `https://github.com/newit5s/New-website-seaairglobal.git`

## Các lệnh cần chạy (Copy & Paste)

Mở Terminal tại thư mục `seaair-global/frontend` và chạy các lệnh sau:

### 1. Khởi tạo và Commit (nếu chưa làm)
```powershell
git init
git add .
git commit -m "feat: Initial commit with full docs and AI context"
```

### 2. Kết nối và Đẩy code (Push)
```powershell
git branch -M main
git remote add origin https://github.com/newit5s/New-website-seaairglobal.git
git push -u origin main
```

---
**Lưu ý:**
- Nếu gặp lỗi `remote origin already exists`, hãy chạy lệnh: `git remote set-url origin https://github.com/newit5s/New-website-seaairglobal.git`
- Nếu máy chưa có Git, vui lòng cài đặt Git trước.
