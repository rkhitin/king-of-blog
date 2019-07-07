import React, { useEffect, useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { postsSelector, errorMessageSelector, actions } from '../../../redux/posts'

import View from './View'
import Loader from '../../common/Loader'
import ErrorPage from '../../common/ErrorPage'

const ViewContainer = ({ match }) => {
  const currentPostId = match.params.id
  const posts = useSelector(postsSelector)
  const errorMessage = useSelector(errorMessageSelector)

  const [isRemoving, setRemoving] = useState(false)
  const [isModalOpen, setModalOpen] = useState(false)

  const dispatch = useDispatch()
  const remove = useCallback(() => {
    setModalOpen(false)
    setRemoving(true)
    dispatch(actions.remove(currentPostId))
  }, [dispatch, setRemoving])

  const currentPost = posts.find(post => String(post.id) === String(currentPostId))

  useEffect(() => {
    !currentPost && dispatch(actions.fetchOne(currentPostId))
  }, [])

  if (errorMessage) return <ErrorPage message={errorMessage} />

  if (!currentPost) return <Loader />

  const viewProps = {
    ...currentPost,
    remove,
    isRemoving,
    isModalOpen,
    setModalOpen,
  }

  return <View {...viewProps} />
}

export default ViewContainer
