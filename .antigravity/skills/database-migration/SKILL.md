---
name: database-migration
description: Guide for database schema changes and migrations
---

# Database Migration Skill

Use this skill when the user asks to "change the database", "add a table", or "modify schema".

## 1. Workflow
1.  **Analyze:** detailed in `database-schema.md`? If not, propose changes to `database-schema.md` first.
2.  **Migration File:** Create a Supabase migration file.
3.  **Apply:** Run migration (if applicable) or instruct user.

## 2. Supabase Migration Rules
- File location: `supabase/migrations/[timestamp]_description.sql`
- **Naming:** use `YYYYMMDDHHMMSS_description.sql`.

### A. Safety First
- Always check if table/column exists before creating.
  ```sql
  create table if not exists ...
  ```

### B. Row Level Security (RLS)
- **ALWAYS** enable RLS on new tables:
  ```sql
  alter table "public"."table_name" enable row level security;
  ```
- Add a default policy for authenticated users:
  ```sql
  create policy "Enable access for auth users"
  on "public"."table_name"
  as permissive
  for all
  to authenticated
  using (true);
  ```

### C. Performance
- Create indexes for foreign keys and searched columns (like `barcode`).
  ```sql
  create index if not exists table_column_idx on table_name (column_name);
  ```

## 3. Checklist
- [ ] Updated `database-schema.md`.
- [ ] Created migration file in `supabase/migrations/`.
- [ ] Enabled RLS.
- [ ] Added Indexes.
