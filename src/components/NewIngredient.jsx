import { PiX } from 'react-icons/pi'

export function NewIngredient({ value, onClick, key }) {
  return (
    <div
      className="flex h-10 flex-wrap items-center justify-start gap-3 rounded-md border border-input px-3 py-1 text-sm shadow-sm"
      key={key}
    >
      <span>{value}</span>
      <PiX className="cursor-pointer" onClick={onClick} />
    </div>
  )
}
