import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { loadingSelector, postsSelector, errorMessageSelector, actions } from '../../../redux/posts'

import List from './List'
import Loader from '../../common/Loader'

const ListContainer = () => {
  const isLoading = useSelector(loadingSelector)
  const posts = useSelector(postsSelector)
  const errorMessage = useSelector(errorMessageSelector)

  const dispatch = useDispatch()
  const fetchAll = () => dispatch(actions.fetchAll())

  useEffect(() => {
    if (!posts.length) fetchAll()
  }, [])

  if (isLoading || errorMessage) return <Loader />

  return <List isLoading={isLoading} posts={posts} />
}

export default ListContainer
