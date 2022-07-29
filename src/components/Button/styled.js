import styled from 'styled-components'

import theme from '@/theme'

export const ButtonStyled = styled.button`
  background-color: ${props => props.theme.buttonColor.primary};
  border: ${theme.spaces[1]}px solid ${theme.colors.lightGray};
  border-radius: ${theme.radius.roundedMd}rem;
  color: ${props => props.theme.headerColor.primary};
  cursor: pointer;
  font-size: ${theme.textStyle.xl2.fontSize}rem;
  height: ${theme.size.max}px;
  line-height: ${theme.textStyle.xl2.lineHeight}rem;
  margin-right: ${theme.margins.m5}rem;
  transition: 0.3s;
  width: ${theme.size.max}px;

  &:hover {
    background-color: ${props => props.theme.buttonHoverColor.primary};
    color: ${theme.colors.white};
  }

  &:disabled {
    opacity: ${theme.opacity.opacity50};
  }
`
