import React, { useReducer } from "react";
import UsersReducer from "../reducers/usersReducer";

export const UsersContext = React.createContext();

const initialState = {
  users: [],
  otherUsers: [],
  loading: false,
};

const UsersContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(UsersReducer, initialState);

  const getUsersData = (user) => {
    dispatch({ type: "SET_LOADING" });

    setTimeout(() => {
      fetch("https://api.github.com/search/users?q=" + user)
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: "SEARCH_USERS",
            users: data.items ? data.items : data,
          });
        });
    }, 1000);
  };

  const getUserOtherData = (user) => {
    fetch("https://api.github.com/users/" + user)
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: "SET_OTHER_USERS",
          otherUsers: data,
        })
      );
  };

  return (
    <UsersContext.Provider value={{ getUsersData, getUserOtherData, state }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
