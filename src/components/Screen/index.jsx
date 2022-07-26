import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { ScreenContainer } from '@/components/Screen/styled'
import { ThemeContext } from '@/components/ThemeProvider'

export const Screen = ({ screenValue }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <ScreenContainer theme={theme} id="screenContainer">
      {screenValue}
    </ScreenContainer>
  )
}

Screen.propTypes = {
  screenValue: PropTypes.string,
}
