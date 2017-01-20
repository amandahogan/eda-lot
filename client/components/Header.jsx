import React from 'react'
import { Link } from 'react-router'


export default React.createClass({
  render () {
    return (
      <div className='header bg-faded'>

        <div className="row">

          <div className="pageTitle col-9 push-3">
            <h1>EDA's Library of Things</h1>
          </div>

          <div className="col-3 pull-9">
            <Link to={'/'} >
              <img src={'../../images/EDAlogo.png'} alt="Logo" width="100px"/>
            </Link>
          </div>

        </div>

      </div>
    )
  }
})
