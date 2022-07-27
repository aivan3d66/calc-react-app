import React from 'react'

import { HistoryContainer, HistoryList, HistoryListItem, HistoryTitle } from '@/components/History/styled'
import { getSliceNum } from '@/helpers'
import { ThemeContext } from '@/components/ThemeProvider'

export default class History extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: JSON.parse(localStorage.getItem('history')) || [],
      reloadHistory: null,
    }
  }

  componentDidMount() {
    const reload = setInterval(this.changeState, 0)
    this.setState({ reloadHistory: reload })
  }

  componentWillUnmount() {
    clearInterval(this.state.reloadHistory)
  }

  changeState = () => {
    this.setState({
      history: JSON.parse(localStorage.getItem('history')),
    })
  }

  getHistory = history => {
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

  render() {
    const operationsHistory = this.getHistory(this.state.history)
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <HistoryContainer id="historyContainer" theme={theme}>
            <HistoryTitle>History</HistoryTitle>
            <HistoryList>
              {operationsHistory}
            </HistoryList>
            {/* <ControlPanel showHistory={showHistory}/> */}
          </HistoryContainer>
        )}
      </ThemeContext.Consumer>

    )
  }
}
