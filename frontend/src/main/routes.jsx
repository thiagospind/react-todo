import React from 'react'
import { Router, Route, Redirect, hashHistory } from "react-router"
//import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import Todo from '../todo/todo'
import About from '../about/about'

export default  props => (
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/todos' />
    </Router>
)