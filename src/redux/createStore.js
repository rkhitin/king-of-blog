import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import createRootReducer from './reducers'

const configureStore = () => {
  return createStore(createRootReducer(), applyMiddleware(thunk))
}

export default configureStore
