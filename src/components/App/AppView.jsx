import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'

import { List, View, Create } from '../posts'

const AppView = () => (
  <Container maxWidth="md">
    <Router>
      <Switch>
        <Route exact path="/" component={List} />
        <Route path="/new" component={Create} />
        <Route path="/:id" component={View} />
      </Switch>
    </Router>
  </Container>
)

export default AppView
