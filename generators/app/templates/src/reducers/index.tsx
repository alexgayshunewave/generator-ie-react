import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { enthusiasm } from './enthusiasm'
import { History } from 'history'
import { IState } from '../components/Hello/component'

export interface RootState {
    enthusiasm: IState
    router: RouterState
}

const rootReducer = (history: History) => combineReducers({
    enthusiasm,
    router: connectRouter(history),
})

export default rootReducer
