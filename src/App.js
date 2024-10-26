import Header from "./components/Header";
import Search from "./components/Search";
import React, { Component } from 'react'
import UserList from "./components/UserList";
import Alert from "./components/Alert";
// import Error from "./components/Error";

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      loading: false,
      user: [],
      otherUser: [],
      error: null,
      // info: null
    }
  }

  getUsersData = (user) => {
    this.setState({loading: true})

    setTimeout(() => {
      fetch("https://api.github.com/search/users?q=" + user)
      .then((response) => response.json())
      .then((data) => this.setState({user: data.items, loading: false}))
    }, 1000);

  }

  getUserOtherData = (user) => {
    fetch("https://api.github.com/users/" + user)
    .then((response) => {
      if(!response.ok) {
        // this.displayError("Kullanıcı bulunamadı!")
        // return null;
      }
      return response.json() 
    })
    .then((data) => this.setState({otherUser: data}))
    // .catch((err) => this.displayError(err))
  }

  /*displayError = (message) => {
    this.setState({info: {err: message}})

    setTimeout(() => {
      this.setState({info: null})
    }, 3000);
  }*/

  displayAlert = (msg) => {
    this.setState({error: {msg, msg}})

    setTimeout(() => {
      this.setState({error: null})
    }, 3000);
  }
  
  render() {
    return (
      <main className="parent-element">
        <Header/>
        
        <Search 
        searchUser={this.getUsersData} 
        otherUser={this.getUserOtherData} 
        loading={this.state.loading} 
        alert={this.displayAlert} 
        error={this.displayError} 
        />

        <Alert showAlert={this.state.error}/>
        {/* <Error showError={this.state.info}/> */}

        <UserList 
        users={this.state.user} 
        otherUser={this.state.otherUser} 
        loading={this.state.loading}/>
      </main>
      );
  }
}

export default App