import styled from 'styled-components'

import theme from '@/theme'

export const CalculatorContainer = styled.div`
  background-color: inherit;
  color: ${theme.colors.black};
  display: flex;
  margin: ${theme.margins.m5}rem auto 0 auto;
  max-width: ${theme.size.large}px;
`

export const CalculatorPanel = styled.div`
  width: ${theme.size.max}%;
`
