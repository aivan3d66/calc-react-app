import React from 'react'
import { btnValues } from '@/constants'
import { connect } from 'react-redux'
import { actions } from '@/actions'
import Display from '@/components/Display'

const { addValue, deleteLastValue, clearAll, evaluate, clearHistory, getShowHistory, setToggleTheme } = actions

class Calculator extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Display
          btnValues={btnValues}
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
