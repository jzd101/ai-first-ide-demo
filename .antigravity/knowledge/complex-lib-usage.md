# 📚 Complex Library Usage Guide

## 1. State Management Strategy

### When to use what?
| State Type | Library | Example |
| :--- | :--- | :--- |
| **Server State** | **TanStack Query** | Products list, Order history, User profile |
| **Client State** | **Zustand** | Shopping Cart, QR Scanner Status, Sidebar Toggle |
| **Form State** | **React Hook Form** | Login form, Add product form |
| **URL State** | **Next.js SearchParams** | Filters, Pagination, Sorting |

---

## 2. TanStack Query + Server Actions (The "Zero Latency" Pattern)
To achieve the "Speed is a Feature" rule, we use `useMutation` with `onMutate` to update the UI *before* the server responds.

### Pattern: Optimistic Mutation
```tsx
const { mutate } = useMutation({
  mutationFn: async (newItem) => {
    // 1. Call Server Action
    const result = await createItemAction(newItem);
    if (result.error) throw new Error(result.error);
    return result.data;
  },
  onMutate: async (newItem) => {
    // 2. Cancel outgoing refetches
    await queryClient.cancelQueries({ queryKey: ['items'] });
    
    // 3. Snapshot previous value
    const previousItems = queryClient.getQueryData(['items']);
    
    // 4. Optimistically update to new value
    queryClient.setQueryData(['items'], (old) => [...old, { ...newItem, id: 'temp-id' }]);
    
    return { previousItems };
  },
  onError: (err, newItem, context) => {
    // 5. Rollback on error
    queryClient.setQueryData(['items'], context.previousItems);
    toast.error('Failed to create item');
  },
  onSettled: () => {
    // 6. Refetch to sync with server
    queryClient.invalidateQueries({ queryKey: ['items'] });
  },
});
```

---

## 3. Zustand (Global Client Stores)
For complex client-side features like the "Cart" (POS system), efficient updates are key.

### Pattern: The "Slice" Pattern (for scaling)
Although we might start small, using slices helps organized code.

```typescript
// store/useCartStore.ts
export const useCartStore = create((set) => ({
  cart: [],
  addItem: (item) => set((state) => ({ cart: [...state.cart, item] })),
  removeItem: (id) => set((state) => ({ cart: state.cart.filter(i => i.id !== id) })),
  total: 0, // Calculated derived state can be selectors
}));
```

---

## 4. Supabase & Offline Support
Since we need "Offline Capable", we must handle connection drops.

### Pattern: Network Mode
TanStack Query has built-in offline support.
```tsx
// providers.tsx
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      networkMode: 'offlineFirst', // Serve cache if offline
      staleTime: 1000 * 60 * 5, // Data is fresh for 5 mins
    },
    mutations: {
      networkMode: 'offlineFirst', // Queue mutations (requires persist plugin for true offline)
    },
  },
});
```
*Note: For true offline mutations, we will later integrate `persistQueryClient`.*

---

## 5. Next.js 15 Server Actions
Server actions should be "Thin Layouts" around business logic.

### Pattern: Action Wrapper
```typescript
// features/inventory/actions.ts
'use server'

import { createClient } from '@/lib/supabase/server';

export async function createProduct(formData: FormData) {
  const supabase = createClient();
  // 1. Validate Input (Zod)
  const parsed = schema.safeParse(formData);
  if (!parsed.success) return { error: 'Invalid data' };

  // 2. DB Operation
  const { data, error } = await supabase.from('products').insert(parsed.data);

  // 3. Return standardized response
  if (error) return { success: false, error: error.message };
  return { success: true, data };
}
```
