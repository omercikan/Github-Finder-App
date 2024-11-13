import React, { useEffect, useReducer } from "react";
import AlertReducer from "../reducers/alertReducer";

export const AlertContext = React.createContext();

const AlertContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AlertReducer, null);

  useEffect(() => {
    if (state) {
      const timer = setTimeout(() => {
        dispatch({ type: "REMOVE_ALERT" });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  return (
    <AlertContext.Provider value={{ state, dispatch }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContextProvider;
