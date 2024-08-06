import { createContext, useContext, useEffect, useState } from 'react'

import { api } from '../services/api'

export const FavoriteContext = createContext()

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([])

  async function getFavorites() {
    try {
      const { data } = await api.get('/favorites')
      setFavorites(data.favorites)
    } catch (error) {}
  }

  async function toggle({ dishId }) {
    const { data } = await api.post(`favorites?dish_id=${dishId}`)

    setFavorites(data)
  }

  useEffect(() => {
    getFavorites()
  }, [])

  return (
    <FavoriteContext.Provider value={{ favorites, toggle }}>
      {children}
    </FavoriteContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoriteContext)

  return context
}
