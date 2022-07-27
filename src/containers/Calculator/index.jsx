import React from 'react'

import { Display } from '@/components/Display'
import { AddCommand, Calculator, DivideCommand, ExponentCommand, MultiplyCommand, RemainderCommand, SubtractCommand } from '@/utils'
import { getRoundedNum } from '@/helpers'
import { CalculatorContainer, CalculatorPanel } from '@/containers/Calculator/styled'
import { History } from '@/components/History'

export default class CalculatorComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstValue: '',
      operator: null,
    }
  }

  calculator = new Calculator()

  handleClick = content => {
    const { firstValue } = this.state

    switch (content) {
      case 'C': {
        this.setState(({ firstValue }) => ({
          firstValue: getRoundedNum(firstValue),
        }))
        break
      }
      case 'CE': {
        this.calculator.reset()
        this.setState({ firstValue: '0' })
        break
      }
      case '+': {
        this.setState({
          operator: '+',
          firstValue: '',
        })
        break
      }
      case '-': {
        this.setState({
          operator: '-',
          firstValue: '',
        })
        break
      }
      case '*': {
        this.setState({
          operator: '*',
          firstValue: '',
        })
        break
      }
      case '/': {
        this.setState({
          operator: '/',
          firstValue: '',
        })
        break
      }
      case '%': {
        this.setState({
          operator: '%',
          firstValue: '',
        })
        break
      }
      case '^': {
        this.setState({
          operator: '**',
          firstValue: '',
        })
        break
      }
      case '=': {
        const { operator, firstValue } = this.state
        if (!this.state.operator) break

        if (operator === '+') {
          this.calculator.execute(new AddCommand(firstValue))
        } else if (operator === '-') {
          this.calculator.execute(new SubtractCommand(firstValue))
        } else if (operator === '*') {
          this.calculator.execute(new MultiplyCommand(firstValue))
        } else if (operator === '/') {
          this.calculator.execute(new DivideCommand(firstValue))
        } else if (operator === '%') {
          this.calculator.execute(new RemainderCommand(firstValue))
        } else if (operator === '**') {
          this.calculator.execute(new ExponentCommand(firstValue))
        }

        this.setState({
          operator: null,
          firstValue: this.calculator.getValue(),
        })
        break
      }

      case '.': {
        if (firstValue.toString().includes('.')) return
        this.setState(({ firstValue }) => ({
          firstValue: `${firstValue}.`,
        }))

        break
      }

      default: {
        if (!this.state.operator) {
          this.calculator.setCurrent(this.state.firstValue + content)
        }
        this.setState(({ firstValue }) => ({
          firstValue: parseFloat(firstValue + content).toString(),
        }))
      }
    }
  }

  render() {
    const { firstValue } = this.state
    const memoryValue = this.calculator.getValue()
    return (
      <CalculatorContainer>
        <CalculatorPanel>
          <Display value={firstValue} memory={memoryValue} />
          <Keypad value={firstValue} handleClick={this.handleClick} />
        </CalculatorPanel>
        <History value={firstValue} memory={memoryValue} />
      </CalculatorContainer>
    )
  }
}
