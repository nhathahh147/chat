import React from 'react'

import { Route, Switch } from 'react-router-dom';

import Chat from '../pages/Chat'
import Home from '../pages/Home'
import Index from '../pages/Index'
import Login from '../pages/Login'
import Users from '../pages/Users'
import Register from '../pages/Register'


function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/chat' component={Chat}/>
      <Route path='/index' component={Index}/>
      <Route path='/login' component={Login}/>
      <Route path='/users' component={Users}/>
      <Route path='/register' component={Register}/>
    </Switch>
  )
}

export default Routes