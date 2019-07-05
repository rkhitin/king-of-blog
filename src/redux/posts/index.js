import reducer from './reducer'
import * as pureActions from './actions'
import * as thunks from './thunks'

export const actions = { ...pureActions, ...thunks }

export * from './selectors'

export default reducer
