import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import createRootReducer from './reducers'
import { routerMiddleware } from 'connected-react-router'
import { AppContainer } from 'react-hot-loader'

export const history = createBrowserHistory()

const store = createStore(
    createRootReducer(history),
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history),
            thunk,
        ),
    ),
)
const render = () => {
    ReactDOM.render(
        <Provider store={store}><AppContainer><App history={history}/></AppContainer></Provider>,
        document.getElementById('root'))
}

// Render Once
render()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
