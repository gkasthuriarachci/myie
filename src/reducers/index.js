import { combineReducers } from 'redux'
import interactReducers from './interactReducers'

const appReducer = combineReducers({ ...interactReducers })

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        state = undefined
    }
    return appReducer(state, action)
}
export default rootReducer