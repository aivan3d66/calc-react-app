import React, { lazy, Suspense, useContext } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Loader } from '@/components/Loader'
import { HOME_PAGE_CLASS_ROUTE, HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants'
import { ThemeContext, ThemeProvider } from '@/components/ThemeProvider'

const HomePage = lazy(() => import('@/pages/Home/index'))
const HomeClassPage = lazy(() => import('@/pages/HomeClass/index'))
const SettingsPage = lazy(() => import('@/pages/Settings/index'))

export const Routes = [
  {
    id: 'home',
    name: HOME_PAGE_ROUTE,
    child: HomePage,
  },
  {
    id: 'homeClass',
    name: HOME_PAGE_CLASS_ROUTE,
    child: HomeClassPage,
  },
  {
    id: 'settings',
    name: SETTINGS_PAGE_ROUTE,
    child: SettingsPage,
  },
]

export const App = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader />}>
        <Switch>
          {
            Routes.map(({ id, name, child }) => {
              return (
                <Route
                  key={id}
                  exact
                  path={name}
                  component={child}
                />
              )
            })
          }
        </Switch>
      </Suspense>
    </ThemeProvider>
  )
}
