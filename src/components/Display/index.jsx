import React from 'react'
import PropTypes from 'prop-types'

import { Display, MainScreen } from '@/components/Display/components'
import Keypad from '@/components/Keypad'
import Screen from '@/components/Screen'
import History from '@/components/History'
import ControlPanel from '@/components/ControlPanel'
import ErrorBoundary from '@/containers/ErrorBoundary'

export default (
  {
    btnValues,
    appState,
    addValue,
    deleteLastValue,
    clearAll,
    getShowHistory,
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

  const onControlBtnHandler = value => getShowHistory(value)

  return (
    <Display>
      <MainScreen>
        <Screen screenValue={calcString} errorString={errorString}/>
        <ErrorBoundary>
          <Keypad
            btnValues={btnValues}
            isDisableBtn={isDisableBtn}
            addValue={addValue}
            deleteLastValue={deleteLastValue}
            clearAll={clearAll}
            getShowHistory={getShowHistory}
            evaluate={evaluate}
          />
        </ErrorBoundary>

        <ControlPanel
          showHistory={showHistory}
          onControlBtnHandler={onControlBtnHandler}
        />
      </MainScreen>
      {
        showHistory && <History
          historyList={historyList}
        />
      }
    </Display>
  )
}

Display.propTypes = {
  appState: PropTypes.object,
  btnValues: PropTypes.array,
  getShowHistory: PropTypes.func,
  addValue: PropTypes.func,
  deleteLastValue: PropTypes.func,
  clearAll: PropTypes.func,
  evaluate: PropTypes.func,
}
