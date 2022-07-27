import React from 'react'

import { KeypadColumn, KeypadContainer, KeypadRow } from '@/components/Keypad/styled'
import { buttonValues } from '@/constants'
import Button from '@/components/Button/indexClass'

export default class Keypad extends React.Component {
  render() {
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
                    onKeyClick={this.props.onKeyClick}
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
