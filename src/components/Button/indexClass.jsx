import React from 'react'
import PropTypes from 'prop-types'

import { ButtonStyled } from '@/components/Button/styled'
import { ThemeContext } from '@/components/ThemeProvider'

export default class Button extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <ButtonStyled
            theme={theme}
            value={this.props.value}
          >
            {this.props.value}
          </ButtonStyled>
        )}
      </ThemeContext.Consumer>
    )
  }
}

Button.propTypes = {
  value: PropTypes.string,
}
