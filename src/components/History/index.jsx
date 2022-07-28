import React, { useContext } from 'react'
import { useSelector } from 'react-redux'

import {
  HistoryContainer,
  HistoryTitle,
  HistoryList, HistoryListItem,
} from '@/components/History/styled'
import { ThemeContext } from '@/components/ThemeProvider'

export const History = () => {
  const { theme } = useContext(ThemeContext)
  const history = useSelector(state => state.appReducer.historyList)

  return (
    <HistoryContainer id="historyContainer" theme={theme}>
      <HistoryTitle>History</HistoryTitle>
      <HistoryList>
        {history.map((element, ind) => <HistoryListItem key={ind}>{element}</HistoryListItem>)}
      </HistoryList>
    </HistoryContainer>
  )
}

