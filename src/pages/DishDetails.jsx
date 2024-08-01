import { useEffect, useState } from 'react'
import { PiStar, PiStarFill } from 'react-icons/pi'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'

import { useFavorites } from '../hooks/favorites'
import { useFetch } from '../hooks/useFetch'

import { AmountControl } from '../components/AmountControl'
import { BackButton } from '../components/BackButton'
import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Section } from '../components/Section'
import { Sidebar } from '../components/Sidebar'

export function DishDetails() {
  const { favorites, toggle } = useFavorites()
  const { id } = useParams()
  const { data } = useFetch(`dishes/${id}`)

  const [amount, setAmount] = useState(1)

  const [favoriteList, setFavoriteList] = useState([])

  useEffect(() => {
    setFavoriteList(favorites)
  }, [favorites])

  if (!data) {
    return
  }

  async function handleFavorite(id) {
    await toggle({ dishId: id })
  }

  function increaseAmount() {
    if (amount >= 20) {
      return toast.error('Você atingiu a quantidade máxima permitida.', {
        description: '👉🏻 A quantidade máxima permitida é de 20 pratos.',
      })
    }
    setAmount((prevState) => prevState + 1)
  }

  function decreaseAmount() {
    if (amount <= 1) {
      return toast.error('Você atingiu a quantidade mínima permitida.', {
        description: '👉🏻 A quantidade mínima permitida é de 1 prato.',
      })
    }
    setAmount((prevState) => prevState - 1)
  }

  return (
    <Container>
      <Header />
      <Sidebar />

      <Section>
        <div className="flex justify-between">
          <BackButton />

          <Button onClick={() => handleFavorite(data.id)} variant="ghost">
            {favoriteList.find((fav) => fav.id === data.id) ? (
              <PiStarFill size={20} className="text-primary" />
            ) : (
              <PiStar size={20} className="text-primary" />
            )}
          </Button>
        </div>

        <div className="mx-auto flex h-[calc(100%-62px)] max-w-[400px] flex-col items-center justify-center gap-6 pb-6 text-sm lg:max-w-max lg:flex-row lg:text-base">
          <img
            className="h-[148px] w-[148px] rounded-full border shadow-sm lg:h-[240px] lg:w-[240px]"
            src={`https://res.cloudinary.com/diogofoodexplorer/image/upload/c_fill,w_400,ar_1:1/${data.image_id}`}
            alt={`Imagem de ${data.name}`}
          />

          <div className="flex flex-col items-center space-y-6 text-center lg:items-start lg:text-start">
            <h2 className="text-xl font-bold lg:text-2xl">{data.name}</h2>
            <p className="max-w-[400px] text-center lg:text-start">
              {data.description}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-sm lg:justify-start">
              {data.ingredients.map((ingredient, index) => (
                <span key={index} className="rounded-md border px-2 py-1">
                  {ingredient}
                </span>
              ))}
            </div>

            <span className="text-center">
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(data.price * amount)}
            </span>

            <AmountControl
              amount={amount}
              onIncrease={increaseAmount}
              onDescrease={decreaseAmount}
            />
          </div>
        </div>
      </Section>
    </Container>
  )
}