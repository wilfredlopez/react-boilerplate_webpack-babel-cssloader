import React from 'react'
//NEW REACT ROUTER
import {Route, Switch, Router } from 'react-router-dom' 

import Dashboard from './../components/Dashboard'
import NotFoundPage from './../components/NotFoundPage'
import LoginPage from './../components/LoginPage'
import createHistory from 'history/createBrowserHistory'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter = ()=> (
    <Router history={history}>
    <div className="">
    <Switch>

        <PublicRoute path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/Dashboard" component={Dashboard} exact={true}/>
        
        <Route component={NotFoundPage}/>
    </Switch>
    </div>
    </Router>
)

export default AppRouter
