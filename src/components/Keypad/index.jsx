import React from 'react'
import PropTypes from 'prop-types'

import { KeypadContainer, KeypadRow, KeypadColumn } from '@/components/Keypad/styled'
import { buttonValues } from '@/constants'
import { Button } from '@/components/Button'

export const Keypad = (
  {
    addValue,
    deleteLastValue,
    clearAll,
    evaluate,
    isDisableBtn,
  },
) => {
  return (
    <KeypadContainer id="keypadContainer">
      {
        buttonValues.map((rows, index) => (
          <KeypadRow key={index}>
            {rows.map(column => (
              <KeypadColumn key={column.value}>
                <Button
                  value={column.value}
                  onClick={() => console.log(column.value)}>
                  {column.value}
                </Button>
              </KeypadColumn>
            ))}
          </KeypadRow>
        ))
      }
    </KeypadContainer>
  )
}

Keypad.propTypes = {
  addValue: PropTypes.func,
  deleteLastValue: PropTypes.func,
  clearAll: PropTypes.func,
  evaluate: PropTypes.func,
  isDisableBtn: PropTypes.bool,
}
