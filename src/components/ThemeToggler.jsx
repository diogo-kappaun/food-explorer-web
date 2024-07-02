import { useState } from 'react'

import { Select } from '../components/Select'
import { SelectItem } from '../components/Select/Item'

export function ThemeToggler() {
  const [theme, setTheme] = useState(
    localStorage.getItem('@foodexplorer:theme'),
  )

  function toggleTheme(themeSelected) {
    setTheme(themeSelected)

    switch (themeSelected) {
      case 'default':
        localStorage.removeItem('@foodexplorer:theme')
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? document.documentElement.classList.add('dark')
          : document.documentElement.classList.remove('dark')
        break
      case 'dark':
        document.documentElement.classList.add('dark')
        localStorage.setItem('@foodexplorer:theme', 'dark')
        break
      case 'light':
        document.documentElement.classList.remove('dark')
        localStorage.setItem('@foodexplorer:theme', 'light')
        break
      default:
        break
    }
  }

  return (
    <Select
      onValueChange={toggleTheme}
      value={theme || ''}
      placeholder="Selecione um tema"
    >
      <SelectItem value="default" text="Padrão" />
      <SelectItem value="dark" text="Escuro" />
      <SelectItem value="light" text="Claro" />
    </Select>
  )
}
