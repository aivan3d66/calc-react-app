export const getRoundedNum = str => {
  return str.length > 1 ? str.slice(0, -1) : '0'
}

export const getSliceNum = num => parseFloat(num.toFixed(2))

export const control = testString => {
  testString = testString.replace(/\++/g, '+')
  testString = testString.replace(/--/g, '+')
  testString = testString.replace(/\.\./g, '.')
  testString = testString.replace(/[+-][-+]/g, '-')
  return testString
}

export const calculation = buffString => {
  buffString = buffString.replace(/([^[0-9.]{1})/g, ' $1 ').trim()
  buffString = buffString.replace(/ {1,}/g, ' ')
  const buffArray = buffString.split(/\s/)
  const polishString = []
  const polishStack = []
  let stringId = -1
  let stackId = -1

  const unaryMinus = buffArray[0] === '-'
  if (unaryMinus) {
    buffArray.shift()
  }

  for (let i = 0; i < buffArray.length; i++) {
    switch (buffArray[i]) {
      case '(':
        stackId++
        polishStack[stackId] = buffArray[i]
        break
      case ')':
        while (stackId >= 0 && polishStack[stackId] !== '(') {
          stringId++
          polishString[stringId] = polishStack[stackId]
          stackId--
        }
        stackId--
        break
      case '+':
        while (stackId >= 0 && (polishStack[stackId] === '+' ||
          polishStack[stackId] === '-' ||
          polishStack[stackId] === '*' ||
          polishStack[stackId] === '/')) {
          stringId++
          polishString[stringId] = polishStack[stackId]
          stackId--
        }
        stackId++
        polishStack[stackId] = buffArray[i]
        break
      case '-':
        while (stackId >= 0 && (polishStack[stackId] === '+' ||
          polishStack[stackId] === '-' ||
          polishStack[stackId] === '*' ||
          polishStack[stackId] === '/')) {
          stringId++
          polishString[stringId] = polishStack[stackId]
          stackId--
        }
        stackId++
        polishStack[stackId] = buffArray[i]
        break
      case '*':
        while (stackId >= 0 && (polishStack[stackId] === '*' || polishStack[stackId] === '/')) {
          stringId++
          polishString[stringId] = polishStack[stackId]
          stackId--
        }
        stackId++
        polishStack[stackId] = buffArray[i]
        break
      case '/':
        while (stackId >= 0 && (polishStack[stackId] === '*' || polishStack[stackId] === '/')) {
          stringId++
          polishString[stringId] = polishStack[stackId]
          stackId--
        }
        stackId++
        polishStack[stackId] = buffArray[i]
        break
      case '%':
        while (stackId >= 0 && (polishStack[stackId] === '%' ||
          polishStack[stackId] === '-' ||
          polishStack[stackId] === '*' ||
          polishStack[stackId] === '/')) {
          stringId++
          polishString[stringId] = polishStack[stackId]
          stackId--
        }
        stackId++
        polishStack[stackId] = buffArray[i]
        break
      default:
        stringId++
        polishString[stringId] = buffArray[i]
    }
  }
  while (stackId >= 0) {
    stringId++
    polishString[stringId] = polishStack[stackId]
    stackId--
  }
  stackId = -1
  const stringIdMax = stringId

  let int
  let res

  for (stringId = 0; stringId <= stringIdMax; stringId++) {
    if (unaryMinus) {
      switch (polishString[stringId]) {
        case '+':
          stackId--
          polishStack[stackId] = polishStack[stackId] - polishStack[stackId + 1]
          break
        case '-':
          stackId--
          polishStack[stackId] = polishStack[stackId] + polishStack[stackId + 1]
          break
        default:
          stackId++
          polishStack[stackId] = parseFloat(polishString[stringId])
      }
    } else {
      switch (polishString[stringId]) {
        case '+':
          stackId--
          polishStack[stackId] = polishStack[stackId] + polishStack[stackId + 1]
          break
        case '-':
          stackId--
          polishStack[stackId] = polishStack[stackId] - polishStack[stackId + 1]
          break
        case '*':
          stackId--
          polishStack[stackId] = polishStack[stackId] * polishStack[stackId + 1]
          break
        case '/':
          stackId--
          polishStack[stackId] = polishStack[stackId] / polishStack[stackId + 1]
          break
        case '%':
          stackId--
          int = Math.floor(polishStack[stackId] / polishStack[stackId + 1])
          res = int * 2
          polishStack[stackId] = polishStack[stackId] - res
          break
        default:
          stackId++
          polishStack[stackId] = parseFloat(polishString[stringId])
      }
    }
  }
  return unaryMinus ? -polishStack[stackId] : polishStack[stackId]
}

export const getNormalizeNumber = x => {
  if (x.toString().includes('.')) {
    return x.toPrecision(2)
  }
  return x
}
