import React from "react";
import { FlexBox } from "../styled/styled.module";
import styled from "../styled/navbar/navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styled.NavContainer}>
      {" "}
      <FlexBox style={{
        padding : '0rem 2%'
      }}>
        <div>Dog</div>
        <div>Login</div>
      </FlexBox>{" "}
    </div>
  );
};

export default Navbar;
