# ☕ Coffee Shop Inventory System Rules

## 1. Project Philosophy
- **User First:** Mobile-First design priorities. Staff must be able to use it easily even while holding items.
- **Speed is a Feature:** The application must load as fast as possible. Target Web Vitals (LCP < 2.5s, INP < 200ms).
- **Offline Capable:** Must be able to operate (sell/inventory) even without internet connection (PWA).
- **Zero Latency (Perceived):** Use Optimistic UI everywhere possible. No loading spinners.

## 2. Tech Stack (Bleeding Edge)
### Core
- **Framework:** Next.js 15 (App Router) - Leverage Server Actions and PPR (Partial Prerender).
- **Library:** React 19 - Use new Hooks (useActionState, useOptimistic).
- **Language:** TypeScript 5.x (Strict Only).
- **Styling:** Tailwind CSS 4.0 - Config based zero-runtime styles.
- **Icons:** Lucide React.

### State & Data
- **Backend/Auth/DB:** Supabase (PostgreSQL).
- **Server State:** TanStack Query v5 (React Query).
- **Local State:** Zustand (For complex Global Client State).
- **Forms:** React Hook Form + Zod.

### Mobile & Performance
- **PWA:** @ducanh2912/next-pwa (or similar library).
- **Animation:** Framer Motion (Use sparingly for good UX, avoid clutter).

## 3. Architecture & Coding Guidelines

### 3.1 Directory Structure (Feature-First)
We organize by feature, keeping related items together for easy maintenance.
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
1.  **Strict Typing:** Never use `any`. Everything must have a Type or Interface.
2.  **Server Actions First:** Prefer Server Actions for mutations over traditional API Routes.
3.  **Optimistic Updates:** All Create/Update/Delete operations must trigger an immediate Optimistic Update on the UI.
4.  **Error Handling:**
    - Use Next.js `error.ts` and `not-found.ts`.
    - Server Actions must always return `{ success: boolean, data?: T, error?: string }`.
5.  **Clean Code:**
    - Use Meaningful Names. Avoid obscure abbreviations.
    - A component file should not exceed 200-300 lines. Split it if it grows larger.

## 4. Feature Highlights (To-Implement)
- [ ] **Scan to Count:** Use mobile camera to scan Barcode/QR for stock deduction.
- [ ] **Smart Alerts:** Real-time low stock notifications.
- [ ] **Dashboard:** Daily sales and stock summary graphs.