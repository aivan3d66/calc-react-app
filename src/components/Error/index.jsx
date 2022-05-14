import React from 'react'
import { Error } from '@/components/Error/components'
import PropTypes from 'prop-types'

export default ({ error }) => {
  return (
    <Error id="errorContainer">
      <p>Call 911, App is crashed!</p>
      <p>What's causing? May be: {error}</p>
    </Error>
  )
}

Error.propTypes = {
  error: PropTypes.object,
}
