import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { ThemeContext } from '@/components/ThemeProvider'
import { DisplayContainer } from '@/components/Display/styled'

export const Display = ({ value, memory }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <DisplayContainer theme={theme} id="screenContainer">
      {value || memory}
    </DisplayContainer>
  )
}

Display.propTypes = {
  value: PropTypes.number,
  memory: PropTypes.number,
}
