import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render () {
    return (
      <div className='header'>
        <Link to={'/'} ><img src={'../../images/EDAlogo.png'} /></Link>
        <h1>Welcome to EDA's Library of Things</h1>
      </div>
    )
  }
})
