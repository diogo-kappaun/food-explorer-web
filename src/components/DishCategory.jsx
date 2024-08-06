import { useNavigate } from 'react-router-dom'
import { useFavorites } from '../hooks/favorites'

import { Card } from '../components/Card'
import { Slider } from '../components/Embla/Slider'

import * as Dish from '../components/Dish'

export function DishCategory({ favorites, categories }) {
  const { toggle } = useFavorites()
  const navigate = useNavigate()

  const categoriesNames = {
    combos: 'Combos',
    burgers: 'Burgers',
    sobremesas: 'Sobremesas',
    bebidas: 'Bebidas',
  }

  function handleUpdate(id) {
    navigate(`/dish/update/${id}`)
  }

  function handleDetails(id) {
    navigate(`/dish/details/${id}`)
  }

  async function handleFavorite(id) {
    await toggle({ dishId: id })
  }
  console.log(categoriesNames[categories.category])
  return (
    <Dish.Root>
      <Dish.Title>{categoriesNames[categories.category]}</Dish.Title>
      <Slider>
        {categories.items.map((dish) => {
          return (
            <div key={dish.id} className="pl-4">
              <Card
                data={dish}
                isFavorite={favorites.find((fav) => fav.id === dish.id)}
                onFavorite={() => handleFavorite(dish.id)}
                onDetails={() => handleDetails(dish.id)}
                onUpdate={() => handleUpdate(dish.id)}
              />
            </div>
          )
        })}
      </Slider>
    </Dish.Root>
  )
}
