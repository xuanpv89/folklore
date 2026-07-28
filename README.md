# Folklore - Lịch Sử Thế Giới Đa Chiều & Đồng Thời (Synchronic Parallel World History Timeline)

**Folklore** là ứng dụng web hiện đại cho phép khám phá lịch sử thế giới dưới dạng timeline đa chiều (synchronic history). Khi người dùng nhấp vào **bất kỳ cột mốc thời gian hoặc sự kiện nào**, ứng dụng lập tức xuất hiện góc nhìn song song hiển thị đầy đủ các biến động lịch sử diễn ra đồng thời trên 6 châu lục (Đông & Đông Nam Á/Đại Việt, Châu Âu, Trung Đông, Châu Mỹ, Châu Phi, Châu Đại Dương).

---

## 🌟 Tính Năng Nổi Bật

1. **Khung Thời Gian Đa Luồng (Multi-Track Swimlanes)**:
   - Các luồng dữ liệu riêng biệt cho từng khu vực địa chính trị.
   - Trục căn chỉnh thời gian song song (Crosshair Vertical Line) hiển thị chính xác các mốc thời gian từ 3000 TCN đến 2026 SCN.
2. **Ma Trận Lịch Sử Song Song (Synchronic Matrix)**:
   - So sánh đối chiếu trực tiếp các sự kiện chính trị, quân sự, khoa học, văn hóa diễn ra đồng thời xung quanh năm được chọn (±1 đến ±50 năm).
3. **Bản Đồ Lịch Sử Địa Chính Trị (Historical Map Projection)**:
   - Hiển thị tọa độ địa lý chính xác của các sự kiện lịch sử toàn cầu trên bản đồ thế giới.
4. **Kiểm Định Nguồn & Điểm Tin Cậy (Historical Data Verification)**:
   - Tất cả dữ liệu được chuẩn hóa schema `HistoricalEvent` kèm huy hiệu kiểm định, độ tin cậy %, trích dẫn chính sử & nguồn peer-reviewed.
5. **Công Cụ Tự Động Nạp Dữ Liệu (Auto Ingestion Engine)**:
   - Script Node.js (`scripts/auto_ingest_wikipedia.js`) và giao diện mở rộng tự động truy vấn Wikidata/Wikipedia API để tiếp tục đào sâu dữ liệu lịch sử theo thời gian.

---

## 🚀 Khởi Chạy Dự Án Local

```bash
# Di chuyển vào thư mục dự án
cd "C:\Users\ACER\OneDrive\Desktop\Folks Ecosystem - Official  F1.7.26\folklore"

# Cài đặt phụ thuộc (nếu chưa cài)
npm install

# Bật dev server
npm run dev

# Kiểm tra build sản xuất
npm run build
```

---

## 📤 Hướng Dẫn Đẩy Lên GitHub & Vercel (Tài khoản xuanpv89)

### 1. Push repo lên GitHub:
Tạo repository mới tên `folklore` tại [https://github.com/new](https://github.com/new) dưới tài khoản `xuanpv89`, sau đó chạy:

```bash
git push -u origin main
```

### 2. Deploy lên Vercel:
Dự án đã được cấu hình sẵn file `vercel.json` và tương thích 100% với Vercel.
- Truy cập [https://vercel.com/new](https://vercel.com/new)
- Import repository `xuanpv89/folklore`
- Nhấn **Deploy** (Vercel sẽ tự động build từ `dist` bằng lệnh `npm run build`).

---

## 🛠️ Cấu Trúc Dự Án

```
folklore/
├── public/                # Static assets & icons
├── scripts/
│   └── auto_ingest_wikipedia.js  # Node script tự động nạp & kiểm định dữ liệu
├── src/
│   ├── components/
│   │   ├── Header.tsx            # Thanh điều hướng, bộ lọc kỷ nguyên, khu vực & view switcher
│   │   ├── TimelineCanvas.tsx    # Luồng thời gian đa chiều & trục căn chỉnh song song
│   │   ├── SynchronicMatrix.tsx  # Ma trận so sánh sự kiện diễn ra đồng thời
│   │   ├── HistoricalMapView.tsx # Bản đồ tọa độ sự kiện lịch sử toàn cầu
│   │   ├── EventDetailModal.tsx  # Bảng hồ sơ sự kiện chi tiết & trích dẫn kiểm định
│   │   └── DataIngestModal.tsx   # Công cụ tự động nạp dữ liệu trực tuyến
│   ├── data/
│   │   └── initialEvents.ts      # Cơ sở dữ liệu mốc lịch sử song song chuẩn hóa
│   ├── types/
│   │   └── history.ts            # TypeScript Data Schemas (HistoricalEvent, SynchronicSnapshot)
│   ├── App.tsx                   # Main Layout & State Manager
│   ├── index.css                 # Custom glassmorphic styling & design system tokens
│   └── main.tsx
├── package.json
├── vercel.json                   # Cấu hình deployment Vercel
└── vite.config.ts
```

---

*Được phát triển với tiêu chuẩn thiết kế cao cấp cho Folks Ecosystem.*
