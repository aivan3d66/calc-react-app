import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import theme from '@/theme'

export const HeaderContainer = styled.div`
  background-color: ${props => props.theme.headerColor.primary};
`

export const HeaderWrapper = styled.div`
  align-items: center;
  color: ${theme.colors.white};
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: ${theme.size.large}px;
  padding: ${theme.spaces[1]}rem;
`

export const HeaderTitle = styled.h1`
  color: ${theme.colors.white};
  font-size: ${theme.textStyle.lg.fontSize}rem;
  font-weight: normal;
  line-height: ${theme.textStyle.lg.lineHeight}rem;
`

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledNavLink = styled(NavLink)`
  color: ${theme.colors.white};
  font-size: ${theme.textStyle.lg.fontSize}rem;
  margin-left: ${theme.spaces[10]}px;
  position: relative;
  text-decoration: none;

  &:hover {
    color: ${theme.colors.extraLightGray};

    &::before {
      background-color: ${theme.colors.extraLightGray};
      bottom: -3px;
      content: '';
      height: 2px;
      position: absolute;
      width: ${theme.size.max}%;
    }
  }
`
