import { twMerge } from 'tailwind-merge'

export function Separator({ className }) {
  return <div className={twMerge('w-full border-t', className)}></div>
}
