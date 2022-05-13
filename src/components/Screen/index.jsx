import React from 'react'
import { Screen } from '@/components/Screen/components'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import theme from '@/theme'

export default ({ screenValue }) => {
  const { themeValue } = useSelector(state => state.appReducer)
  const schema = themeValue === 'Light theme' ? theme.appLightTheme : themeValue === 'Colored theme' ? theme.colourTheme : theme.appDarkTheme

  return (
    <Screen schema={schema} id="screenContainer">
      {screenValue}
    </Screen>
  )
}

Screen.propTypes = {
  screenValue: PropTypes.number,
}
