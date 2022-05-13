import React from 'react'
import { PageLayout } from '@/pages/PageLayout/components'
import Header from '@/components/Header'
import PropTypes from 'prop-types'
import Loader from '@/components/Loader'
import { Card } from '@/pages/Home/components'
import { useSelector } from 'react-redux'
import theme from '@/theme'

export default ({ children }) => {
  const {themeValue} = useSelector(state => state.appReducer)
  const schema = themeValue === 'Light theme' ? theme.appLightTheme : themeValue === 'Colored theme' ? theme.colourTheme : theme.appDarkTheme

  return (
    <PageLayout schema={schema}>
      <Header />
      {
        children || <Card>
                      <Loader />
                    </Card>
      }
    </PageLayout>
  )
}

PageLayout.propTypes = {
  children: PropTypes.array,
}