import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Wizard from './Components/Wizard/Wizard'


export default (
    <Switch>
    <Route exact path='/' component = {Dashboard}/>
    <Route path="/wizard" component = {Wizard}/>
    </Switch>
)