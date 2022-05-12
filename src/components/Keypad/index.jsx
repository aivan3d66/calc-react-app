import React from 'react'
import { Keypad } from '@/components/Keypad/components'
import PropTypes from 'prop-types'
import Button from '@/components/Button'
import { ACTIONS } from '@/constants'

export default (
  {
    btnValues,
    addValue,
    deleteLastValue,
    clearAll,
    evaluate,
    isDisableBtn,
  },
) => {
  const onDeleteBtnHandler = () => deleteLastValue()
  const onClearBtnHandler = () => clearAll()
  const onEvalBtnHandler = () => evaluate()

  return (
    <Keypad>
      {
        btnValues.map((b, i) => {
          const onBtnClick = () => addValue(b.value)

          const onButtonClickHandler = b => {
            return b.dispatchType === ACTIONS.ADD_VALUE
              ? onBtnClick
              : b.dispatchType === ACTIONS.DELETE_VALUE
                ? onDeleteBtnHandler
                : b.dispatchType === ACTIONS.CLEAR
                  ? onClearBtnHandler
                  : onEvalBtnHandler
          }
          return (
            <Button
              key={i}
              value={b.value}
              isDisableBtn={isDisableBtn}
              onBtnClick={onButtonClickHandler(b)}
            />
          )
        })
      }
    </Keypad>
  )
}

Keypad.propTypes = {
  btnValues: PropTypes.array,
  addValue: PropTypes.func,
  deleteLastValue: PropTypes.func,
  clearAll: PropTypes.func,
  evaluate: PropTypes.func,
  isDisableBtn: PropTypes.bool,
}
