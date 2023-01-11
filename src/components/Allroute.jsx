import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "../styled/styled.module";
import Home from "../view/home/Home";
import Auth from "../view/Login/Auth";
import Details from "../view/Details/Details";
import { AuthContext } from "../context/AuthContext";
import RequiredAuth from "../hoc/RequiredAuth";

// import splitting here
// const Home = React.lazy(() => import("../view/Home/Home"));
// const Auth = React.lazy(() => import("../view/Login/Auth"));
// const Details = React.lazy(() => import("../view/Details/Details"));

const Allroute = () => {
  const { state } = useContext(AuthContext);

  return (
    <Container>
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        />
        <Route path="/login" element={<Auth />} />
        <Route
          path="/details/:id"
          element={
            <RequiredAuth>
              <Details />
            </RequiredAuth>
          }
        />
      </Routes>
    </Container>
  );
};

export default Allroute;
