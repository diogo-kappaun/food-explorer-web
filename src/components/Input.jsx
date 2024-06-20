import { twMerge } from 'tailwind-merge'

export function Prefix(props) {
  return (
    <div
      {...props}
      className={(twMerge('text-muted-foreground'), props.className)}
    />
  )
}

export function Control(props) {
  return (
    <input
      {...props}
      className="w-full flex-1 bg-transparent placeholder-muted-foreground outline-none"
    />
  )
}

export function Root(props) {
  return (
    <div
      {...props}
      className={twMerge(
        'flex h-10 w-full items-center gap-2 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm',
        'focus-within:ring-1 focus-within:ring-ring',
      )}
    />
  )
}
