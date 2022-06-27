import React, { useRef, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { tablet } from "../Responsive";
import { Context } from "../context/Context";
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../context/ActionType";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  let { dispatch, isFetching, user } = useContext(Context);

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

  // styling section
  const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(black, white, black);

    .login {
      height: 500px;
      width: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #0c57ac;
      padding: 0;
      margin: 0;
      border-radius: 10px;
      ${tablet({ width: "60%" })}
    }
    h3 {
      font-size: 30px;
      margin: 0;
      padding: 0;
      color: white;
    }
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    label {
      font-size: 20px;
      color: white;
      margin: 5px 0;
    }
    input {
      margin-bottom: 25px;
      padding: 5px;
      border-radius: 5px;
    }
    .loginBtn {
      margin: 10px;
      color: white;
      cursor: pointer;
      background-color: darkgreen;
      padding: 5px;
      border-radius: 5px;
      border: none;
    }
    .register {
      display: flex;
    }
    p {
      font-weight: 400;
      color: white;
    }
    .registerBtn {
      cursor: pointer;
      font-style: italic;
      text-decoration: none;
      color: #070d0f;
      margin-left: 5px;
      font-weight: bold;
    }
  `;

  return (
    <Wrapper>
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
          <label className="loginlabel">Password</label>
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
        <div className="register">
          <p>
            Not a member yet?
            <Link className="registerBtn" to="/auth/register">
              click here
            </Link>
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default Login;
