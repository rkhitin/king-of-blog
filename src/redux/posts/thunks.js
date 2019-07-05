import { fetchPosts } from '../../requests'
import { setLoading, fetchAllFail, fetchAllSuccess } from './actions'

const defaultErrorMessage = 'Oops, something going wrong'

export const fetchAll = () => async dispatch => {
  dispatch(setLoading(true))

  try {
    const posts = await fetchPosts()

    if (Array.isArray(posts)) {
      fetchAllSuccess(posts)
      return
    }

    fetchAllFail(defaultErrorMessage)
  } catch (e) {
    fetchAllFail(e.message)
  }
}
