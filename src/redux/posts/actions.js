import { actionsTypes } from './constants'

const createAction = actionType => payload => ({
  type: actionType,
  payload,
})

export const setLoading = createAction(actionsTypes.setLoading)

export const replaceTempItemIdWithReal = createAction(actionsTypes.replaceTempItemIdWithReal)

export const addItem = createAction(actionsTypes.addItem)

export const removeItem = createAction(actionsTypes.removeItem)

export const fetchAllSuccess = createAction(actionsTypes.fetchAllSuccess)

export const fetchAllFail = createAction(actionsTypes.fetchAllFail)
