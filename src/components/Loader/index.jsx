import React from 'react'

import theme from '@/theme'

import { LoaderContainer } from './styled'

const LOADER_SIZE = 100

export const Loader = () => {
  return (
    <LoaderContainer
      type="Bars"
      color={theme.colors.secondary}
      height={LOADER_SIZE}
      width={LOADER_SIZE}
    />
  )
}
