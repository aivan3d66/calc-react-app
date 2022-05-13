import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Routes } from '@/constants'
import Loader from '@/components/Loader'
import PageLayout from '@/pages/PageLayout'

const HomePage = lazy(() => import('@/pages/Home'))
const SettingsPage = lazy(() => import('@/pages/Settings'))

export default () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route
        exact
        path={Routes.START_PAGE}
      >
        <PageLayout />
      </Route>
      <Route
        exact
        path={Routes.HOME_PAGE}
        component={HomePage}
      />
      <Route
        exact
        path={Routes.SETTINGS_PAGE}
        component={SettingsPage}
      />
    </Switch>
  </Suspense>
)
