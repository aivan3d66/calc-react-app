import styled from 'styled-components'

import theme from '@/theme'

export const ButtonStyled = styled.button`
  background-color: ${props => props.theme.buttonColor.primary};
  border: ${theme.spaces[1]}px solid ${theme.colors.lightGray};
  border-radius: 30px;
  color: ${props => props.theme.headerColor.primary};
  cursor: pointer;
  font-size: ${theme.textStyle.xl2.fontSize}rem;
  height: ${theme.height.h28}rem;
  line-height: ${theme.textStyle.xl2.lineHeight}rem;
  margin: auto;
  padding: ${theme.spaces[8]}px;
  text-align: center;
  transition: 0.3s;
  width: ${theme.size.max}px;

  &:hover {
    background-color: ${props => props.theme.buttonHoverColor.primary};
    border-color: transparent;
    color: ${theme.colors.white};
  }

  &:disabled {
    opacity: ${theme.opacity.opacity50};
  }
`
