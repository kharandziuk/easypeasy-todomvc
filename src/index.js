import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import React from 'react'

import { StoreProvider } from 'easy-peasy'
import ReactDOM from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react'

import App from './app'

import store, { persistor } from './store'

function Root() {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </StoreProvider>
  )
}

const rootElement = document.getElementById('root')

ReactDOM.render(<Root />, rootElement)
