import React from 'react'

import { PageLayout } from '@/containers/PageLayout'
import CalculatorComponent from '@/containers/Calculator'

const HomePage = () => {
  return (
    <PageLayout>
      <CalculatorComponent />
    </PageLayout>
  )
}

export default HomePage
