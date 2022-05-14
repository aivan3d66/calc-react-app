import React from 'react'
import { Error, Screen } from '@/components/Screen/components'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import theme from '@/theme'

export default ({ screenValue, errorString }) => {
  const { themeValue } = useSelector(state => state.appReducer)
  const schema = themeValue === 'Light theme' ? theme.appLightTheme : themeValue === 'Colored theme' ? theme.colourTheme : theme.appDarkTheme

  return (
    <Screen schema={schema} id="screenContainer">
      {errorString ? <Error>{errorString}</Error> : screenValue}
    </Screen>
  )
}

Screen.propTypes = {
  screenValue: PropTypes.number,
  errorString: PropTypes.string,
}
