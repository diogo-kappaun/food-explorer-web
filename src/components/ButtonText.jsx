import { twMerge } from 'tailwind-merge'

import { Link } from 'react-router-dom'

export function ButtonText({ className, ...props }) {
  return (
    <Link
      {...props}
      className={twMerge(
        'rounded-md text-sm font-medium text-primary transition-colors hover:text-primary/90',
        className,
      )}
    />
  )
}
