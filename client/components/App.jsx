import React from 'react'

import Header from './Header'
import Categories from './Categories'
import Footer from './Footer'

import { categories } from '../../public/things.js'

export default React.createClass({
  render () {
    return (
      <div className="container-fluid">
        <Header />

        <div className="row container-fluid">
          <div className="col-md-3">
            <Categories categories={categories} />
          </div>

          <div className="content col-md-9">{this.props.children}</div>
        </div>

        <Footer />
      </div>
    )
  }
})
