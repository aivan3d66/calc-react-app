import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { addValue, deleteLastValue, clearAll, evaluate, clearHistory, getShowHistory, setToggleTheme } from '@/actions'
import { Display } from '@/components/Display'

class Calculator extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Display
          appState={this.props.appState}
          addValue={this.props.addValue}
          deleteLastValue={this.props.deleteLastValue}
          evaluate={this.props.evaluate}
          clearAll={this.props.clearAll}
          clearHistory={this.props.clearHistory}
          getShowHistory={this.props.getShowHistory}
          setToggleTheme={this.props.setToggleTheme}
        />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    appState: state.appReducer,
  }
}

export default connect(mapStateToProps, {
  addValue,
  deleteLastValue,
  clearAll,
  clearHistory,
  getShowHistory,
  setToggleTheme,
  evaluate,
})(Calculator)

Calculator.propTypes = {
  appState: PropTypes.object,
}
