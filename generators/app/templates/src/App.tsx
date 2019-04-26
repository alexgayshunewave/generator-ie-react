import * as React from 'react'
import './App.scss'
import Hello from './components/hello'

const logo = require('./logo.svg')

function app() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <p className='App-intro'>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Hello name='Typescript'/>
      </div>
    )
}

export default app
