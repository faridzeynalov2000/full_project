import { createContext } from 'react'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
} // enum перечисление

export interface ThemeContextProps {
  theme?: Theme
  setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.LIGHT, // Устанавливаем значение по умолчанию
  setTheme: () => {} // Пустая функция, можно заменить на реальную реализацию
})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
