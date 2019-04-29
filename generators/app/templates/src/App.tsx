import * as React from 'react'
import './App.scss'
import { ConnectedRouter } from 'connected-react-router'
import { History } from 'history'
import routes from './routes'

interface AppProps {
    history: History
}
function app({ history } : AppProps) {
    return (
      <ConnectedRouter history={history}>
        {routes}
      </ConnectedRouter>
    )
}

export default app
