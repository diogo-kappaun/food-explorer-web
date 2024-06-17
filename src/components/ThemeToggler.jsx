import { useState } from 'react'
import { PiMoon, PiSun } from 'react-icons/pi'
import { Button } from './Button'

export function ThemeToggler() {
  const [theme, setTheme] = useState(
    document.documentElement.classList.contains('dark'),
  )

  theme ? (localStorage.theme = 'dark') : (localStorage.theme = 'light')

  function toggleTheme() {
    document.documentElement.classList.toggle('dark')

    theme ? (localStorage.theme = 'dark') : (localStorage.theme = 'light')

    setTheme(!theme)
  }

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      className="absolute right-4 top-4 text-foreground"
    >
      {theme ? <PiMoon size={16} /> : <PiSun size={16} />}
    </Button>
  )
}