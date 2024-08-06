import { Route, Routes } from 'react-router-dom'

import { useAuth } from '../hooks/auth'

import { DishDetails } from '../pages/DishDetails'
import { DishUpdate } from '../pages/DishUpdate'
import { Home } from '../pages/Home'
import { NewDish } from '../pages/NewDish'
import { Settings } from '../pages/Settings'

export function AdminRoutes() {
  const { validateToken } = useAuth()

  validateToken()

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/dish/new" element={<NewDish />} />
      <Route path="/dish/update/:id" element={<DishUpdate />} />
      <Route path="/dish/details/:id" element={<DishDetails />} />
    </Routes>
  )
}
