import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Settings } from '../pages/Settings'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  )
}
