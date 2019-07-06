import React from 'react'
import { Container, Button } from '@material-ui/core'

import './ErrorPage.scss'

const ErrorPage = ({ message }) => (
  <Container maxWidth="md">
    <h1 className="ErrorPage_title">Sorry!</h1>
    <h2 className="ErrorPage_message">{message}</h2>

    <div className="ErrorPage_controls">
      <Button variant="contained" onClick={window.location.reload}>
        Reload Page
      </Button>
    </div>
  </Container>
)

export default ErrorPage
