# ☕ Coffee Shop Inventory System

A **Mobile-First**, **Offline-Capable** Inventory Management System designed for speed and reliability. Built with the latest web technologies to ensure a "Zero Latency" experience for baristas and staff.

## 🚀 Tech Stack (Bleeding Edge)
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript 5.x (Strict)
- **Styling:** Tailwind CSS 4.0
- **State:** TanStack Query v5 + Zustand
- **Database:** Supabase (PostgreSQL)

## ✨ Features
- **⚡ Zero Latency:** Optimistic UI updates for instant interactions.
- **📱 PWA Ready:** Installable on iOS/Android, works offline.
- **🔍 Smart Scanning:** Barcode/QR scanning support (Coming Soon).
- **🛡️ Secure:** Row Level Security (RLS) enabled by default.

## 🛠️ Developer Guide

### 1. Project Rules & Philosophy
Please read [RULES.md](./RULES.md) before contributing.
- **Mobile First:** Always test on mobile viewports.
- **Strict Typing:** No `any`. Zod everything.

### 2. Architecture
- **Database:** See [Schema Design](.antigravity/architecture/database-schema.md).
- **Libraries:** See [Complex Usage Patterns](.antigravity/knowledge/complex-lib-usage.md).

### 3. How-To (Skills)
We use standardized "Skills" for common tasks. Check `.antigravity/skills/` for details.

| Task | Guide | Command Idea |
| :--- | :--- | :--- |
| **New Feature** | [create-feature](.antigravity/skills/create-feature/SKILL.md) | "Create a Report feature" |
| **DB Change** | [database-migration](.antigravity/skills/database-migration/SKILL.md) | "Add a customers table" |
| **New UI** | [ui-component](.antigravity/skills/ui-component/SKILL.md) | "Create a Card component" |

## 📦 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Setup Environment**
   Copy `.env.example` to `.env.local` and add your Supabase keys.

3. **Run Development Server**
   ```bash
   npm run dev
   ```