import React from 'react'
import { Link } from 'react-router'

import { users, items } from '../../public/things'

export default React.createClass({
  getInitialState () {
    return {
      users: [],
      items:[]
    }
  },

  componentDidMount () {
    this.setState({
      users: users,
      items: items
    })
  },

  render () {
    const user = this.state.users.filter(user => {
      return user.id === Number(this.props.params.id)
    })[0] || {id: 0, name: ''}
    const filteredItems = this.state.items.filter(item => {
      return item.userId === user.id
    })
    return (
      <div>
        <h1>{user.name}</h1>
        <h3>{user.email}</h3>
        <img src={user.image} alt="Card image" width='200px' />
        {filteredItems.map(item => {
          return (
            <div key={item.id} className="card">
                <div className="card-block">
                    <p className="card-text">{item.name}</p>
                </div>
                <img src={item.image} alt="Card image" width='200px' />
            </div>
          )
        })}
      </div>
    )
  }
})
