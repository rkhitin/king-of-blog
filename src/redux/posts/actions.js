import { actionsTypes } from './constants'

const createAction = actionType => payload => ({
  type: actionType,
  payload,
})

export const setLoading = createAction(actionsTypes.setLoading)

export const fetchAllSuccess = createAction(actionsTypes.fetchAllSuccess)

export const fetchAllFail = createAction(actionsTypes.fetchAllFail)

export const fetchOneSuccess = createAction(actionsTypes.fetchOneSuccess)

export const fetchOneFail = createAction(actionsTypes.fetchOneFail)

export const saveFail = createAction(actionsTypes.saveFail)

export const addItem = createAction(actionsTypes.addItem)

export const removeItem = createAction(actionsTypes.removeItem)

export const replaceTempId = createAction(actionsTypes.replaceTempId)
