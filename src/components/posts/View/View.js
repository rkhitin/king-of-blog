import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

import './View.scss'

const View = ({ title, content, categories }) => (
  <div>
    <header className="View_header">
      <Link to="/">
        <Button variant="contained">Back to posts</Button>
      </Link>

      <Button variant="contained">Delete</Button>
    </header>

    <div className="View_text">{title}</div>
    <div className="View_text">Categories: {categories}</div>
    <div className="View_text">{content}</div>
  </div>
)

export default View
