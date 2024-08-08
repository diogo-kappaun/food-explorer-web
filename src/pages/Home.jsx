import { useEffect, useState } from 'react'

import { useFavorites } from '../hooks/favorites'
import { useDebounce } from '../hooks/useDebounce'
import { useFetch } from '../hooks/useFetch'

import { Container } from '../components/Container'
import { DishCategory } from '../components/DishCategory'
import { Header } from '../components/Header'
import { Loading } from '../components/Loading'
import { Section } from '../components/Section'
import { Separator } from '../components/Separator'
import { Sidebar } from '../components/Sidebar'

export function Home() {
  const { data } = useFetch(`dishes`)
  const { favorites } = useFavorites()

  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 300)

  const [favoriteList, setFavoriteList] = useState([])
  const [dishes, setDishes] = useState([])

  function filterDishes(search, dishes) {
    const filteredByName = dishes.filter(
      (dish) => dish.name.toLowerCase().indexOf(search.toLowerCase()) > -1,
    )

    const filteredByCategory = dishes.filter(
      (dish) => dish.category.toLowerCase().indexOf(search.toLowerCase()) > -1,
    )

    const filteredByIngredient = dishes.filter((dish) => {
      return dish.ingredients.find(
        (ingredient) =>
          ingredient.toLowerCase().indexOf(search.toLowerCase()) > -1,
      )
    })

    const combinedFiltered = [
      ...filteredByName,
      ...filteredByCategory,
      ...filteredByIngredient,
    ]

    const filteredDishes = Array.from(
      new Set(combinedFiltered.map((dish) => JSON.stringify(dish))),
    ).map((dish) => JSON.parse(dish))

    return filteredDishes
  }

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

    if (debouncedSearch) {
      const filteredDishes = filterDishes(debouncedSearch, data)
      const filteredDishCategories = filterDishCategory(filteredDishes)
      setDishes(filteredDishCategories)
      return
    }

    const filteredDishCategories = filterDishCategory(data)
    setDishes(filteredDishCategories)
    setFavoriteList(favorites)
  }, [data, favorites, debouncedSearch])

  return (
    <>
      {Boolean(data) || <Loading />}
      <Container isLoading={Boolean(!data)}>
        <Header inputOn setSearch={setSearch} value={search} />
        <Sidebar inputOn setSearch={setSearch} value={search} />

        <Section>
          <div className="relative flex h-[100px] items-center justify-center rounded-md bg-[url('/src/assets/banner.png')] bg-cover bg-center shadow-sm lg:h-[132px]">
            <div className="absolute h-[66px] w-[159px] bg-[url('/src/assets/logo.png')] bg-contain bg-center bg-no-repeat lg:h-[88px] lg:w-[212px]"></div>
          </div>

          <Separator />

          {dishes &&
            Object.values(dishes).map((categories) => {
              if (categories.items.length < 1) {
                return null
              }

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
    </>
  )
}
