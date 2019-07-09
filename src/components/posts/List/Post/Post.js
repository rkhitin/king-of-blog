import React from 'react'
import PropTypes from 'prop-types'
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

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
}

export default Post
