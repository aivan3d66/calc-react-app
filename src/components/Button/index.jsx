import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { ButtonStyled } from '@/components/Button/styled'
import { ThemeContext } from '@/components/ThemeProvider'

export const Button = ({ value }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <ButtonStyled
      theme={theme}
      value={value}
    >
      {value}
    </ButtonStyled>
  )
}

Button.propTypes = {
  value: PropTypes.string,
}
