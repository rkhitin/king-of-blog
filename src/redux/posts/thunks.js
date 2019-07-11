import nanoId from 'nanoid'
import { batch } from 'react-redux'

import history from '../../history'
import { fetchPosts, savePost, fetchPost, removePost } from '../../requests'
import {
  setLoading,
  setErrorMessage,
  fetchAllFail,
  fetchAllSuccess,
  fetchOneFail,
  fetchOneSuccess,
  addItem,
  removeItem,
  replaceTempId,
  removeTempItem,
  setReeditedPost,
} from './actions'

const defaultErrorMessage = 'Oops, something going wrong'

export const fetchAll = () => async dispatch => {
  dispatch(setLoading(true))

  try {
    const response = await fetchPosts()
    const posts = response.data

    if (!Array.isArray(posts)) {
      dispatch(fetchAllFail(defaultErrorMessage))
      return
    }

    dispatch(fetchAllSuccess(posts))
  } catch (e) {
    dispatch(fetchAllFail(e.message))
  }
}

export const fetchOne = postId => async dispatch => {
  try {
    const response = await fetchPost(postId)
    const post = response.data

    if (!post) {
      dispatch(fetchOneFail(defaultErrorMessage))
      return
    }

    dispatch(fetchOneSuccess(post))
  } catch (e) {
    dispatch(fetchOneFail(e.message))
  }
}

export const save = post => async dispatch => {
  const tempId = nanoId()
  const postWithTempId = { ...post, tempId }

  dispatch(addItem(postWithTempId))

  history.push(`/${tempId}`)

  try {
    const response = await savePost(post)
    const createdPost = response.data

    if (!createdPost || !createdPost.id) {
      batch(() => {
        dispatch(setReeditedPost(post))
        dispatch(removeTempItem(tempId))
        dispatch(setErrorMessage('ha ha ha'))
      })

      history.push('/new')

      return
    }

    dispatch(replaceTempId({ tempId, id: createdPost.id }))
  } catch (e) {
    dispatch(setErrorMessage(defaultErrorMessage))
    history.push('/new')
  }
}

const removeError = "Can't delete post"

export const remove = postId => async dispatch => {
  dispatch(removeItem(postId))

  history.push(`/`)

  try {
    const response = await removePost(postId)
    const deletedPost = response.data

    if (!deletedPost || !deletedPost.id) {
      dispatch(setErrorMessage(removeError))
    }
  } catch (e) {
    dispatch(setErrorMessage(removeError))
  }
}
