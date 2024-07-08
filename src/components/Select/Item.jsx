import * as SelectPrimitive from '@radix-ui/react-select'
import { PiCheck } from 'react-icons/pi'

export function SelectItem({ text, ...props }) {
  return (
    <SelectPrimitive.Item
      {...props}
      className="flex items-center justify-between px-3 py-1 outline-none data-[highlighted]:bg-accent"
    >
      <SelectPrimitive.ItemText asChild>
        <span>{text}</span>
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator>
        <PiCheck size={16} className="text-primary" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}
