import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const RequiredAuth = ({children}) => {
  const { state } = useContext(AuthContext);

  if (state.data.isAuth) return children;

  return <Navigate to={"/login"} />;
};

export default RequiredAuth;
