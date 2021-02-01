import React from 'react'
import { shallow } from 'enzyme'

import CarrierListing from './index'

it('renders a carrier listing component without crashing', () => {
  shallow(<CarrierListing />)
})
