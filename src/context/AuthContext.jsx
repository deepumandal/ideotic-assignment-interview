import React, { createContext, useReducer } from "react";
import { tongle } from "./actions";

export const AuthContext = createContext();

const initialState = {
  loading: false,
  error: false,
  data: {
    isAuth: localStorage.getItem("primary") ? true : false,
    userToken: null || localStorage.getItem("primary"),
  },
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tongle, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
