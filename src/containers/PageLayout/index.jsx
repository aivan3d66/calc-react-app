import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { PageLayoutContainer } from '@/containers/PageLayout/styled'
import { Header } from '@/components/Header'
import { Loader } from '@/components/Loader'
import { ThemeContext } from '@/components/ThemeProvider'

export const PageLayout = ({ children }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <PageLayoutContainer theme={theme}>
      <Header />
      {children || <Loader />}
    </PageLayoutContainer>
  )
}

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
}
