import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import GlobalStyles from '@/globalStyles'
import store from '@/store'
import { App } from '@/App'
import { ErrorBoundary } from '@/components/ErrorBoundary'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
        <GlobalStyles />
      </ErrorBoundary>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
