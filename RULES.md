# ☕ Coffee Shop Inventory System Rules

## 1. Project Philosophy
- **User First:** เน้นการใช้งานบนมือถือเป็นหลัก (Mobile-First) พนักงานต้องกดง่ายแม้ถือของอยู่
- **Speed is a Feature:** โปรแกรมต้องโหลดเร็วที่สุดเท่าที่จะทำได้ ตั้งเป้า Web Vitals (LCP < 2.5s, INP < 200ms)
- **Offline Capable:** เน็ตหลุดต้องขายของ/ตัดของต่อได้ (PWA)
- **Zero Latency (Perceived):** ใช้ Optimistic UI ทุกจุดที่ทำได้ ไม่ต้องรอ Loading spinner

## 2. Tech Stack (Bleeding Edge)
### Core
- **Framework:** Next.js 15 (App Router) - ใช้ประโยชน์จาก Server Actions และ PPR (Partial Prerender)
- **Library:** React 19 - ใช้ Hooks ใหม่ๆ (useActionState, useOptimistic)
- **Language:** TypeScript 5.x (Strict Only)
- **Styling:** Tailwind CSS 4.0 - Config based zero-runtime styles
- **Icons:** Lucide React

### State & Data
- **Backend/Auth/DB:** Supabase (PostgreSQL)
- **Server State:** TanStack Query v5 (React Query)
- **Local State:** Zustand (สำหรับ Global Client State ที่ซับซ้อน)
- **Forms:** React Hook Form + Zod

### Mobile & Performance
- **PWA:** @ducanh2912/next-pwa (หรือ library ที่ใกล้เคียง)
- **Animation:** Framer Motion (ใช้แต่น้อย เพื่อ UX ที่ดี ไม่รก)

## 3. Architecture & Coding Guidelines

### 3.1 Directory Structure (Feature-First)
เราจะจัดโครงสร้างแบบรวมสิ่งที่เกี่ยวข้องกันไว้ด้วยกัน เพื่อให้ Maintain ง่าย
```
/src
  /app          # App Router Pages
  /components
    /ui         # Generic UI Components (Shadcn-like)
    /shared     # Components used across features
  /features     # Business Logic Layers
    /inventory
      /components # UI specific to inventory
      /hooks      # Logic/State
      /actions    # Server Actions
      /types      # TypeScript definitions
    /auth
    /sales
  /lib          # Utilities, Database Clients
```

### 3.2 Key Rules
1.  **Strict Typing:** ห้ามใช้ `any` เด็ดขาด ทุกอย่างต้องมี Type หรือ Interface
2.  **Server Actions First:** พยายามใช้ Server Actions สำหรับ mutations แทน API Routes แบบเดิม
3.  **Optimistic Updates:** ทุกการ Create/Update/Delete ต้องทำ Optimistic Update ทันทีที่หน้า UI
4.  **Error Handling:**
    - ใช้ `error.ts` และ `not-found.ts` ของ Next.js
    - Server Actions ต้อง return `{ success: boolean, data?: T, error?: string }` เสมอ
5.  **Clean Code:**
    - ตั้งชื่อตัวแปรให้อ่านรู้เรื่อง (Meaningful Names) ไม่ใช้ตัวย่อที่เข้าใจยาก
    - Component หนึ่งไฟล์ไม่ควรเกิน 200-300 บรรทัด ถ้าเกินให้แตกไฟล์

## 4. Feature Highlights (To-Implement)
- [ ] **Scan to Count:** ใช้กล้องมือถือ Scan Barcode/QR เพื่อตัดสต็อก
- [ ] **Smart Alerts:** แจ้งเตือนของใกล้หมดแบบ Real-time
- [ ] **Dashboard:** กราฟสรุปยอดขายและสต็อกคงเหลือรายวัน