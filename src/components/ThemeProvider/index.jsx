import React, { createContext, useState } from 'react'
import { useSelector } from 'react-redux'

import {
  appLightTheme,
  appColoredTheme,
  appDarkTheme,
} from '@/theme'
import { initialThemeValue } from '@/helpers'

export const ThemeContext = createContext({
  theme: appLightTheme,
  changeTheme: () => {
  },
})

export const ThemeProvider = ({ children }) => {
  const { themeValue } = useSelector(state => state.appReducer)

  const [theme, setTheme] = useState(() => initialThemeValue(themeValue))

  const changeTheme = value => {
    switch (value) {
      case 'Light theme':
        setTheme(appLightTheme)
        break
      case 'Dark theme':
        setTheme(appDarkTheme)
        break
      case 'Colored theme':
        setTheme(appColoredTheme)
        break
      default:
        break
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
