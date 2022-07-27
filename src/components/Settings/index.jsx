import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { themesOptions } from '@/constants'
import { toggleTheme } from '@/actions'
import {
  SettingsContainer,
  SettingsTitle,
  SettingsButton,
} from '@/components/Settings/styled'
import { ThemeContext } from '@/components/ThemeProvider'
import { Select } from '@/components/Select'
import { historyListStorage } from '@/utils'

export const Settings = () => {
  const dispatch = useDispatch()

  const { changeTheme, theme } = useContext(ThemeContext)
  const { themeValue } = useSelector(state => state.appReducer)

  const handleClear = () => {
    localStorage.removeItem('history')
    historyListStorage.length = 0
  }

  const onChangeSelectOption = e => {
    changeTheme(e.target.value)
    dispatch(toggleTheme(e.target.value))
  }

  return (
    <SettingsContainer id="settingsContainer" theme={theme}>
      <SettingsTitle id="settings">Settings</SettingsTitle>
      <Select
        name="Switch theme"
        options={themesOptions}
        themeValue={themeValue}
        onChange={onChangeSelectOption}
      />
      <SettingsButton
        value="Clear all history"
        onClick={handleClear}
        theme={theme}
      >
        Clear all history
      </SettingsButton>
    </SettingsContainer>
  )
}

