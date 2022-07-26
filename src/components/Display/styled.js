import styled from 'styled-components'

import theme from '@/theme'

export const DisplayContainer = styled.div`
  background-color: inherit;
  color: ${theme.colors.black};
  display: flex;
  height: ${theme.size.small}px;
  margin: 0 auto;
  max-width: ${theme.size.large}px;
`

export const MainScreen = styled.div`
  width: ${theme.size.max}%;
`
