import styled from 'styled-components'

import theme from '@/theme'

export const DisplayContainer = styled.div`
  background-color: inherit;
  color: ${theme.colors.black};
  display: flex;
  margin: 0 auto;
  max-height: ${theme.size.large}px;
  max-width: ${theme.size.large}px;
  padding: ${theme.spaces[3]}px ${theme.spaces[6]}px;
`

export const MainScreen = styled.div`
  width: ${theme.size.max}%;
`
