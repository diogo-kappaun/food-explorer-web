import { BrowserRouter } from 'react-router-dom'

import { useAuth } from '../hooks/auth'

import { USER_ROLE } from '../utils/roles'

import { AdminRoutes } from './admin.routes'
import { AuthRoutes } from './auth.routes'
import { CustomerRoutes } from './customer.routes'

export function Routes() {
  const { user } = useAuth()

  function AcessRoutes() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes />
      default:
        return <CustomerRoutes />
    }
  }

  return (
    <BrowserRouter>{user ? <AcessRoutes /> : <AuthRoutes />}</BrowserRouter>
  )
}
