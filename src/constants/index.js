export * from './actions'
export * from './router'

export const themesOptions = ['Light theme', 'Colored theme', 'Dark theme']

export const buttonValues = [
  [
    { id: 1, value: 'C', type: 'function' },
    { id: 2, value: '7', type: 'number' },
    { id: 3, value: '8', type: 'number' },
    { id: 4, value: '9', type: 'number' },
    { id: 5, value: '*', type: 'operation' },
  ],
  [
    { id: 6, value: '-', type: 'operation' },
    { id: 7, value: '4', type: 'number' },
    { id: 8, value: '5', type: 'number' },
    { id: 9, value: '6', type: 'number' },
    { id: 10, value: '/', type: 'operation' },
  ],
  [
    { id: 11, value: '+', type: 'operation' },
    { id: 12, value: '1', type: 'number' },
    { id: 13, value: '2', type: 'number' },
    { id: 14, value: '3', type: 'number' },
    { id: 15, value: '=', type: 'operation' },
  ],
  [
    { id: 16, value: '.', type: 'number' },
    { id: 17, value: '%', type: 'operation' },
    { id: 18, value: '0', type: 'number' },
    { id: 19, value: '^', type: 'operation' },
    { id: 20, value: 'CE', type: 'function' },
  ],
]
