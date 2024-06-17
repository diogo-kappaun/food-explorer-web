import { twMerge } from 'tailwind-merge'
import { tv } from 'tailwind-variants'

export function Button({ variant = 'primary', ...props }) {
  const button = tv({
    base: [
      'rounded-md text-sm font-medium ',
      'transition-colors disabled:pointer-events-none disabled:opacity-50',
    ],

    variants: {
      variant: {
        primary:
          'hover:bg-primary/90 h-9 w-full px-4 py-2 bg-primary text-primary-foreground shadow',
        ghost: '',
      },
    },
  })

  return (
    <button
      {...props}
      className={twMerge(button({ variant }), props.className)}
    />
  )
}
