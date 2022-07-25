import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { Button } from '@/components/Button/components'
import theme from '@/theme'

export default ({ value, onBtnClick, isDisableBtn }) => {
  const { themeValue } = useSelector(state => state.appReducer)
  const schema = themeValue === 'Light theme' ? theme.appLightTheme : themeValue === 'Colored theme' ? theme.colourTheme : theme.appDarkTheme

  return (
    <Button
      schema={schema}
      onClick={onBtnClick}
      disabled={isDisableBtn && value !== 'C'}
    >
      {value}
    </Button>
  )
}

Button.propTypes = {
  value: PropTypes.string,
  onBtnClick: PropTypes.func,
}
