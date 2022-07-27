import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { ButtonStyled } from '@/components/Button/styled'
import { ThemeContext } from '@/components/ThemeProvider'

export const Button = ({ value, onKeyClick, type }) => {
  const { theme } = useContext(ThemeContext)

  const handleButtonClick = value => () => {
    onKeyClick(value)
  }

  return (
    <ButtonStyled
      theme={theme}
      onClick={handleButtonClick(value)}
      value={value}
      key={value}
      type={type}
    >
      {value}
    </ButtonStyled>
  )
}

Button.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  onKeyClick: PropTypes.func,
}
