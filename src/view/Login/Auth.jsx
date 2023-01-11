import React, { useState } from "react";
import styled from "../../styled/auth/auth.module.css";
import { FlexBox } from "../../styled/styled.module";
import LoginForm from "../../components/LoginForm";

const Auth = () => {
  // login signup toggles

  return (
    <FlexBox
      style={{
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <div className={styled.Heading}>
        Login Section
      </div>
      <LoginForm />
    </FlexBox>
  );
};

export default Auth;
