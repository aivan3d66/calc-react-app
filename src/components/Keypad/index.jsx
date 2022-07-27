import React from 'react'
import PropTypes from 'prop-types'

import { KeypadContainer } from '@/components/Keypad/styled'
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
        buttonValues.map(({ id, context, type }) => {
          return (
            <Button
              key={id}
              value={context}
              type={type}
              onKeyClick={onKeyClick}
            />
          )
        })
      }
    </KeypadContainer>
  )
}

Keypad.propTypes = {
  value: PropTypes.string,
  onKeyClick: PropTypes.func,
}
