import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "../styled/styled.module";
import Home from "../view/home/Home";
import Auth from "../view/Login/Auth";
import Details from "../view/Details/Details";
import RequiredAuth from "../hoc/RequiredAuth";

// import splitting here
// const Home = React.lazy(() => import("../view/Home/Home"));
// const Auth = React.lazy(() => import("../view/Login/Auth"));
// const Details = React.lazy(() => import("../view/Details/Details"));
// const RequiredAuth = React.lazy(() => import("../hoc/RequiredAuth"));

const Allroute = () => {
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
