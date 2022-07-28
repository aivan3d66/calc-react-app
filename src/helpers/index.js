import { appColoredTheme, appDarkTheme, appLightTheme } from '@/theme'

export const expressionHelper = (temp, isAnswer, reAnswer, expression, dispatch, writePad, equals) => {
  const operatorsString = '/*-+%.'
  const numbersString = '0123456789'

  switch (operatorsString.includes(temp)) {
    case true: {
      inputOperation(operatorsString, expression, temp, isAnswer, reAnswer, dispatch, writePad)
      break
    }
    case false: {
      inputNumber(numbersString, isAnswer, dispatch, equals, writePad, reAnswer, temp)
      break
    }
    default: {
      return 0
    }
  }
}

export const inputDot = (expression, dispatch, writePad, temp) => {
  const tempExpression = `${expression}.`
  if (/\d+\.\d+\.|\d+\.\./.test(tempExpression)) {
    alert('Expression is wrong!')
  } else dispatch(writePad(`${temp}`))
}

export const inputNumber = (numbersString, isAnswer, dispatch, equals, writePad, reAnswer, temp) => {
  if (numbersString.includes(temp)) {
    if (isAnswer) {
      dispatch(equals(temp))
      reAnswer()
    } else dispatch(writePad(temp))
  } else {
    dispatch(writePad(` ${temp} `))
  }
}

export const inputOperation = (operatorsString, expression, temp, isAnswer, reAnswer, dispatch, writePad) => {
  if (temp !== '.') {
    if ((operatorsString.includes(expression[expression.length - 2]) ||
        operatorsString.includes(expression[expression.length - 1])) &&
      expression[expression.length - 2] !== '.') {
      alert('Wrong expression1')
    } else {
      if (isAnswer) {
        reAnswer()
      }
      dispatch(writePad(` ${temp} `))
    }
  } else {
    inputDot(expression, dispatch, writePad, temp)
  }
}

export const getSliceNum = num => parseFloat(num.toFixed(2))

export const initialThemeValue = value => {
  let currentTheme
  if (value === 'Light theme') {
    currentTheme = appLightTheme
  } else if (value === 'Dark theme') {
    currentTheme = appDarkTheme
  } else if (value === 'Colored theme') {
    currentTheme = appColoredTheme
  }
  return currentTheme
}
