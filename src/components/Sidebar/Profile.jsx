import { PiSignOut } from 'react-icons/pi'

import { Button } from '../Button'

import { useAuth } from '../../hooks/auth'

import placeholder from '../../assets/placeholder.png'

export function Profile({ state }) {
  const { user, signOut } = useAuth()

  const fullname = user.name.split(' ')
  const name = fullname[0]
  const lastname = fullname[fullname.length - 1]

  const [email] = user.email.split('@')

  console.log(user.avatar_id)

  return (
    <div className="bg- mt-2 grid w-full grid-cols-profile items-center gap-4 self-end lg:flex lg:justify-center">
      <img
        src={
          user.avatar_id
            ? `https://res.cloudinary.com/diogofoodexplorer/image/upload/${
                user.avatar_id
              }`
            : `${placeholder}`
        }
        alt="Foto de Diogo Kappaun"
        className="h-10 w-10 rounded-full bg-background"
      />

      <div
        className={`pointer-events-none flex flex-col truncate ${state ? 'flex' : 'hidden'}`}
      >
        <div className="flex gap-1 truncate text-sm font-semibold">
          <span>{name}</span>
          <span className="hidden sm:inline">{lastname}</span>
        </div>
        <span className="truncate text-sm text-muted-foreground">{email}</span>
      </div>

      <Button
        onClick={signOut}
        variant="ghost"
        className={`p-2 hover:bg-muted/20 ${state ? 'flex' : 'hidden'}`}
      >
        <PiSignOut size={20} className="text-muted-foreground" />
      </Button>
    </div>
  )
}
