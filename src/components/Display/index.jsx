import React from 'react'
import PropTypes from 'prop-types'

import { DisplayContainer, MainScreen } from '@/components/Display/styled'
import { Screen } from '@/components/Screen'
import { Keypad } from '@/components/Keypad'
import { History } from '@/components/History'


export const Display = (
  {
    btnValues,
    appState,
    addValue,
    deleteLastValue,
    clearAll,
    evaluate,
  },
) => {

  const {
    isDisableBtn,
    historyList,
    showHistory,
    calcString,
    errorString,
  } = appState

  return (
    <DisplayContainer>
      <MainScreen>
        <Screen screenValue={calcString} errorString={errorString} />
        <Keypad
          btnValues={btnValues}
          isDisableBtn={isDisableBtn}
          addValue={addValue}
          deleteLastValue={deleteLastValue}
          clearAll={clearAll}
          evaluate={evaluate}
        />
      </MainScreen>
      <History
        historyList={historyList} showHistory={showHistory}
      />
    </DisplayContainer>
  )
}

Display.propTypes = {
  appState: PropTypes.object,
  btnValues: PropTypes.array,
  addValue: PropTypes.func,
  deleteLastValue: PropTypes.func,
  clearAll: PropTypes.func,
  evaluate: PropTypes.func,
}
