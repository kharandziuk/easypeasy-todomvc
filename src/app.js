import React, { useEffect, useState, Suspense } from 'react'

import { BrowserRouter } from 'react-router-dom'

import useTheme from './hooks/theme.hook'
import Routers from './routers'
import { useStoreState } from './store'
import Loader from './views/components/loader'

const App = () => {
  const { theme } = useTheme()

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const { token: tokenStore } = useStoreState(state => state.user)

  useEffect(() => {
    setIsAuthenticated(Boolean(tokenStore))
  }, [tokenStore])

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routers isAuthenticated={isAuthenticated} />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
