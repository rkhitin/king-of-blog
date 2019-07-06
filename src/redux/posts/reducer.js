import { actionsTypes } from './constants'

const initState = {
  items: [],
  isLoading: false,
  errorMessage: null,
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionsTypes.setLoading:
      return { ...state, isLoading: action.payload }

    case actionsTypes.fetchAllSuccess:
      return { ...state, items: action.payload, isLoading: false }

    case actionsTypes.fetchAllFail:
      return { ...state, errorMessage: action.payload, isLoading: false }

    case actionsTypes.fetchOneSuccess:
      return { ...state, items: [...state.items, action.payload] }

    case actionsTypes.saveFail:
    case actionsTypes.fetchOneFail:
      return { ...state, errorMessage: action.payload }

    default:
      return state
  }
}

export default reducer
