import React from 'react'
import Hello from './component'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
    shallow(<Hello />)
})
