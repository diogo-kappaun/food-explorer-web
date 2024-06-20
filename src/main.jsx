import React from 'react'
import ReactDOM from 'react-dom/client'

import 'react-toastify/dist/ReactToastify.css'
import './global.css'
import './utils/theme'

import { ToastContainer } from 'react-toastify'
import { Routes } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes />
    <ToastContainer limit={3} hideProgressBar />
  </React.StrictMode>,
)
