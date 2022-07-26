import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import {
  HistoryContainer,
  HistoryTitle,
  HistoryList,
  HistoryListItem,
} from '@/components/History/styled'
import { ThemeContext } from '@/components/ThemeProvider'
import { ControlPanel } from '@/components/ControlPanel'

export const History = ({ historyList, showHistory }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <HistoryContainer id="historyContainer" theme={theme}>
      <HistoryTitle>History</HistoryTitle>
      <HistoryList>
        {
          historyList?.map(item => {
            return <HistoryListItem key={item}>{item}</HistoryListItem>
          })
        }
      </HistoryList>
      <ControlPanel showHistory={showHistory}/>
    </HistoryContainer>
  )
}

History.propTypes = {
  historyList: PropTypes.array,
  showHistory: PropTypes.bool,
}
