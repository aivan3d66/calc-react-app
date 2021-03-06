import React from 'react'
import { connect } from 'react-redux'

import { CalculatorContainer, CalculatorPanel } from '@/containers/Calculator/styled'
import Display from '@/components/Display/indexClass'
import History from '@/components/History/indexClass'
import KeypadContainer from '@/containers/Keypad/indexClass'

class CalculatorComponent extends React.Component {
  render() {
    return (
      <CalculatorContainer>
        <CalculatorPanel>
          <Display
            expression={this.props.expressionValue}
            expressionHistory={this.props.expressionHistory}
          />
          <KeypadContainer />
        </CalculatorPanel>
        <History history={this.props.history} />
      </CalculatorContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    expressionValue: state.appReducer.expression,
    expressionHistory: state.appReducer.expressionHistory,
    history: state.appReducer.historyList,
  }
}

export default connect(mapStateToProps, {})(CalculatorComponent)
