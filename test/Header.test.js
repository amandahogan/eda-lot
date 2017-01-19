import test from 'tape'
import React from 'react'
import { shallow, render } from 'enzyme'

import Header from '../client/components/Header'

test('<Header /> renders correct text', t => {
  const expected = "Welcome to EDA's Library of Things"
  const wrapper = shallow(<Header />)
  t.equal(wrapper.text(), expected)
  t.end()
})
