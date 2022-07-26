import React, { useContext } from 'react'
import PropTypes from "prop-types"

import { SelectContainer, SelectOption, SelectTitle } from '@/components/Select/styled'
import { ThemeContext } from '@/components/ThemeProvider'

export const Select = ({ name, options, onChange, themeValue }) => {
  const { theme } = useContext(ThemeContext)

  const onChangeCallback = e => {
    onChange(e)
  }

  return (
    <>
      {name && <SelectTitle>{name}</SelectTitle>}
      <SelectContainer
        theme={theme}
        onChange={onChangeCallback}
        value={themeValue}
        id="selectContainer"
      >
        {
          options?.map(option => <SelectOption key={option} value={option}>{option}</SelectOption>)
        }
      </SelectContainer>
    </>
  )
}

Select.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
}
