import { useEffect, useState } from 'react'
import {
  PiMinus,
  PiPlus,
  PiShoppingCart,
  PiStar,
  PiStarFill,
} from 'react-icons/pi'

import { toast } from 'sonner'

import { Button } from './Button'

export function Card({
  url,
  title,
  description,
  priceInCents,
  isFavorite = false,
  onClick,
}) {
  const [amount, setAmount] = useState(1)
  const [price, setPrice] = useState(priceInCents)
  const [newPrice, setNewPrice] = useState('')

  function addAmount() {
    if (amount >= 20) {
      return toast.error('Você atingiu a quantidade máxima permitida.', {
        description: '👉🏻 A quantidade máxima permitida é de 20 pratos.',
      })
    }
    setAmount(amount + 1)
    setPrice(priceInCents * (amount + 1))
  }

  function deductAmount() {
    if (amount <= 1) {
      return toast.error('Você atingiu a quantidade mínima permitida.', {
        description: '👉🏻 A quantidade mínima permitida é de 1 prato.',
      })
    }
    setAmount(amount - 1)
    setPrice(priceInCents * (amount - 1))
  }

  function formatPrice(priceInCents) {
    const pricePerHundred = priceInCents / 100

    const decimalPrice = pricePerHundred.toFixed(2).toString().replace('.', ',')

    const thousandPrice = decimalPrice.replace(/\B(?=(\d{3})+(?!\d))/g, '.')

    const formattedPrice = `R$ ${thousandPrice}`

    setNewPrice(formattedPrice)
  }

  useEffect(() => {
    formatPrice(price)
  }, [price])

  return (
    <div className="relative flex h-[300px] w-[200px] flex-col items-center justify-between rounded-md border bg-card p-6 lg:h-[400px] lg:min-w-[260px]">
      {isFavorite ? (
        <PiStarFill size={20} className="absolute right-2 top-2 text-primary" />
      ) : (
        <PiStar size={20} className="absolute right-2 top-2 text-primary" />
      )}
      <img
        className="h-[96px] rounded-full border shadow-sm lg:h-[146px]"
        src={`https://res.cloudinary.com/diogofoodexplorer/image/upload/w_176/${url}`}
        alt={`Imagem de ${title}`}
      />
      <h3 className="text-center text-sm font-semibold lg:text-base">
        {title}
      </h3>
      <p className="hidden text-center text-sm lg:block">{description}</p>
      <span className="text-center text-sm lg:text-base">{newPrice}</span>
      <div className="flex w-full flex-col gap-2 lg:flex-row">
        <div className="flex items-center justify-center gap-3">
          <Button onClick={deductAmount} className="px-3 py-2" variant="ghost">
            <PiMinus size={16} className="text-muted-foreground" />
          </Button>
          <span className="w-4 text-center text-sm lg:text-base">{amount}</span>
          <Button onClick={addAmount} className="px-3 py-2" variant="ghost">
            <PiPlus size={16} className="text-muted-foreground" />
          </Button>
        </div>
        <Button className="flex justify-center">
          <PiShoppingCart size={18} />
        </Button>
      </div>
    </div>
  )
}
