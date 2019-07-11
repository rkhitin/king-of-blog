import { actionsTypes } from './constants'

const initState = {
  items: [],
  isLoading: false,
  errorMessage: null,
  reeditedItem: null,
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionsTypes.setLoading:
      return { ...state, isLoading: action.payload }

    case actionsTypes.setErrorMessage:
      return { ...state, errorMessage: action.payload }

    case actionsTypes.fetchAllSuccess:
      return { ...state, items: action.payload, isLoading: false }

    case actionsTypes.fetchAllFail:
      return { ...state, errorMessage: action.payload, isLoading: false }

    case actionsTypes.fetchOneSuccess:
      return { ...state, items: [...state.items, action.payload] }

    case actionsTypes.fetchOneFail:
      return { ...state, errorMessage: action.payload }

    case actionsTypes.addItem:
      return {
        ...state,
        items: [action.payload, ...state.items],
      }

    case actionsTypes.removeItem:
      return {
        ...state,
        items: state.items.filter(item => String(item.id) !== String(action.payload)),
      }

    case actionsTypes.removeTempItem:
      return {
        ...state,
        items: state.items.filter(item => String(item.tempId) !== String(action.payload)),
      }

    case actionsTypes.replaceTempId:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.tempId !== action.payload.tempId) return item

          return { ...item, id: action.payload.id }
        }),
      }

    case actionsTypes.setReeditedItem:
      return {
        ...state,
        reeditedItem: action.payload,
      }

    default:
      return state
  }
}

export default reducer
