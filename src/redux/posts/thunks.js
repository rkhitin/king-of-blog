import nanoId from 'nanoid'

import history from '../../history'
import { fetchPosts, savePost, fetchPost, removePost } from '../../requests'
import { setLoading, fetchAllFail, fetchAllSuccess, fetchOneFail, fetchOneSuccess, saveFail } from './actions'

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
  try {
    const response = await savePost(post)
    const createdPost = response.data

    if (!createdPost.id) {
      dispatch(saveFail(defaultErrorMessage))
      return
    }

    history.push(`/${createdPost.id}`)
  } catch (e) {
    dispatch(saveFail(defaultErrorMessage))
  }
}

export const remove = postId => async () => {
  try {
    await removePost(postId)

    history.push(`/`)
  } catch (e) {}
}
