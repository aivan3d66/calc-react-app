import React from 'react'
import PropTypes from 'prop-types'

import { KeypadColumn, KeypadContainer, KeypadRow } from '@/components/Keypad/styled'
import { buttonValues } from '@/constants'
import { Button } from '@/components/Button'

export const Keypad = (
  {
    value,
    onKeyClick,
  },
) => {
  return (
    <KeypadContainer id="keypadContainer">
      {
        buttonValues.map((rows, index) => (
          <KeypadRow key={index}>
            {rows.map(({id, value, type}) => (
              <KeypadColumn key={value}>
                <Button
                  key={id}
                  value={value}
                  type={type}
                  onKeyClick={onKeyClick}
                />
              </KeypadColumn>
            ))}
          </KeypadRow>
        ))
      }
    </KeypadContainer>
  )
}

Keypad.propTypes = {
  value: PropTypes.string,
  onKeyClick: PropTypes.func,
}
