import React from 'react'
import { Link } from 'react-router'

import { users } from '../../public/things'

export default React.createClass({
  getInitialState () {
    return {
      users: []
    }
  },

  componentDidMount () {
    this.setState({
      users: users
    })
  },

  render () {
    const filteredUsers = this.state.users.filter(user => {
      return user.id === Number(this.props.params.id)
    })
    return (
      <div>
        {filteredUsers.map(user => {
          return (
          <h1 key={user.id}>{user.name}</h1>
          )
        })}
      </div>
    )
  }
})
