import { BrowserRouter } from 'react-router-dom'

import { useAuth } from '../hooks/auth'
import { FavoriteProvider } from '../hooks/favorites'

import { USER_ROLE } from '../utils/roles'

import { AdminRoutes } from './admin.routes'
import { AuthRoutes } from './auth.routes'
import { CustomerRoutes } from './customer.routes'

export function Routes() {
  const { user, role } = useAuth()

  function AcessRoutes() {
    switch (role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes />
      default:
        return <CustomerRoutes />
    }
  }

  return (
    <BrowserRouter>
      {user ? (
        <FavoriteProvider>
          <AcessRoutes />
        </FavoriteProvider>
      ) : (
        <AuthRoutes />
      )}
    </BrowserRouter>
  )
}
