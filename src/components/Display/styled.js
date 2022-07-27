import styled from 'styled-components'

import theme from '@/theme'

export const DisplayContainer = styled.div`
  border-bottom: ${theme.spaces[2]}px solid ${theme.colors.darkGray};
  color: ${props => props.theme.textColor.primary};
  font-size: ${theme.textStyle.xl2.fontSize}rem;
  height: ${theme.size.max}px;
  line-height: ${theme.textStyle.xl2.lineHeight}rem;
  margin: 0 20px 30px 0;
  overflow: hidden;
  padding: ${theme.paddings.p5}rem;
  text-align: right;
`
