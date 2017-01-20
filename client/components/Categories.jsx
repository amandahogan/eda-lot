import React from 'react'
import { Link } from 'react-router'


export default React.createClass({
  render () {
    return (
      <div>
        <h2>Categories</h2>
        <ul>
         {this.props.categories.map( category => {
           return (<li key={category.id}><Link to = {`/categories/${category.id}`}>{category.name}</Link></li>)
         } )}

        </ul>
      </div>
    )
  }
})
