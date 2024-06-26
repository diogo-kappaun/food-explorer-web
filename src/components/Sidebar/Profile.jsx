import { PiSignOut } from 'react-icons/pi'

import { useAuth } from '../../hooks/auth'

import placeholder from '../../assets/placeholder.png'
import { ButtonText } from '../ButtonText'

export function Profile({ state }) {
  const { user, signOut } = useAuth()

  const avatarUrl = user.avatar_id
    ? `https://res.cloudinary.com/diogofoodexplorer/image/upload/${
        user.avatar_id
      }`
    : `${placeholder}`

  const fullname = user.name.split(' ')
  const name = fullname[0]
  const lastname = fullname.length !== 1 ? fullname[fullname.length - 1] : ''

  const [email] = user.email.split('@')

  return (
    <div className="mt-2 grid w-full grid-cols-profile items-center gap-4 self-end lg:flex">
      <img
        src={avatarUrl}
        alt={`Foto de ${user.name}`}
        className="h-10 w-10 rounded-full bg-background"
      />

      <div
        className={`pointer-events-none flex w-full flex-col truncate ${state ? 'flex' : 'hidden'}`}
      >
        <div className="flex gap-1 truncate text-sm font-semibold">
          <span>{name}</span>
          <span className="hidden sm:inline">{lastname}</span>
        </div>
        <span className="truncate text-sm text-muted-foreground">{email}</span>
      </div>

      <ButtonText
        onClick={signOut}
        to="/"
        className={`p-2 hover:bg-muted/20 ${state ? 'flex' : 'hidden'}`}
      >
        <PiSignOut size={20} className="text-muted-foreground" />
      </ButtonText>
    </div>
  )
}
