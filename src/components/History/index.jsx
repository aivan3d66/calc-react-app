import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { History } from '@/components/History/components'
import theme from '@/theme'

export default ({ historyList }) => {
  const { themeValue } = useSelector(state => state.appReducer)
  const schema = themeValue === 'Light theme' ? theme.appLightTheme : themeValue === 'Colored theme' ? theme.colourTheme : theme.appDarkTheme

  return (
    <History schema={schema} id="historyContainer">
      <h2>History</h2>
      <ul>
        {
          historyList.map(item => {
            return <li key={item}>{item}</li>
          })
        }
      </ul>
    </History>
  )
}

History.propTypes = {
  historyList: PropTypes.array,
}
