import React, { useContext } from "react";
import User from "./User";
import Loader from "./Loading";
import { UsersContext } from "../context/usersContext";

const UserList = () => {
  const {state} = useContext(UsersContext);

  return state.loading ? <Loader /> : <User user={state.users} userOther={state.otherUsers} />;
};

export default UserList;
