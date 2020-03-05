import React, { useState, Suspense } from 'react'

import { BrowserRouter } from 'react-router-dom'

import Routers from './routes'

const Loader = () => <>Loader</>


const App = () => {
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
