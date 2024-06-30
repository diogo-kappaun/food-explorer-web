import { twMerge } from 'tailwind-merge'

import { Link } from 'react-router-dom'

export function ButtonText(props) {
  return (
    <Link
      {...props}
      className={twMerge(
        'hover:underline" text-sm font-medium text-primary transition-colors hover:text-primary/90',
        props.className,
      )}
    />
  )
}
