import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { expressionHelper } from '@/helpers'
import { KeypadColumn, KeypadContainer, KeypadRow } from '@/containers/Keypad/styled'
import { buttonValues } from '@/constants'
import { Button } from '@/components/Button'
import { useIsAnswer } from '@/hooks'
import { addToHistory, deleteValue, evaluate, addValue, setError } from '@/actions'
import { calculation } from '@/utils'

export const Keypad = () => {
  const [isAnswer, reAnswer] = useIsAnswer()
  const expression = useSelector(state => state.appReducer.expression)
  const dispatch = useDispatch()

  function keypadHandle(event) {
    if (event.target.classList.contains('mainKeypad')) return
    switch (event.target.textContent) {
      case 'CE': {
        dispatch(deleteValue())
        break
      }
      case 'C': {
        dispatch(evaluate(expression.slice(0, expression.length - 1)))
        break
      }
      case '=': {
        try {
          const temp = expression
          const answer = calculation(expression.toString()).toString()
          const t = dispatch(evaluate(answer))
          dispatch(addToHistory(`${temp} = ${t.payload.value}`))
          reAnswer()
        } catch (error) {
          dispatch(setError(error.message))
        }
        break
      }
      default: {
        const temp = event.target.textContent

        expressionHelper(temp, isAnswer, reAnswer, expression, dispatch, addValue, evaluate)
      }
    }
  }

  return (
    <KeypadContainer id="keypadContainer" onClick={event => keypadHandle(event)}>
      {
        buttonValues.map((rows, index) => (
          <KeypadRow key={index}>
            {rows.map(({ id, value }) => (
              <KeypadColumn key={value}>
                <Button
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
