import React, { createContext, useState } from 'react'

import {
  appLightTheme,
  appColoredTheme,
  appDarkTheme,
} from '@/theme'

export const ThemeContext = createContext({
  theme: appLightTheme,
  changeTheme: () => {
  },
})

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(appLightTheme)

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
