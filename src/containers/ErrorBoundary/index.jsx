import React from 'react'
import Error from '@/components/Error'
import { connect } from 'react-redux'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: '' }
  }

  static getDerivedStateFromError(error) {
    return { hasError: error.message }
  }

  render() {
    if (this.state.hasError) {
      return <Error error={this.state.hasError}/>
    }
    return this.props.children
  }
}

const mapStateToProps = state => {
  return {
    appState: state.appReducer,
  }
}

export default connect(mapStateToProps, {})(ErrorBoundary)
