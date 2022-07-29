import styled from 'styled-components'

import theme from '@/theme'

export const KeypadContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: ${theme.size.xs}px;
  justify-content: space-between;
  padding: 0 ${theme.paddings.p5}rem 0 0;
  width: ${theme.size.max}%;
`

export const KeypadRow = styled.div`
  display: flex;
  margin: 0 auto;
`

export const KeypadColumn = styled.div`
  display: flex;
  justify-content: space-between;
`
