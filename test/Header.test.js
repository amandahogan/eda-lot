import test from 'tape'
import React from 'react'
import { shallow, render } from 'enzyme'

import Header from '../client/components/Header'

test('<Header /> renders correct text', t => {
  const expected = "EDA's Library of Things"
  const wrapper = shallow(<Header />)
  t.is(wrapper.contains(expected), true)
  t.end()
})
