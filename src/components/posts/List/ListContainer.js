import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { loadingSelector, postsSelector, actions } from '../../../redux/posts'

import ListView from './ListView'

const ListContainer = () => {
  const isLoading = useSelector(loadingSelector)
  const posts = useSelector(postsSelector)

  const dispatch = useDispatch()
  const fetchAll = () => dispatch(actions.fetchAll())

  useEffect(() => {
    fetchAll()
  }, [])

  return <ListView isLoading={isLoading} posts={posts} />
}

export default ListContainer
