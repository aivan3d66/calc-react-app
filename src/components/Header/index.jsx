import React from 'react'
import { useSelector } from 'react-redux'

import { Header, HeaderWrapper, Navigation, StyledNavLink } from '@/components/Header/components'
import { Routes } from '@/constants'
import theme from '@/theme'

export default () => {
  const { themeValue } = useSelector(state => state.appReducer)
  const schema = themeValue === 'Light theme' ? theme.appLightTheme : themeValue === 'Colored theme' ? theme.colourTheme : theme.appDarkTheme

  return (
    <Header schema={schema} id="headerNavigation">
      <HeaderWrapper>
        <h1>Calculator App</h1>
        <Navigation>
          <StyledNavLink to={Routes.HOME_PAGE}>
            Home
          </StyledNavLink>
          <StyledNavLink to={Routes.SETTINGS_PAGE}>
            Settings
          </StyledNavLink>
        </Navigation>
      </HeaderWrapper>
    </Header>
  )
}
