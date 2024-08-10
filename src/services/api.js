import axios from 'axios'

const baseURL = `${import.meta.env.VITE_API_URL}` || 'http://localhost:10000/'

export const api = axios.create({
  baseURL,
})
