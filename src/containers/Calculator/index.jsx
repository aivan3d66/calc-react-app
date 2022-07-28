import React from 'react'

import { Display } from '@/components/Display'
import { CalculatorContainer, CalculatorPanel } from '@/containers/Calculator/styled'
import { History } from '@/components/History'
import { Keypad } from '@/components/Keypad'

export const CalculatorComponent = () => {
  return (
    <CalculatorContainer>
      <CalculatorPanel>
        <Display />
        <Keypad />
      </CalculatorPanel>
      <History />
    </CalculatorContainer>
  )
}
