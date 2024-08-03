import { useEffect, useState } from 'react'

import { useFavorites } from '../hooks/favorites'
import { useFetch } from '../hooks/useFetch'

import { Container } from '../components/Container'
import { DishCategory } from '../components/DishCategory'
import { Header } from '../components/Header'
import { Section } from '../components/Section'
import { Separator } from '../components/Separator'
import { Sidebar } from '../components/Sidebar'

export function Home() {
  const { data } = useFetch('dishes')
  const { favorites } = useFavorites()

  const [favoriteList, setFavoriteList] = useState([])

  const [combos, setCombos] = useState([])
  const [burgers, setBurgers] = useState([])
  const [desserts, setDesserts] = useState([])
  const [drinks, setDrinks] = useState([])

  function filterDishCategory(dishes) {
    const combos = dishes.filter((dish) => dish.category === 'combo')
    const burgers = dishes.filter((dish) => dish.category === 'burger')
    const desserts = dishes.filter((dish) => dish.category === 'dessert')
    const drinks = dishes.filter((dish) => dish.category === 'drink')

    setCombos(combos)
    setBurgers(burgers)
    setDesserts(desserts)
    setDrinks(drinks)
  }

  useEffect(() => {
    setFavoriteList(favorites)
  }, [favorites])

  useEffect(() => {
    if (!data) {
      return
    }

    filterDishCategory(data)
  }, [data])

  if (!data) {
    return <p>Carregando!</p>
  }

  return (
    <Container>
      <Header inputOn />
      <Sidebar inputOn />

      <Section>
        <div className="relative flex h-[100px] items-center justify-center rounded-md bg-[url('/src/assets/banner.jpg')] bg-cover bg-center shadow-sm lg:h-[132px]">
          <div className="absolute h-[66px] w-[159px] bg-[url('/src/assets/logo.png')] bg-contain bg-center bg-no-repeat lg:h-[88px] lg:w-[212px]"></div>
        </div>

        <Separator />

        {combos.length > 0 && (
          <DishCategory
            title="Combos"
            favorites={favoriteList}
            category={combos}
          />
        )}

        {burgers.length > 0 && (
          <DishCategory
            title="Burgers"
            favorites={favoriteList}
            category={burgers}
          />
        )}

        {desserts.length > 0 && (
          <DishCategory
            title="Sobremesa"
            favorites={favoriteList}
            category={desserts}
          />
        )}

        {drinks.length > 0 && (
          <DishCategory
            title="Bebidas"
            favorites={favoriteList}
            category={drinks}
          />
        )}
      </Section>
    </Container>
  )
}
