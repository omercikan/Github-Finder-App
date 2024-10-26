import React, { Component } from 'react'
import Card from './Card'
import Loader from './Loader'

export class UserList extends Component {
  render() {
    return (
        this.props.loading ? <Loader/> :
        <Card user={this.props.users} userOther={this.props.otherUser}/>
    )
  }
}

export default UserList;