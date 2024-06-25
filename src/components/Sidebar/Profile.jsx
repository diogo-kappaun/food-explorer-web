import { PiSignOut } from 'react-icons/pi'
import { Button } from '../Button'

import { useAuth } from '../../hooks/auth'

export function Profile() {
  const { user, signOut } = useAuth()

  const fullname = user.name.split(' ')
  const name = fullname[0]
  const lastname = fullname[fullname.length - 1]

  const [email] = user.email.split('@')

  return (
    <div className="mt-2 grid w-full grid-cols-profile items-center gap-4 self-end">
      <img
        src="https://res.cloudinary.com/diogofoodexplorer/image/upload/uvqn1v3i8jfxv7xkhbnd"
        alt="Foto de Diogo Kappaun"
        className="h-10 w-10 rounded-full"
      />

      <div className="pointer-events-none flex flex-col truncate">
        <div className="flex gap-1 truncate text-sm font-semibold">
          <span>{name}</span>
          <span className="hidden sm:inline">{lastname}</span>
        </div>
        <span className="truncate text-sm text-muted-foreground">{email}</span>
      </div>

      <Button
        onClick={signOut}
        variant="ghost"
        className="p-2 hover:bg-muted/20"
      >
        <PiSignOut size={20} className="text-muted-foreground" />
      </Button>
    </div>
  )
}
