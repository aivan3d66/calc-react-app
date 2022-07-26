import React, { useContext } from 'react'

import { HeaderContainer, HeaderWrapper, Navigation, StyledNavLink, HeaderTitle } from '@/components/Header/styled'
import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants'
import { ThemeContext } from '@/components/ThemeProvider'

export const Header = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <HeaderContainer id="headerNavigation" theme={theme}>
      <HeaderWrapper>
        <HeaderTitle>Calculator App</HeaderTitle>
        <Navigation>
          <StyledNavLink to={HOME_PAGE_ROUTE}>
            Home
          </StyledNavLink>
          <StyledNavLink to={SETTINGS_PAGE_ROUTE}>
            Settings
          </StyledNavLink>
        </Navigation>
      </HeaderWrapper>
    </HeaderContainer>
  )
}
