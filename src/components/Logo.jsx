import { useAuth } from '../hooks/auth'
import { USER_ROLE } from '../utils/roles'

import { twMerge } from 'tailwind-merge'

import LogoImage from '../assets/logo.svg'

export function Logo({ className, props }) {
  const { role } = useAuth()
  return (
    <div
      className={twMerge(
        'flex items-center gap-2 lg:absolute lg:left-[72px] lg:w-6',
        className,
      )}
      {...props}
    >
      <img src={LogoImage} alt="logo" />

      {role === USER_ROLE.ADMIN && (
        <span className="text-base font-normal text-foreground">Admin</span>
      )}
    </div>
  )
}
