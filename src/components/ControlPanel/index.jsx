import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { ControlPanelContainer, ControlPanelButton } from '@/components/ControlPanel/styled'
import { ThemeContext } from '@/components/ThemeProvider'

export const ControlPanel = ({ showHistory }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <ControlPanelContainer id="controlPanelContainer">
      <ControlPanelButton theme={theme}>{showHistory ? 'Show' : 'Hide'} history</ControlPanelButton>
    </ControlPanelContainer>
  )
}

ControlPanel.propTypes = {
  showHistory: PropTypes.bool.isRequired,
}
