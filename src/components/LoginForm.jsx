import React, { useContext, useEffect, useState } from "react";
import styled from "../styled/auth/auth.module.css";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const [loginquery, setLoginquery] = useState({});
  const { state, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  // login email and password
  const handleloginquery = (e) => {
    const { name, value } = e.target;
    setLoginquery({ ...loginquery, [name]: value });
  };
  // submit form

  const HandleOnSubmitForm = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_FORM_LOADING" });
    axios
      .post(`https://reqres.in/api/login`, loginquery)
      .then((resp) => {
        new Promise((resolve, reject) => {
          resolve(dispatch({ type: "LOGIN_FORM_SUCCESS", payload: resp.data }));
        }).then(() => {
          alert("login successful");
          navigate("/");
        });
      })
      .catch((err) => {
        alert("invalid credentials");
        dispatch({ type: "LOGIN_FORM_ERROR" });
      });
  };

  return (
    <form className={styled.LoginForm} onSubmit={(e) => HandleOnSubmitForm(e)}>
      <input
        type="email"
        className={styled.input}
        name="email"
        placeholder="enter your email"
        onChange={(e) => handleloginquery(e)}
        required
      />

      <input
        type="password"
        name="password"
        className={styled.input}
        placeholder="enter your passsord"
        onChange={(e) => handleloginquery(e)}
        required
      />
      <button type="submit" className={styled.submit}>
        {" "}
        {state.loading ? <Loader /> : "submit"}
      </button>
    </form>
  );
};

export default LoginForm;
