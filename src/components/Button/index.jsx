import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { ButtonStyled } from '@/components/Button/styled'
import { ThemeContext } from '@/components/ThemeProvider'

export const Button = ({ value, onBtnClick }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <ButtonStyled
      theme={theme}
      onClick={onBtnClick}
    >
      {value}
    </ButtonStyled>
  )
}

Button.propTypes = {
  value: PropTypes.string,
  onBtnClick: PropTypes.func,
}
