import nanoId from 'nanoid'

import history from '../../history'
import { fetchPosts, savePost, fetchPost } from '../../requests'
import {
  setLoading,
  fetchAllFail,
  fetchAllSuccess,
  addItem,
  fetchOneFail,
  fetchOneSuccess,
  replaceTempItemIdWithReal,
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

  try {
    const response = await savePost(post)
    const createdPost = response.data

    if (!createdPost.id) {
      console.log('show modal')
      return
    }

    dispatch(
      replaceTempItemIdWithReal({
        tempId,
        realId: createdPost.id,
      })
    )

    history.push('/')
  } catch (e) {
    console.log('show modal!')
  }
}
