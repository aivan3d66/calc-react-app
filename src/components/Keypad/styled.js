import styled from 'styled-components'

import theme from '@/theme'

export const KeypadContainer = styled.div`
  // display: flex;
  // flex-direction: column;
  // height: ${theme.size.xs}px;
  // justify-content: space-between;
  // padding: 0 ${theme.paddings.p5}rem;
  // width: ${theme.size.max}%;
  width: 100%;
  height: 70vh;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const KeypadRow = styled.div`
  display: flex;
  justify-content: space-between;
`

export const KeypadColumn = styled.div`
  justify-content: space-between;
`
