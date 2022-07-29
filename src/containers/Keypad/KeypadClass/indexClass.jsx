import React from 'react'

import { KeypadColumn, KeypadContainer, KeypadRow } from '@/containers/Keypad/styled'
import { buttonValues } from '@/constants'
import Button from '@/components/Button/indexClass'

class Keypad extends React.Component {
  render() {
    return (
      <KeypadContainer
        id="keypadContainer"
        onClick={e => this.props.onKeyClick(e, this.props.expressionValue)}>
        {
          buttonValues.map((rows, index) => (
            <KeypadRow key={index}>
              {rows.map(({ id, value, type }) => (
                <KeypadColumn key={value}>
                  <Button
                    key={id}
                    value={value}
                  />
                </KeypadColumn>
              ))}
            </KeypadRow>
          ))
        }
      </KeypadContainer>
    )
  }
}

export default Keypad
