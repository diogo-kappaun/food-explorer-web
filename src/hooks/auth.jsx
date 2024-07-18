import { jwtDecode } from 'jwt-decode'
import { createContext, useContext, useEffect, useState } from 'react'

import { api } from '../services/api'

import { toast } from 'sonner'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    api
      .post('sessions', { email, password })
      .then((response) => {
        const { user, token } = response.data

        api.defaults.headers.common.Authorization = `Bearer ${token}`

        localStorage.setItem('@foodexplorer:token', token)
        localStorage.setItem('@foodexplorer:user', JSON.stringify(user))

        const { role } = jwtDecode(token)

        setData({ token, user, role })
      })
      .catch((error) => {
        if (error.response) {
          return toast.error(error.response.data.message)
        } else {
          return toast.error('Não foi possível realizar o login!')
        }
      })
  }

  async function updateAvatar({ avatarFile }) {
    try {
      const fileUploadForm = new FormData()
      fileUploadForm.append('avatar', avatarFile)

      const user = data.user

      const response = await api.patch('/users/avatar', fileUploadForm)

      user.avatar_id = response.data

      localStorage.setItem('@foodexplorer:user', JSON.stringify(user))

      setData({ user, token: data.token, role: data.role })
    } catch (error) {
      if (error.response) {
        return toast.error(error.response.data.message)
      } else {
        return toast.error('Não foi possível realizar o login!')
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@foodexplorer:user')

    setData({})
  }

  useEffect(() => {
    const token = localStorage.getItem('@foodexplorer:token')
    const user = localStorage.getItem('@foodexplorer:user')

    if (token && user) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`

      const { role } = jwtDecode(token)

      setData({
        token,
        user: JSON.parse(user),
        role,
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        updateAvatar,
        user: data.user,
        role: data.role,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
