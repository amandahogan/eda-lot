import React from 'react'
import { Link } from 'react-router'

import { items } from '../../public/things'

export default React.createClass({
  getInitialState () {
    return {
      items: []
    }
  },

  componentDidMount () {
    this.setState({
      items: items
    })
  },

  render () {
    const filteredItems = this.state.items.filter(item => {
      return item.categoryId === Number(this.props.params.id)
    })
    return (
      <div>
        <ul>
          {filteredItems.map(item => {
            return (
              <Link key={item.id} to={`/items/${item.id}`}>{item.name}</Link>
            )
          })}
        </ul>
      </div>
    )
  }
})
