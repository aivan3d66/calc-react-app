import React, { useContext } from 'react'
import { useSelector } from 'react-redux'

import { ThemeContext } from '@/components/ThemeProvider'
import { DisplayContainer } from '@/components/Display/styled'

export const Display = () => {
  const { theme } = useContext(ThemeContext)
  const expressionValue = useSelector(state => state.appReducer.expression)

  return (
    <DisplayContainer theme={theme} id="screenContainer">
      {expressionValue}
    </DisplayContainer>
  )
}
