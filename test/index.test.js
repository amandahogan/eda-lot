import test from 'tape'
import React from 'react'
import { shallow, render } from 'enzyme'

import App from '../client/components/App'


test('<App /> includes <Header /> component', t => {
  const wrapper = render(<App />)
  const actual = wrapper.find('div.header').length > 0
  t.equal(actual, true)
  t.end()
})

test('<App /> includes three components', t => {
  const wrapper = render(<App />)
  const actual = wrapper.find('div').length >= 3
  t.equal(actual, true)
  t.end()
})
