import React from 'react'
import { Link } from 'react-router'


export default React.createClass({
  render () {
    return (
      <div className="categories">
        <h2>Categories</h2>
        <nav className="nav flex-column">
         {this.props.categories.map( category => {
           return (<a className="nav-link" key={category.id}><Link to = {`/categories/${category.id}`}>{category.name}</Link></a>)
         } )}

        </nav>
      </div>
    )
  }
})
