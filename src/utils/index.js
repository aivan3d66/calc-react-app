import { getSliceNum } from '@/helpers'

export const historyListStorage = JSON.parse(localStorage.getItem('history')) || []

function add(x, y) {
  historyListStorage.push({ firstValue: x, memory: y, operator: '+' })
  return isNaN(x + y) ? 0 : x + y
}

function subtract(x, y) {
  historyListStorage.push({ firstValue: x, memory: y, operator: '-' })
  return isNaN(x - y) ? 0 : x - y
}

function multiply(x, y) {
  historyListStorage.push({ firstValue: x, memory: y, operator: '*' })
  return isNaN(x * y) ? 0 : x * y
}

function divide(x, y) {
  historyListStorage.push({ firstValue: x, memory: y, operator: '/' })
  return isNaN(x / y) ? 0 : x / y
}

function remove(x, y) {
  historyListStorage.push({ firstValue: x, memory: y, operator: '%' })
  return isNaN(x % y) ? 0 : x % y
}

function exponent(x, y) {
  historyListStorage.push({ firstValue: x, memory: y, operator: '^' })
  return isNaN(x ** y) ? 0 : x ** y
}

class Command {
  constructor(execute, undo, value) {
    this.execute = execute
    this.undo = undo
    this.value = value
  }
}

export class AddCommand extends Command {
  constructor(value) {
    super(add, subtract, Number(value))
  }
}

export class SubtractCommand extends Command {
  constructor(value) {
    super(subtract, add, Number(value))
  }
}

export class MultiplyCommand extends Command {
  constructor(value) {
    super(multiply, divide, Number(value))
  }
}

export class DivideCommand extends Command {
  constructor(value) {
    super(divide, multiply, Number(value))
  }
}

export class RemainderCommand extends Command {
  constructor(value) {
    super(remove, multiply, Number(value))
  }
}

export class ExponentCommand extends Command {
  constructor(value) {
    super(exponent, multiply, Number(value))
  }
}

export class Calculator {
  constructor() {
    this.current = 0
    this.history = []
  }

  execute(command) {
    this.current = command.execute(this.current, command.value)
    this.history.push(command)
    localStorage.setItem('history', JSON.stringify(historyListStorage))
  }

  undo() {
    const command = this.history.pop()
    this.current = command.undo(this.current, command.value)
  }

  setCurrent(value) {
    this.current = Number(value)
  }

  getValue() {
    return getSliceNum(this.current)
  }

  reset() {
    this.current = 0
    this.history = []
  }
}
