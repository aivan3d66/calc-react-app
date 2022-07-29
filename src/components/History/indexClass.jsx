import React from 'react'
import PropTypes from 'prop-types'

import { HistoryContainer, HistoryList, HistoryTitle } from '@/components/History/styled'
import { ThemeContext } from '@/components/ThemeProvider'


export default class History extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <HistoryContainer id="historyContainer" theme={theme}>
            <HistoryTitle>History</HistoryTitle>
            <HistoryList>
              {this.props.history}
            </HistoryList>
            {/* <ControlPanel showHistory={showHistory}/> */}
          </HistoryContainer>
        )}
      </ThemeContext.Consumer>

    )
  }
}

History.propTypes = {
  history: PropTypes.array,
}
