import React, { useEffect, useState, Suspense } from 'react'

import { BrowserRouter } from 'react-router-dom'

import useTheme from './hooks/theme.hook'
import Routers from './routes'
import { useStoreState } from './store'

const Loader = () => <>Loader</>

const App = () => {
  const { theme } = useTheme()

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routers isAuthenticated={isAuthenticated} />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
