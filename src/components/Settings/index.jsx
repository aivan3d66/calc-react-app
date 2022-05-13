import React from 'react'
import { Settings, Heading, SelectHeading } from '@/components/Settings/components'
import Select from '@/components/Select'
import Button from '@/components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '@/actions'
import { themesOptions } from '@/constants'
import theme from '@/theme'

export default () => {
  const dispatch = useDispatch()
  const { themeValue } = useSelector(state => state.appReducer)
  const schema = themeValue === 'Light theme' ? theme.appLightTheme : themeValue === 'Colored theme' ? theme.colourTheme : theme.appDarkTheme

  const onBtnHandler = () => dispatch(actions.clearHistory())
  const onSelectHandler = value => dispatch(actions.setToggleTheme(value))

  return (
    <Settings id="settingsContainer" schema={schema}>
      <Heading id="settings">Settings</Heading>
      <SelectHeading>Switch theme</SelectHeading>
      <Select
        options={themesOptions}
        themeValue={themeValue}
        onChangeOption={onSelectHandler}
      />
      <Button value="Clear all history" onBtnClick={onBtnHandler}>Clear all history</Button>
    </Settings>
  )
}

