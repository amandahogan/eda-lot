import React from 'react'

import Header from './Header'
import Categories from './Categories'
import Footer from './Footer'

import { categories } from '../../public/things.js'

export default React.createClass({
  render () {
    return (
      <div>
        <Header />
        <Categories categories={categories} />
        <Footer />
      </div>
    )
  }
})
