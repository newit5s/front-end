# Hướng Dẫn Quản Lý Tin Tức (News)

Hiện tại, nội dung tin tức được lưu trữ tĩnh trong code để đảm bảo tốc độ nhanh nhất. Dưới đây là cách thêm/sửa bài viết.

## 📂 Vị trí file dữ liệu
File nằm tại: `src/data/news.ts`

## 📝 Cấu trúc một bài viết
Mỗi bài viết là một "object" nằm trong danh sách `NEWS_ARTICLES`.

```typescript
{
    id: "unique-id",              // ID duy nhất (ví dụ: "7", "8"...)
    slug: "tieu-de-bai-viet",     // Link bài viết (không dấu, cách nhau bằng gạch ngang)
    title: "Tiêu đề bài viết",    // Tiêu đề hiển thị
    excerpt: "Mô tả ngắn...",     // Đoạn tóm tắt hiển thị ở card bên ngoài
    
    // Nội dung chính (Hỗ trợ Markdown cơ bản)
    content: `
## Tiêu đề phụ (H2)
Nội dung đoạn văn...

### Tiêu đề nhỏ (H3)
- Gạch đầu dòng 1
- Gạch đầu dòng 2

> Câu trích dẫn (Quote)
    `,
    
    date: "Oct 20, 2026",         // Ngày đăng
    readTime: "5 min read",       // Thời gian đọc ước tính
    image: "https://...",         // Link ảnh (Unsplash hoặc trong folder public)
    category: "company",          // Chọn 1 trong: 'company', 'industry', 'market', 'insights'
    
    // Thông tin tác giả
    author: {
        name: "Tên Tác Giả",
        role: "Chức vụ" 
    },
    
    featured: false               // true nếu muốn bài này to nhất ở đầu trang
}
```

## ➕ Cách thêm bài mới
1. Mở file `src/data/news.ts`
2. Kéo xuống cuối mảng `NEWS_ARTICLES`
3. Thêm dấu phẩy `,` vào bài viết cuối cùng
4. Copy mẫu ở trên và dán vào
5. Điền thông tin mới

## 🎨 Định dạng nội dung (Markdown)
Trong phần `content`, bạn dùng các ký hiệu sau để định dạng:

- **Tiêu đề lớn**: `## Tiêu đề`
- **Tiêu đề nhỏ**: `### Tiêu đề`
- **In đậm**: `**Chữ in đậm**`
- **Gạch đầu dòng**: `- Nội dung`
- **Trích dẫn**: `> Nội dung trích dẫn`

## 🏷️ Danh mục (Categories)
Chỉ được điền các giá trị sau vào ô `category`:
- `company`: Tin tức công ty
- `industry`: Tin ngành Logistics
- `market`: Báo cáo thị trường
- `insights`: Kiến thức/Góc nhìn chuyên gia

---

## 🔮 Tương lai (Backend Integration)
Sau này khi tích hợp CMS (Strapi), bạn sẽ không cần sửa file này nữa mà sẽ đăng bài thông qua trang quản trị (Admin Panel) với giao diện trực quan. Cấu trúc hiển thị bên ngoài vẫn giữ nguyên.
