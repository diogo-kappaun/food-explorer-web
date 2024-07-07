import { twMerge } from 'tailwind-merge'

export function Prefix(props) {
  return <div {...props} className="text-muted-foreground" />
}

export function Control({ className, ...props }) {
  return (
    <input
      {...props}
      className={twMerge(
        'w-full flex-1 bg-transparent placeholder-muted-foreground outline-none',
        className,
      )}
    />
  )
}

export function Root({ className, ...props }) {
  return (
    <div
      {...props}
      className={twMerge(
        'flex h-10 w-full items-center gap-2 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm',
        'focus-within:ring-1 focus-within:ring-ring',
        className,
      )}
    />
  )
}
