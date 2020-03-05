import React, { lazy } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import useReactRouter from 'use-react-router'

const Home = lazy(() => import('./screen'))

const PublicRoutes = () => {
  const { location } = useReactRouter()

  return (
    <Switch>
      <Route exact path={routes.INDEX} component={Home} />
    </Switch>
  )
}

const Router = props => {
  return (
    <React.Fragment>
      <PublicRoutes />
    </React.Fragment>
  )
}
const routes = {
  INDEX: '/',
}

export { routes, Router }

export default React.memo(Router)
