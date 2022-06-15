import React, { useRef, useContext } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Context } from "../context/Context";
import "./login.css";
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../context/ActionType";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  let { dispatch, isFetching, user, error } = useContext(Context);

  const handleSumit = async (e) => {
    e.preventDefault();
    dispatch({ type: LOGIN_START });
    try {
      const resp = await axios.post("/auth/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      //console.log(resp.data);
      dispatch({ type: LOGIN_SUCCESS, payload: resp.data });
    } catch (err) {
      dispatch({ type: LOGIN_FAILURE });
    }
  };

  console.log(isFetching);
  console.log(user);
  //console.log(error);

  return (
    <div className="login">
      <h3 className="logintitle">Login</h3>
      <form className="loginform" onSubmit={handleSumit}>
        <label className="loginlabel" type="text">
          Email
        </label>
        <input
          className="logininput"
          placeholder="enter email"
          ref={emailRef}
        />
        <label className="loginlabel">password</label>
        <input
          type="password"
          className="logininput"
          placeholder="enter password"
          ref={passwordRef}
        />
        <button className="loginBtn" disabled={isFetching}>
          Login
        </button>
      </form>
      <div className="loginRegister">
        <h5 className="loginRegistertitle">
          Click here to register if don't have an account'
        </h5>
        <button className="loginRegisterbtn">
          <NavLink
            style={{ textDecoration: "none", color: "inherit" }}
            to="/auth/register"
          >
            Register
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default Login;
