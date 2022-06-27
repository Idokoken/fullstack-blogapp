import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { tablet } from "../Responsive";

function Register() {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState(false);

  const handleSummit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", user);
      res.data && window.location.replace("/auth/login");
    } catch (err) {
      setError(true);
    }
    //console.log(user);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // styling section
  const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(black, white, black);

    .register {
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
    .registerBtn {
      margin: 10px;
      color: white;
      cursor: pointer;
      background-color: darkgreen;
      padding: 5px;
      border-radius: 5px;
      border: none;
    }
    .login {
      display: flex;
    }
    p {
      font-weight: 400;
      color: white;
    }
    .loginbtn {
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
      <div className="register">
        <h3>Register</h3>
        <form onSubmit={handleSummit}>
          <label>Username</label>
          <input
            type="text"
            placeholder="enter username"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            type="text"
            placeholder="enter email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="enter password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <button type="submit" className="registerBtn">
            Register
          </button>
        </form>
        {error && (
          <span style={{ marginTop: "10px", color: "red", fontSize: "20px" }}>
            Something went wrong
          </span>
        )}
        <div className="login">
          <p>
            Already have an account?
            <Link className="loginbtn" to="/auth/login">
              click here
            </Link>
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default Register;
