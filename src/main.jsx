import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css'
import './utils/theme'

import { Toast } from './components/Toast'
import { AuthProvider } from './hooks/auth'
import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Routes />
      <Toast />
    </AuthProvider>
  </React.StrictMode>,
)
