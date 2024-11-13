import React, { useContext, useState } from "react";
import { UsersContext } from "../context/usersContext";
import { AlertContext } from "../context/alertContext";

const Search = () => {
  const { getUsersData, getUserOtherData } = useContext(UsersContext);
  const [username, setUsername] = useState("");
  const { dispatch } = useContext(AlertContext);

  const formSubmit = (e) => {
    e.preventDefault();

    if (username === "") {
      dispatch({type: "SET_ALERT", error: "Lütfen kullanıcı adı girin!"})
    } else {
      getUsersData(username);
      getUserOtherData(username);
      setUsername("");
    }
  };

  return (
    <form onSubmit={formSubmit}>
      <i className="bi bi-search"></i>
      <input
        type="text"
        placeholder="Github Kullanıcı adı arayın..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="btn btn-primary ">Ara</button>
    </form>
  );
};

export default Search;
