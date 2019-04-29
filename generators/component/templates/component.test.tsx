import React from 'react'
import <%= componentName %> from './component'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
    shallow(<<%= componentName %> />)
});