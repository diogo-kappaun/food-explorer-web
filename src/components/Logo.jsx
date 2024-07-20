import { useAuth } from '../hooks/auth'
import { USER_ROLE } from '../utils/roles'

import { twMerge } from 'tailwind-merge'

import LogoImage from '../assets/logo.svg'

export function Logo({ className, props }) {
  const { role } = useAuth()
  return (
    <div className={twMerge('flex items-center gap-2 lg:w-6', className)}>
      <img src={LogoImage} alt="logo" {...props} />

      {role === USER_ROLE.ADMIN && (
        <span className="font-bold text-foreground">ADMIN</span>
      )}
    </div>
  )
}
