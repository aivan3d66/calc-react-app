import React, { useContext } from 'react'
import { useSelector } from 'react-redux'

import { ThemeContext } from '@/components/ThemeProvider'
import { DisplayContainer, DisplayCurrent, DisplayHistory } from '@/components/Display/styled'

export const Display = () => {
  const { theme } = useContext(ThemeContext)
  const { expression, expressionHistory } = useSelector(state => state.appReducer)

  return (
    <DisplayContainer theme={theme} id="screenContainer">
      <DisplayHistory>
        {expressionHistory}
      </DisplayHistory>
      <DisplayCurrent>
        {expression}
      </DisplayCurrent>
    </DisplayContainer>
  )
}
