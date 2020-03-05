import React, { lazy } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import useReactRouter from 'use-react-router'

import routes from './common/routes'

const Home = lazy(() => import('./screen'))

//const PublicRoutes = lazy(() => import('./public-routes'))

const PublicRoutes = () => {
  const { location } = useReactRouter()

  return (
    <Switch>
      <Route exact path={routes.public.HOME} component={Home} />
    </Switch>
  )
}

const Routers = props => {
  return (
    <React.Fragment>
      <PublicRoutes />
    </React.Fragment>
  )
}

export default React.memo(Routers)
