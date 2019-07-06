import React from 'react'
import { Link } from 'react-router-dom'
import { Paper } from '@material-ui/core'

import './Post.scss'

const Post = ({ id, title, categories }) => (
  <Link to={id && `/${id}`}>
    <Paper className="List_Post">
      <div>{title}</div>
      <div>{categories}</div>
    </Paper>
  </Link>
)

export default Post
