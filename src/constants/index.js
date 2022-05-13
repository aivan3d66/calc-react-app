import { ACTIONS } from '@/constants/actions'

export * from './actions'
export * from './router'

export const themesOptions = ['Light theme', 'Colored theme', 'Dark theme']

export const btnValues = [
  {
    value: 'C',
    dispatchType: ACTIONS.CLEAR,
  },
  {
    value: '7',
    dispatchType: ACTIONS.ADD_VALUE,
  },
  {
    value: '8',
    dispatchType: ACTIONS.ADD_VALUE,
  },
  {
    value: '9',
    dispatchType: ACTIONS.ADD_VALUE,
  },
  {
    value: '*',
    dispatchType: ACTIONS.ADD_VALUE,
  },

  {
    value: '-',
    dispatchType: ACTIONS.ADD_VALUE,
  },
  {
    value: '4',
    dispatchType: ACTIONS.ADD_VALUE,
  },
  {
    value: '5',
    dispatchType: ACTIONS.ADD_VALUE,
  },
  {
    value: '6',
    dispatchType: ACTIONS.ADD_VALUE,
  },
  {
    value: '/',
    dispatchType: ACTIONS.ADD_VALUE,
  },
  {
    value: '+',
    dispatchType: ACTIONS.ADD_VALUE,
  },
  {
    value: '1',
    dispatchType: ACTIONS.ADD_VALUE,
  },
  {
    value: '2',
    dispatchType: ACTIONS.ADD_VALUE,
  },
  {
    value: '3',
    dispatchType: ACTIONS.ADD_VALUE,
  },
  {
    value: '=',
    dispatchType: ACTIONS.EVALUATE,
  },
  {
    value: '.',
    dispatchType: ACTIONS.ADD_VALUE,
  },
  {
    value: '(',
    dispatchType: ACTIONS.ADD_VALUE,
  },
  {
    value: '0',
    dispatchType: ACTIONS.ADD_VALUE,
  },
  {
    value: ')',
    dispatchType: ACTIONS.ADD_VALUE,
  },
  {
    value: 'CE',
    dispatchType: ACTIONS.DELETE_VALUE,
  },
  {
    value: '%',
    dispatchType: ACTIONS.ADD_VALUE,
  },
]
