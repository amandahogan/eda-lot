import React from 'react'

import About from './About'
import DisplayItems from './DisplayItems'
import UserProfile from './UserProfile'

export default React.createClass({
  render () {
    return (
      <div className='content'>
        {this.props.children}
      </div>
    )
  }
})
