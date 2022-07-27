import React from 'react'

import { KeypadContainer } from '@/components/Keypad/styled'
import { buttonValues } from '@/constants'
import Button from '@/components/Button/indexClass'


export default class Keypad extends React.Component {
  render() {
    return (
      <KeypadContainer id="keypadContainer">
        {
          buttonValues.map(({ id, context, type }) => {
            return (
              <Button
                key={id}
                value={context}
                type={type}
                onKeyClick={this.props.onKeyClick}
              />
            )
          })
        }
      </KeypadContainer>
    )
  }
}
