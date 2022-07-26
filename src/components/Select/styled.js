import styled from 'styled-components'

import theme from '@/theme'

export const SelectTitle = styled.h4`
  font: normal normal normal 24px/29px "Gill Sans", sans-serif;
  margin: 20px 0 0 0;
`

export const SelectContainer = styled.select`
  background-color: ${props => props.theme.buttonColor.primary};
  border: 1px solid ${theme.colors.lightGray};
  border-radius: ${theme.radius.roundedSm}rem;
  color: ${props => props.theme.headerColor.primary};
  cursor: pointer;
  font-size: ${theme.textStyle.xl.fontSize}rem;
  line-height: ${theme.textStyle.xl.lineHeight}rem;
  margin: 20px 0;
  padding: ${theme.paddings.p5}rem;
  transition: 0.3s;
  width: ${theme.size.xxs}px;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.buttonHoverColor.primary};
    color: white;
  }
`

export const SelectOption = styled.option``
