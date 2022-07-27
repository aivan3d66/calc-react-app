import styled from 'styled-components'

import theme from '@/theme'

export const DisplayContainer = styled.div`
  border-bottom: ${theme.spaces[2]}px solid ${theme.colors.darkGray};
  color: ${props => props.theme.headerColor.primary};
  font-size: ${theme.textStyle.xl2.fontSize}rem;
  line-height: ${theme.textStyle.xl2.lineHeight}rem;
  margin: 0 20px 30px 0;
  overflow: hidden;
  padding: ${theme.paddings.p10}rem 0;
  text-align: right;
`
