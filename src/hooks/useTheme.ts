import { useState, useEffect } from 'react'

export function useTheme(){
  const [theme, setTheme] = useState('light')
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    setIsDarkMode(theme === 'dark')
  }, [theme])
  
  useEffect(() => {
    const localTheme = localStorage.getItem('theme')

    localTheme && setTheme(localTheme)
  }, [])

  function toggleTheme() {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark')

      setTheme('dark')
    } else {
      localStorage.setItem('theme', 'light')

      setTheme('light')
    }
  }  

  return { theme, isDarkMode, toggleTheme }
}