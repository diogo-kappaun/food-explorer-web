import { PiStarFill } from 'react-icons/pi'

import { Button } from './Button'

export function FavoriteCard({ data, onFavorite, onDetails }) {
  return (
    <div className="relative">
      <Button
        onClick={onFavorite}
        className="absolute right-2 top-2 z-10"
        variant="ghost"
      >
        <PiStarFill size={20} className="text-primary" />
      </Button>

      <div
        className="flex w-full items-center gap-3 rounded-md border bg-card p-4 shadow-sm"
        onClick={onDetails}
      >
        <img
          className="h-[76px] w-[76px] rounded-full border shadow-sm lg:h-[106px] lg:w-[106px]"
          src={`https://res.cloudinary.com/diogofoodexplorer/image/upload/c_fill,w_400,ar_1:1/${data.image_id}`}
          alt={`Imagem de ${data.name}`}
        />
        <div className="space-y-3">
          <h2 className="text-sm lg:text-base">{data.name}</h2>
          <p className="line-clamp-2 text-xs text-muted-foreground lg:text-sm">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  )
}
