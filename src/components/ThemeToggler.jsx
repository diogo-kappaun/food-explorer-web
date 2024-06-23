import { useState } from 'react'
import { PiMoon, PiSun } from 'react-icons/pi'
import { Button } from './Button'

export function ThemeToggler() {
  const [theme, setTheme] = useState(
    document.documentElement.classList.contains('dark'),
  )

  theme
    ? localStorage.setItem('@foodexplorer:theme', 'dark')
    : localStorage.setItem('@foodexplorer:theme', 'light')

  function toggleTheme() {
    document.documentElement.classList.toggle('dark')

    theme
      ? localStorage.setItem('@foodexplorer:theme', 'dark')
      : localStorage.setItem('@foodexplorer:theme', 'light')

    setTheme(!theme)
  }

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      className="absolute left-4 top-4 text-foreground"
    >
      {theme ? <PiMoon size={18} /> : <PiSun size={18} />}
    </Button>
  )
}
