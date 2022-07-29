import React from 'react'
import PropTypes from 'prop-types'

import { DisplayContainer } from '@/components/Display/styled'
import { ThemeContext } from '@/components/ThemeProvider'

export default class Display extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <DisplayContainer theme={theme} id="screenContainer">
            {this.props.expressionValue}
          </DisplayContainer>
        )}
      </ThemeContext.Consumer>

    )
  }
}

Display.propTypes = {
  expressionValue: PropTypes.string,
}
