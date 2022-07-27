import React, { useContext, useEffect, useState } from 'react'

import {
  HistoryContainer,
  HistoryTitle,
  HistoryList,
  HistoryListItem,
} from '@/components/History/styled'
import { ThemeContext } from '@/components/ThemeProvider'
import { getSliceNum } from '@/helpers'

export const History = () => {
  const { theme } = useContext(ThemeContext)
  const [history, setHistory] = useState(JSON.parse(localStorage.getItem('history')) || [])
  const [reloadHistory, setReloadHistory] = useState(null)

  useEffect(() => {
    const reload = setInterval(changeState, 0)
    setReloadHistory(reload)

    return () => clearInterval(reloadHistory)
  }, [])

  const changeState = () => {
    setHistory(JSON.parse(localStorage.getItem('history')))
  }

  const getHistory = history => {
    let res = []
    if (history) {
      res = history.map(({ firstValue, operator, memory }, i) => {
        return (
          <HistoryListItem key={i}>
            {
              `${getSliceNum(firstValue)}
              ${operator}
              ${getSliceNum(memory)}`
            }
          </HistoryListItem>
        )
      })
    }
    return res
  }

  const operationsHistory = getHistory(history)

  return (
    <HistoryContainer id="historyContainer" theme={theme}>
      <HistoryTitle>History</HistoryTitle>
      <HistoryList>
        {operationsHistory}
      </HistoryList>
      {/* <ControlPanel showHistory={showHistory}/> */}
    </HistoryContainer>
  )
}

// History.propTypes = {
//   historyList: PropTypes.array,
//   showHistory: PropTypes.bool,
// }
