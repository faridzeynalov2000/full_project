import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext
} from './ThemeContext'
import { useContext } from 'react'

interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme (): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  if (theme === undefined) {
    // Обработка случая, когда theme не установлен в контексте.
    // Вы можете выбрать значение по умолчанию или бросить ошибку.
    throw new Error('Theme is not set in the context')
  }

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return {
    theme,
    toggleTheme
  }
}
