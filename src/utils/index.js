import { getSliceNum } from '@/helpers'

class Calculator {
  constructor() {
    this.value = 0
    this.history = []
  }

  executeCommand(command) {
    this.value = command.execute(this.value)
    this.history.push(command)
  }

  undo() {
    const command = this.history.pop()
    this.value = command.undo(this.value)
  }
}

class AddCommand {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd
  }

  execute(currentValue) {
    return currentValue + this.valueToAdd
  }

  undo(currentValue) {
    return currentValue - this.valueToAdd
  }
}

class SubtractCommand {
  constructor(valueToSubtract) {
    this.valueToSubtract = valueToSubtract
  }

  execute(currentValue) {
    return currentValue - this.valueToSubtract
  }

  undo(currentValue) {
    return currentValue + this.valueToSubtract
  }
}

class MultiplyCommand {
  constructor(valueToMultiply) {
    this.valueToMultiply = valueToMultiply
  }

  execute(currentValue) {
    return currentValue * this.valueToMultiply
  }

  undo(currentValue) {
    return currentValue / this.valueToMultiply
  }
}

class DivideCommand {
  constructor(valueToDivide) {
    this.valueToDivide = valueToDivide
  }

  execute(currentValue) {
    return currentValue / this.valueToDivide
  }

  undo(currentValue) {
    return currentValue * this.valueToDivide
  }
}

class RemainderDivideCommand {
  constructor(valueToDivide) {
    this.valueToDivide = valueToDivide
  }

  execute(currentValue) {
    return currentValue % this.valueToDivide
  }

  undo() {
    return 0
  }
}

const operationPriorities = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2,
  '%': 2,
}

const numbersStack = []
const operationsStack = []

function priority(value, operator) {
  switch (operator) {
    case '+': {
      return new AddCommand(value)
    }
    case '-': {
      return new SubtractCommand(value)
    }
    case '*': {
      return new MultiplyCommand(value)
    }
    case '/': {
      return new DivideCommand(value)
    }
    case '%': {
      return new RemainderDivideCommand(value)
    }
    default: {
      return 0
    }
  }
}

const calculator = new Calculator()

export const calculation = expressionString => {
  const helper = position => {
    if (operationsStack[operationsStack.length - 1] === '-' &&
      operationsStack[operationsStack.length - 2] === '(' &&
      expressionString[position - 3] === '(') {
      calculator.executeCommand(new AddCommand(parseFloat(0)))

      calculator.executeCommand(priority(
        parseFloat(numbersStack[numbersStack.length - 1]),
        operationsStack[operationsStack.length - 1],
      ))
      numbersStack.pop()
    } else {
      calculator.executeCommand(new AddCommand(parseFloat(numbersStack[numbersStack.length - 2])))

      calculator.executeCommand(priority(
        parseFloat(numbersStack[numbersStack.length - 1]),
        operationsStack[operationsStack.length - 1],
      ))
      numbersStack.pop()
      numbersStack.pop()
    }

    numbersStack.push(parseFloat(calculator.value))
    operationsStack.pop()
    calculator.value = 0
  }

  try {
    expressionString = expressionString.split(' ').filter(x => x !== '').map(item => {
      if (/^\.\d+$/.test(item)) {
        return (0 + item)
      }
      return item
    })
    for (let i = 0; i < expressionString.length; i++) {
      if (/^\d+$|^\d+\.\d+$/.test(expressionString[i]) && expressionString[i + 1] === '(') {
        expressionString.splice(i + 1, 0, '*')
        i++
      }
    }

    for (let i = 0; i < expressionString.length; i++) {
      if (!isNaN(parseFloat(expressionString[i]))) numbersStack.push(expressionString[i])

      if (operationsStack.length) {
        if (operationPriorities[operationsStack[operationsStack.length - 1]] >=
          operationPriorities[expressionString[i]] && expressionString[i] !== '(' &&
          expressionString[i] !== ')') {
          helper(i)
        }
        if (expressionString[i] === ')') {
          if (expressionString[i - 2] === '(') {
            expressionString.pop()
            operationsStack.pop()
            expressionString.splice(expressionString.length - 2, 1)
            continue
          }

          for (let j = operationsStack.length - 1; j > 0; j--) {
            helper(i)
            if (operationsStack[j - 1] === '(') {
              operationsStack.pop()
              break
            }
          }
        }
      }
      if (expressionString[i] !== ')' && isNaN(parseFloat(expressionString[i]))) operationsStack.push(expressionString[i])
    }

    while (operationsStack.length > 0) {
      helper()
    }

    // eslint-disable-next-line prefer-destructuring
    const res = numbersStack[0]
    numbersStack.length = 0
    return getSliceNum(res)
  } catch (error) {
    console.log(error)
  } finally {
    numbersStack.length = 0
    operationsStack.length = 0
    calculator.value = 0
  }
}

