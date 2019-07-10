import React, { useEffect, useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { postsSelector, errorMessageSelector, actions } from '../../../redux/posts'

import View from './View'
import Loader from '../../common/Loader'
import ErrorPage from '../../common/ErrorPage'

const ViewContainer = ({ match }) => {
  const currentPostId = match.params.id
  const findCurrentPost = post => String(post.id) === currentPostId || String(post.tempId) === currentPostId

  const posts = useSelector(postsSelector)
  const errorMessage = useSelector(errorMessageSelector)

  const [isRemoving, setRemoving] = useState(false)
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false)

  const dispatch = useDispatch()
  const remove = useCallback(() => {
    setDeleteModalOpen(false)
    setRemoving(true)
    dispatch(actions.remove(currentPostId))
  }, [dispatch, setRemoving])

  const currentPost = posts.find(findCurrentPost)

  useEffect(() => {
    !currentPost && dispatch(actions.fetchOne(currentPostId))
  }, [])

  useEffect(() => {
    if (!currentPost || !(currentPost.id && currentPost.tempId)) return

    window.history.pushState('', '', `/${currentPost.id}`)
  }, [currentPost])

  if (errorMessage) return <ErrorPage message={errorMessage} />

  if (!currentPost) return <Loader />

  const viewProps = {
    ...currentPost,
    remove,
    isRemoving,
    isDeleteModalOpen,
    setDeleteModalOpen,
  }

  return <View {...viewProps} />
}

export default ViewContainer
