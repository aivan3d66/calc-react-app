import React from 'react'
import PropTypes from 'prop-types'

import { ErrorContainer } from '@/components/Error/styled'

export const Error = ({ error }) => {
  return (
    <ErrorContainer id="errorContainer">
      <p>Call 911, App is crashed!</p>
      <p>What's causing? May be: {error}</p>
    </ErrorContainer>
  )
}

Error.propTypes = {
  error: PropTypes.string,
}
