import React from 'react'
import { connect } from 'react-redux'

import { addToHistory, addValue, deleteValue, evaluate, setError } from '@/actions'
import { calculation } from '@/utils'
import { expressionHelper } from '@/helpers'
import Keypad from '@/containers/Keypad/KeypadClass/indexClass'

class KeypadContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answer: false,
    }
  }

  getIsAnswer() {
    this.setState((state, props) => ({
      answer: state.answer === false,
    }))
  }

  render() {
    return <Keypad onKeyClick={this.props.onKeyClick} expressionValue={this.props.expressionValue} />
  }
}

const mapStateToProps = state => {
  return {
    expressionValue: state.appReducer.expression,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onKeyClick: (event, expression) => {
      if (event.target.classList.contains('mainKeypad')) return
      switch (event.target.textContent) {
        case 'CE': {
          dispatch(deleteValue())
          break
        }
        case 'C': {
          dispatch(evaluate(expression.slice(0, expression.length - 1)))
          break
        }
        case '=': {
          try {
            const temp = expression
            const answer = calculation(expression.toString()).toString()
            const t = dispatch(evaluate(answer))
            dispatch(addToHistory(`${temp} = ${t.payload.value}`))
            this.props.getIsAnswer()
          } catch (error) {
            dispatch(setError(error.message))
          }
          break
        }
        default: {
          const temp = event.target.textContent

          expressionHelper(temp, false, false, expression, dispatch, addValue, evaluate)
        }
      }
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KeypadContainer)

