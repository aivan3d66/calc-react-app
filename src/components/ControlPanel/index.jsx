import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { ControlPanel } from '@/components/ControlPanel/components'
import theme from '@/theme'


export default ({showHistory, onControlBtnHandler}) => {
  const { themeValue } = useSelector(state => state.appReducer)
  const schema = themeValue === 'Light theme' ? theme.appLightTheme : themeValue === 'Colored theme' ? theme.colourTheme : theme.appDarkTheme

  return (
    <ControlPanel id="controlPanelContainer" schema={schema}>
      <button onClick={() => onControlBtnHandler(!showHistory)}>{showHistory ? 'Hide' : 'Show'} history</button>
    </ControlPanel>
  )
}

ControlPanel.propTypes = {
  showHistory: PropTypes.bool,
  onControlBtnHandler: PropTypes.func,
}
