import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

import Post from './Post'

import './List.scss'

const List = ({ posts }) => {
  const renderPosts = () => posts.map(post => <Post key={post.id || post.tempId} {...post} />)

  return (
    <div>
      <header className="List_header">
        <Link to="/new">
          <Button color="primary" variant="contained">
            Add Post
          </Button>
        </Link>
      </header>

      <div className="List_items">{renderPosts()}</div>
    </div>
  )
}

export default List
