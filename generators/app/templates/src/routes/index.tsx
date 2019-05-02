import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/Home'
import Hello from '../components/Hello'
import NavBar from '../components/NavBar'

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact={true} path='/' component={Home} />
      <Route path='/hello' component={Hello} />
    </Switch>
  </div>
)

export default routes
