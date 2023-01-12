import React, { useContext } from "react";
import { FlexBox } from "../styled/styled.module";
import styled from "../styled/navbar/navbar.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { state, dispatch } = useContext(AuthContext);

  return (
    <div className={styled.NavContainer}>
      {" "}
      <FlexBox
        style={{
          padding: "0rem 2%",
          // border: "1px solid black",
        }}
      >
        <Link className={styled.logo} to={"/"}>
          {" "}
          Home{" "}
        </Link>
        {state.data.isAuth ? (
          <div onClick={() => dispatch({ type: "LOGOUT" })}>LOGOUT</div>
        ) : (
          <Link className={styled.login} to={"/login"}>
            <div>LOGIN</div>
          </Link>
        )}
      </FlexBox>{" "}
    </div>
  );
};

export default Navbar;
