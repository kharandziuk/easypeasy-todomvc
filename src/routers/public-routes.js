import React, { lazy } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import useReactRouter from 'use-react-router'

import routes from '../common/routes'

//const NotFound = lazy(() => import('../views/screens/not-found'))

const Home = lazy(() => import('../views/screens/home'))


export default PublicRoutes
