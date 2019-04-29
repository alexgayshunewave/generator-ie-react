import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { enthusiasm } from './enthusiasm'
import { History } from 'history'

const rootReducer = (history: History) => combineReducers({
    enthusiasm,
    router: connectRouter(history),
})

export default rootReducer
