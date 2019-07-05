import { actionsTypes } from './constants'

const createAction = actionType => payload => ({
  type: actionType,
  payload,
})

export const setLoading = createAction(actionsTypes.setLoading)

export const fetchAllSuccess = createAction(actionsTypes.fetchAllSuccess)

export const fetchAllFail = createAction(actionsTypes.fetchAllFail)
