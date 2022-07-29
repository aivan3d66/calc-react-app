import React from 'react'
import PropTypes from 'prop-types'

import { DisplayContainer, DisplayCurrent, DisplayHistory } from '@/components/Display/styled'
import { ThemeContext } from '@/components/ThemeProvider'

export default class Display extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <DisplayContainer theme={theme} id="screenContainer">
            <DisplayHistory>
              {this.props.expressionHistory}
            </DisplayHistory>
            <DisplayCurrent>
              {this.props.expression}
            </DisplayCurrent>
          </DisplayContainer>
        )}
      </ThemeContext.Consumer>

    )
  }
}

Display.propTypes = {
  expression: PropTypes.string,
  expressionHistory: PropTypes.string,
}
