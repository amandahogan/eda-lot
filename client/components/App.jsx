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

        <div className="row">
          <div className="col-4">
            <Categories categories={categories} />
          </div>

          <div class ="col-8 pull-4">{this.props.children}</div>
        </div>

        <Footer />
      </div>
    )
  }
})
