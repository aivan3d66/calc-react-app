import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { ControlPanelContainer, ControlPanelButton } from '@/components/ControlPanel/styled'
import { ThemeContext } from '@/components/ThemeProvider'

export const ControlPanel = ({ showHistory, onControlBtnHandler }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <ControlPanelContainer id="controlPanelContainer">
      <ControlPanelButton theme={theme} onClick={() => onControlBtnHandler(!showHistory)}>{showHistory ? 'Hide' : 'Show'} history</ControlPanelButton>
    </ControlPanelContainer>
  )
}

ControlPanel.propTypes = {
  showHistory: PropTypes.bool.isRequired,
  onControlBtnHandler: PropTypes.func.isRequired,
}
