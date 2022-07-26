import styled from 'styled-components'

import theme from '@/theme'

export const PageLayoutContainer = styled.div`
  background-color: ${props => props.theme.appBackgroundColor.primary};
  height: ${theme.size.max}%;
  margin: 0 auto;
  width: ${theme.size.max}%;
`

