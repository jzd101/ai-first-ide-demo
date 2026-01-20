---
name: create-feature
description: Guide for creating new business features (e.g., Inventory, Sales)
---

# Create Feature Skill

Use this skill when the user asks to "create a feature" or "add a new module" (e.g., "Add a Report feature").

## 1. Feature Structure
Always create a new directory in `src/features/[name]` with the following structure:
```
src/features/[name]/
  ├── components/    # Feature-specific UI
  ├── hooks/         # Custom hooks (logic)
  ├── actions/       # Server Actions (mutations)
  ├── types/         # TypeScript interfaces
  └── index.ts       # Public API (exports)
```

## 2. Implementation Rules

### A. Server Actions (Mutations)
- File: `actions/filename.ts`
- Must use `'use server'` at the top.
- Must return a standard response object:
  ```typescript
  type ActionResponse<T> = {
    success: boolean;
    data?: T;
    error?: string;
  };
  ```
- Must use `Zod` for input validation.

### B. Data Fetching (Queries)
- Use **TanStack Query** in client components.
- Use `useQuery` for fetching data.
- **NEVER** use `useEffect` for data fetching.

### C. Optimistic Updates
- When creating/updating data, ALWAYS implement optimistic updates in `useMutation`.
- Refer to `.antigravity/knowledge/complex-lib-usage.md` for the "Zero Latency" pattern.

## 3. Checklist
- [ ] Created directory structure.
- [ ] Defined Types in `types/index.ts`.
- [ ] Created Server Actions with Zod validation.
- [ ] Created React Query hooks in `hooks/use[Feature].ts`.
- [ ] Built UI Components in `components/`.
- [ ] Exported public components in `index.ts`.
