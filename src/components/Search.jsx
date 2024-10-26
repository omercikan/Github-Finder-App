import React, { Component } from 'react'

export class Search extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      username: ''
    }
  }

  formSubmit = (e) => {
    e.preventDefault();
    

    if(this.state.username === '') {
      this.props.alert('Lütfen kullanıcı adı girin!')
    } else {
      this.props.searchUser(this.state.username)
      this.props.otherUser(this.state.username);
      this.setState({username: ''})
    }
  }

  activeValue = (e) => {
    this.setState({username: e.target.value})
  }

  render() {
    return (
        <form onSubmit={this.formSubmit}>
            <i className="bi bi-search"></i>
            <input type="text" placeholder='Github Kullanıcı adı arayın...' value={this.state.username} onChange={this.activeValue}/>
            <button className='btn btn-primary '>Ara</button>
        </form>
    )
  }
}

export default Search