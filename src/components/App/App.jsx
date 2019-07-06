import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'

import history from '../../history'
import { List, View, Create } from '../posts'

import './App.scss'

const App = () => (
  <Container maxWidth="md">
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={List} />
        <Route path="/new" component={Create} />
        <Route path="/:id" component={View} />
      </Switch>
    </Router>
  </Container>
)

export default App
