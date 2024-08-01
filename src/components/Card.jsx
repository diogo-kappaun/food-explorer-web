import { PiPencil, PiStar, PiStarFill } from 'react-icons/pi'

import { useAuth } from '../hooks/auth'
import { USER_ROLE } from '../utils/roles'

import { Button } from './Button'

export function Card({ data, isFavorite, onUpdate, onFavorite, onDetails }) {
  const { role } = useAuth()

  return (
    <div className="relative">
      <div className="absolute right-2 top-2 z-10 text-primary">
        {role === USER_ROLE.ADMIN ? (
          <Button onClick={onUpdate} variant="ghost">
            <PiPencil size={20} />
          </Button>
        ) : isFavorite ? (
          <Button onClick={onFavorite} variant="ghost">
            <PiStarFill size={20} />
          </Button>
        ) : (
          <Button variant="ghost">
            <PiStar onClick={onFavorite} size={20} />
          </Button>
        )}
      </div>

      <div
        className="flex h-[300px] w-[200px] cursor-pointer flex-col items-center justify-between rounded-md border bg-card p-6 shadow-sm lg:h-[400px] lg:min-w-[260px]"
        onClick={onDetails}
      >
        <img
          className="h-[96px] w-[96px] rounded-full border shadow-sm lg:h-[146px] lg:w-[146px]"
          src={`https://res.cloudinary.com/diogofoodexplorer/image/upload/c_fill,w_400,ar_1:1/${data.image_id}`}
          alt={`Imagem de ${data.name}`}
        />
        <h3 className="text-center text-sm font-semibold lg:text-base">
          {data.name}
        </h3>
        <p className="line-clamp-2 text-center text-xs text-muted-foreground lg:text-sm">
          {data.description}
        </p>
        <span className="text-center text-sm lg:text-base">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(data.price)}
        </span>
      </div>
    </div>
  )
}
