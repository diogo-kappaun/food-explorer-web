import { PiArrowsOutLineVertical } from 'react-icons/pi'

import * as SelectPrimitive from '@radix-ui/react-select'

export function Select({ children, placeholder, ...props }) {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger
        aria-label="Temas"
        className="flex h-10 w-48 items-center justify-between gap-4 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm outline-none focus:ring-1 focus:ring-ring"
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon>
          <PiArrowsOutLineVertical
            size={20}
            className="text-muted-foreground"
          />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          className="z-10 max-h-[--radix-select-content-available-height] w-[--radix-select-trigger-width] cursor-pointer overflow-hidden rounded-md border border-input bg-background text-sm shadow-sm"
          sideOffset={8}
        >
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
