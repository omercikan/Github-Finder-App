import Header from "./components/Header";
import Search from "./components/Search";
import React, {useEffect, useState } from 'react'
import UserList from "./components/UserList";
import Alert from "./components/Alert";

function App() {
  const [user, setUser] = useState([]);
  const [otherUser, setOtherUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUsersData = (user) => {
    setLoading(true)

  setTimeout(() => {
    fetch("https://api.github.com/search/users?q=" + user)
    .then((response) => response.json())
    .then((data) => setUser(data), setLoading(false))
    .catch((error) => setError(error), setLoading(false))
    }, 1000);
  }

  const getUserOtherData = (user) => {
    fetch("https://api.github.com/users/" + user)
    .then((response) => response.json())
    .then((data) => setOtherUser(data))
    .catch((error) => setError(error));
  }

  useEffect(() => {
    if(error) {
      const timer = setTimeout(() => {
        setError(null)
      }, 3000);
      return () => clearTimeout(timer)
    }
  }, [error])

  return (
    <main className="parent-element">
      <Header/> 

      <Search 
      searchUser={getUsersData} 
      otherUser={getUserOtherData} 
      loading={loading} 
      alert={setError}/>

      <Alert showAlert={error}/>

      <UserList 
      users={user} 
      otherUser={otherUser} 
      loading={loading}/>
    </main>
  )
}

export default App