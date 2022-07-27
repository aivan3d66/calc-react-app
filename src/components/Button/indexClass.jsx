import React from 'react'
import PropTypes from 'prop-types'

import { ButtonStyled } from '@/components/Button/styled'
import { ThemeContext } from '@/components/ThemeProvider'

export default class Button extends React.Component {
  constructor(props) {
    super(props)
    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  handleButtonClick = value => () => {
    this.props.onKeyClick(value)
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <ButtonStyled
            theme={theme}
            onClick={this.handleButtonClick}
            value={this.props.value}
            key={this.props.value}
            type={this.props.type}
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
  type: PropTypes.string,
  onKeyClick: PropTypes.func,
}
