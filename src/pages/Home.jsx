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
  const [search, setSearch] = useState('')
  const { data } = useFetch(`dishes`)
  const { favorites } = useFavorites()

  const [favoriteList, setFavoriteList] = useState([])

  const [dishes, setDishes] = useState([])

  function filterDishCategory(dishes) {
    return dishes.reduce(
      (acc, item) => {
        const category = item.category
        if (!acc[category]) {
          acc[category] = {
            category,
            items: [],
          }
        }
        acc[category].items.push(item)
        return acc
      },
      {
        combo: {
          category: 'combo',
          items: [],
        },
      },
    )
  }

  useEffect(() => {
    if (!data || !favorites) {
      return
    }

    const filteredDishCategories = filterDishCategory(data)
    setDishes(filteredDishCategories)
    setFavoriteList(favorites)
  }, [data, favorites])

  if (!data) {
    return <p>Carregando!</p>
  }

  return (
    <Container>
      <Header inputOn setSearch={setSearch} value={search} />
      <Sidebar inputOn setSearch={setSearch} value={search} />

      <Section>
        <div className="relative flex h-[100px] items-center justify-center rounded-md bg-[url('/src/assets/banner.jpg')] bg-cover bg-center shadow-sm lg:h-[132px]">
          <div className="absolute h-[66px] w-[159px] bg-[url('/src/assets/logo.png')] bg-contain bg-center bg-no-repeat lg:h-[88px] lg:w-[212px]"></div>
        </div>

        <Separator />

        {dishes &&
          Object.values(dishes).map((categories) => {
            return (
              <DishCategory
                key={categories.category}
                favorites={favoriteList}
                categories={categories}
              />
            )
          })}
      </Section>
    </Container>
  )
}
