import React from 'react'
import { Link } from 'react-router-dom'
import { Button, CircularProgress } from '@material-ui/core'

import './List.scss'

const List = (isLoading, posts) => (
  <div>
    <header className="ListView_header">
      <Link to="/new">
        <Button variant="contained">Add Post</Button>
      </Link>
    </header>

    <div>{isLoading ? <CircularProgress value={100} /> : <div>asdf</div>}</div>
  </div>
)

export default List
