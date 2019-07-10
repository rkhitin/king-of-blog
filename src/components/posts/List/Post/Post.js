import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { Paper } from '@material-ui/core'

import './Post.scss'

const Post = ({ id, tempId, title, categories }) => (
  <Link to={`/${id || tempId}`}>
    <Paper className={classNames('List_Post', { List_temp: !id })}>
      <div>{title}</div>
      <div>{categories}</div>
    </Paper>
  </Link>
)

Post.propTypes = {
  id: PropTypes.number,
  tempId: PropTypes.string,
  title: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
}

export default Post
