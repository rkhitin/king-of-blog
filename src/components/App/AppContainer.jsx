import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { postsSelector, loadingSelector, actions } from '../../redux/posts'

import AppView from './AppView'

const AppContainer = () => {
  const posts = useSelector(postsSelector)
  const isLoading = useSelector(loadingSelector)

  const dispatch = useDispatch()
  const fetchPosts = () => dispatch(actions.fetchAll())

  useEffect(() => {
    fetchPosts()
  }, [])

  console.log('posts', posts, 'loading', isLoading)

  return <AppView />
}

export default AppContainer
