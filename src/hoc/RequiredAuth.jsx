import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RequiredAuth = ({ children }) => {
  const { state } = useContext(AuthContext);

  if (state.data.isAuth) return children;

  return <Navigate to={"/login"} />;
};

export default RequiredAuth;
