---
name: ui-component
description: Guide for creating reusable UI components
---

# UI Component Skill

Use this skill when creating generic UI elements (buttons, inputs, cards) in `src/components/ui`.

## 1. Design System (Mobile First)
- **Touch Targets:** Buttons/Inputs must be at least 44px height.
  - Class: `h-11` or `h-12` (Tailwind).
- **Font Size:** Base font size should be at least 16px to prevent iOS zoom.
  - Class: `text-base` or `text-lg`.

## 2. Tech Stack
- **Library:** Radix UI (Primitives) + Tailwind CSS.
- **Styling:** Use `cn()` utility for class merging.
  ```typescript
  import { cn } from "@/lib/utils"
  // ...
  className={cn("base-classes", className)}
  ```

## 3. Structure
- Place under `src/components/ui/[name].tsx`.
- Export directly from the file.

### Example Template
```tsx
import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={cn("h-11 rounded-md px-4 active:scale-95 transition-transform", className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
```

## 4. Checklist
- [ ] Supports `className` prop override.
- [ ] Uses `forwardRef`.
- [ ] Mobile-friendly sizing (height >= 44px).
- [ ] Accessible (aria attributes if needed).
