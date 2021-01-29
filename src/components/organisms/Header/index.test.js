import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'

import Header from './index'

it('renders a header without crashing', () => {
  shallow(<Header />)
})
