import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import './index.scss'

import React from 'react'

import { StoreProvider } from 'easy-peasy'
import ReactDOM from 'react-dom'

import App from './app'

import store from './store'

function Root() {
  return (
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  )
}

const rootElement = document.getElementById('root')

ReactDOM.render(<Root />, rootElement)
