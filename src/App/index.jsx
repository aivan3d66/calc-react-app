import React, { lazy, Suspense, useContext, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import { useDispatch } from "react-redux"

import { Loader } from "@/components/Loader"
import { HOME_PAGE_CLASS_ROUTE, HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants'
import { ThemeContext, ThemeProvider } from "@/components/ThemeProvider"
import { getLocalStorage } from "@/actions"

const HomePage = lazy(() => import("@/pages/Home/index"))
const SettingsPage = lazy(() => import("@/pages/Settings/index"))

export const Routes = [
  {
    id: "home",
    name: HOME_PAGE_ROUTE,
    child: HomePage,
  },
  {
    id: "homeClass",
    name: HOME_PAGE_CLASS_ROUTE,
    child: HomePage,
  },
  {
    id: "settings",
    name: SETTINGS_PAGE_ROUTE,
    child: SettingsPage,
  },
]

export const App = () => {
  const dispatch = useDispatch()

  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem('redux-store'),
    )
    dispatch(getLocalStorage(data?.calculator))
  }, [])

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
