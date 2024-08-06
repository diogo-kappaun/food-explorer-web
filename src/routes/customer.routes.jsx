import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { useAuth } from '../hooks/auth'

import { DishDetails } from '../pages/DishDetails'
import { Favorites } from '../pages/Favorites'
import { Home } from '../pages/Home'
import { Settings } from '../pages/Settings'

export function CustomerRoutes() {
  const { validateToken } = useAuth()

  useEffect(() => {
    validateToken()
  }, [validateToken])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/dish/details/:id" element={<DishDetails />} />
    </Routes>
  )
}
