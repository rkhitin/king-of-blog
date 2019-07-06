import nanoId from 'nanoid'

import { fetchPosts, savePost } from '../../requests'
import {
  setLoading,
  fetchAllFail,
  fetchAllSuccess,
  addItem,
  removeItem,
  addSaveInProgressItemId,
  removeSaveInProgressItemId,
  replaceTempItemIdWithReal,
} from './actions'

const defaultErrorMessage = 'Oops, something going wrong'

export const fetchAll = () => async dispatch => {
  dispatch(setLoading(true))

  try {
    const posts = await fetchPosts()

    if (!Array.isArray(posts)) {
      fetchAllFail(defaultErrorMessage)
      return
    }

    fetchAllSuccess(posts)
  } catch (e) {
    fetchAllFail(e.message)
  }
}

export const save = post => async dispatch => {
  const tempId = nanoId()
  const postWithTempId = { ...post, tempId }

  dispatch(addItem(postWithTempId))

  try {
    const createdPost = await savePost(post)

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
  } catch (e) {
    console.log('show modal!')
  }
}
