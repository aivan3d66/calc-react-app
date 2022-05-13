import React from 'react'
import { ControlPanel } from '@/components/ControlPanel/components'
import PropTypes from 'prop-types'

export default ({showHistory, onControlBtnHandler}) => {
  return (
    <ControlPanel id="controlPanelContainer">
      <button onClick={() => onControlBtnHandler(!showHistory)}>{showHistory ? 'Hide' : 'Show'} history</button>
    </ControlPanel>
  )
}

ControlPanel.propTypes = {
  showHistory: PropTypes.bool,
  onControlBtnHandler: PropTypes.func,
}
