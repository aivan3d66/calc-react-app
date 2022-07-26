import styled from 'styled-components'

import theme from '@/theme'

export const SettingsContainer = styled.div`
  align-items: flex-start;
  color: ${props => props.theme.headerColor.primary};
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: ${theme.size.large}px;
  padding: ${theme.paddings.p5}rem;
`

export const SettingsButton = styled.button`
  border: ${theme.spaces[1]}px solid ${theme.colors.lightGray};
  border-radius: ${theme.radius.roundedSm}rem;
  color: ${props => props.theme.headerColor.primary};
  cursor: pointer;
  font-size: ${theme.textStyle.xl.fontSize}rem;
  line-height: ${theme.textStyle.xl.lineHeight}rem;
  padding: ${theme.paddings.p5}rem;
  text-align: left;
  transition: 0.3s;
  width: ${theme.size.xxs}px;

  &:hover {
    background-color: ${props => props.theme.buttonHoverColor.primary};
    color: ${theme.colors.white};
  }
`

export const SettingsTitle = styled.h3`
  font-size: ${theme.textStyle.xl2.fontSize}rem;
  font-weight: normal;
`


