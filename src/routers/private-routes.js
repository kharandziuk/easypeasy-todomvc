import React, { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

import routes from '../common/routes'

const NotFound = lazy(() => import('../views/screens/not-found'))


const PrivateRouters = () => {
  const {
  } = routes

  return (
    <React.Fragment>
      <Switch>
      </Switch>
    </React.Fragment>
  )
}

export default React.memo(PrivateRouters)
