import styled from 'styled-components'

import theme from '@/theme'

export const DisplayContainer = styled.div`
  border-bottom: ${theme.spaces[2]}px solid ${theme.colors.darkGray};
  color: ${props => props.theme.headerColor.primary};
  display: flex;
  font-size: ${theme.textStyle.xl2.fontSize}rem;
  justify-content: space-between;
  line-height: ${theme.textStyle.xl2.lineHeight}rem;
  margin: 0 20px 30px 0;
  overflow: hidden;
  padding: ${theme.paddings.p10}rem 0;
  text-align: right;
`

export const DisplayHistory = styled.div`
  color: ${theme.colors.secondaryLight};
  font-size: ${theme.textStyle.lg.fontSize}rem;
`

export const DisplayCurrent = styled.div``
