import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { NewDish } from '../pages/NewDish'
import { Settings } from '../pages/Settings'

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/newdish" element={<NewDish />} />
    </Routes>
  )
}
