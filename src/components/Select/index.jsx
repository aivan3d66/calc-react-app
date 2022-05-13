import React from 'react'
import PropTypes from 'prop-types'
import {Select} from "@/components/Select/components"

export default ({options, onChange, onChangeOption, themeValue}) => {
  const mappedOptions = options
    ? options.map((o, i) => <option key={o + '-' + i}>{o}</option>)
    : []

  const onChangeCallback = e => {
    onChangeOption && onChangeOption(e.currentTarget.value)
    onChange && onChange(e)
  }

  return (
    <Select
      onChange={onChangeCallback}
      value={themeValue}
      id="selectContainer"
    >
      {mappedOptions}
    </Select>
  )
}

Select.propTypes = {
  options: PropTypes.array,
  onChange: PropTypes.func,
  onChangeOption: PropTypes.func,
}
