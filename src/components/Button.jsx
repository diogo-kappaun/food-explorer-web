import { twMerge } from 'tailwind-merge'

export function Button(props) {
  return (
    <button
      {...props}
      className={twMerge(
        'h-9 w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50',
        props.className,
      )}
    />
  )
}
