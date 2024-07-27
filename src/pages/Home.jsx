import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useFavorites } from '../hooks/favorites'
import { useFetch } from '../hooks/useFetch'

import { Card } from '../components/Card'
import { Container } from '../components/Container'
import { Slider } from '../components/Embla/Slider'
import { Header } from '../components/Header'
import { Section } from '../components/Section'
import { Separator } from '../components/Separator'
import { Sidebar } from '../components/Sidebar'

import * as Dish from '../components/Dish'

export function Home() {
  const { data } = useFetch('dishes')
  const { favorites, toggle } = useFavorites()

  const [favoriteList, setFavoriteList] = useState([])

  const navigate = useNavigate()

  function handleUpdate(id) {
    navigate(`/dish/update/${id}`)
  }

  async function handleFavorite(id) {
    await toggle({ dishId: id })
  }

  useEffect(() => {
    setFavoriteList(favorites)
  }, [favorites])

  if (!data) {
    return <p>Carregando!</p>
  }

  return (
    <Container>
      <Header />
      <Sidebar />

      <Section>
        <div className="relative flex h-[100px] items-center justify-center rounded-md bg-[url('/src/assets/banner.jpg')] bg-cover bg-center shadow-sm lg:h-[132px]">
          <div className="absolute h-[66px] w-[159px] bg-[url('/src/assets/logo.png')] bg-contain bg-center bg-no-repeat lg:h-[88px] lg:w-[212px]"></div>
        </div>

        <Separator />

        <Dish.Root>
          <Dish.Title>Refeições</Dish.Title>
          <Slider>
            {data.map((dish) => {
              return (
                <div key={dish.id} className="pl-4">
                  <Card
                    data={dish}
                    isFavorite={favoriteList.find((fav) => fav.id === dish.id)}
                    onFavorite={() => handleFavorite(dish.id)}
                    onUpdate={() => handleUpdate(dish.id)}
                  />
                </div>
              )
            })}
          </Slider>
        </Dish.Root>
      </Section>
    </Container>
  )
}
