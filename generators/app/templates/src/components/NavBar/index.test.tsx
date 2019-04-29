import React from 'react'
import NavBar from './index'
import { shallow } from 'enzyme'

it('renders without crashing', () => {
    shallow(<NavBar />);
});
