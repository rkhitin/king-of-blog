import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { postsSelector, errorMessageSelector, actions } from '../../../redux/posts'

import View from './View'
import Loader from '../../common/Loader'
import ErrorPage from '../../common/ErrorPage'

const ViewContainer = ({ match }) => {
  const currentPostId = match.params.id
  const posts = useSelector(postsSelector)
  const errorMessage = useSelector(errorMessageSelector)

  const dispatch = useDispatch()

  const currentPost = posts.find(post => String(post.id) === String(currentPostId))

  useEffect(() => {
    !currentPost && dispatch(actions.fetchOne(currentPostId))
  }, [])

  if (errorMessage) return <ErrorPage message={errorMessage} />

  if (!currentPost) return <Loader />

  return <View {...currentPost} />
}

export default ViewContainer
