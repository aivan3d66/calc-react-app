import styled from 'styled-components'

import theme from '@/theme'

export const ControlPanelContainer = styled.div`
  display: flex;
  height: ${theme.size.max}px;
  justify-content: center;
  margin: 0 auto;
  width: ${theme.size.max}%;
`

export const ControlPanelButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.theme.headerColor.primary};
  cursor: pointer;
  font-size: ${theme.textStyle.xl.fontSize}rem;
  line-height: ${theme.textStyle.xl.lineHeight}rem;
  transition: 0.3s;

  &:hover {
    color: ${props => props.theme.buttonHoverColor.primary};
  }
`
