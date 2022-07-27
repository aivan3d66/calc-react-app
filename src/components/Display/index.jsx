import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { DisplayContainer } from '@/components/Display/styled'
import { ThemeContext } from '@/components/ThemeProvider'

export const Display = ({ value, memory }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <DisplayContainer theme={theme} id="screenContainer">
      {value || memory}
    </DisplayContainer>
  )
}

Display.propTypes = {
  value: PropTypes.string,
  memory: PropTypes.number,
}
