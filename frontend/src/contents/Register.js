import axios from "axios";
import React, { useState } from "react";
<<<<<<< HEAD
import "./register.css";
=======
import styled from "styled-components";
import {tablet} from '../Responsive'
//import "./register.css";
>>>>>>> 7b2de743ab82ef1392898303fd765efd6c8824f1

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
<<<<<<< HEAD

  return (
    <div className="register">
      <h3 className="registertitle">Register</h3>
      <form className="registerform" onSubmit={handleSummit}>
        <label className="registerlabel" type="text">
          Username
        </label>
        <input
          className="registerinput"
=======
  
// styling section
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 background: linear-gradient(rgba(255,255,255,o.5),rgba(255,255,255,0.5)), url('./register.jpg');
	 background-size: cover;
	 
	 .register{
	 	height: 500px;
  width: 80%;
	 display: flex;
	 flex-direction: column;
	 justify-content: center;
	 align-items: center;
	 background: #807E7E;
	 padding: 0;
	 margin: 0;
	 border-radius: 10px;
	 }
	 h3{
	 	font-size: 30px;
	 	margin: 0;
	 	padding: 0;
	 }
	 form{
	 	display: flex;
	 flex-direction: column;
	 justify-content: center;
	 }
	 label{
	 	font-size: 20px;
  	// margin-bottom: 5px;
	 }
	 input{
	 	margin-bottom: 25px;
  	padding: 5px;
	 border-radius: 5px;
	 }
	 .registerBtn{
	 	margin: 10px;
	color: white;
	pointer: cursor;
	background-color: darkgreen;
	padding: 5px;
	border-radius: 5px;
	border: none;
	 }
	 .login{
	 	display: flex;
	 }
	 p{
	 	font-weight: 400;
	 }
	 .loginbtn{
	 	pointer: cursor;
	 	font-style: italic;
	 	border
	 }
`

  return (
  <Wrapper>
    <div className="register">
      <h3>Register</h3>
      <form onSubmit={handleSummit}>
        <label>
          Username
        </label>
        <input type="text"
>>>>>>> 7b2de743ab82ef1392898303fd765efd6c8824f1
          placeholder="enter username"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
<<<<<<< HEAD
        <label className="registerlabel" type="text">
          Email
        </label>
        <input
          className="registerinput"
=======
        <label>
          Email	
        </label>
        <input type="text"
>>>>>>> 7b2de743ab82ef1392898303fd765efd6c8824f1
          placeholder="enter email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
<<<<<<< HEAD
        <label className="registerlabel">password</label>
        <input
          type="password"
          className="registerinput"
=======
        <label>Password</label>
        <input
          type="password"
>>>>>>> 7b2de743ab82ef1392898303fd765efd6c8824f1
          placeholder="enter password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
<<<<<<< HEAD
        <button className="registerBtn" type="submit">
=======
        <button type="submit" className='registerBtn'>
>>>>>>> 7b2de743ab82ef1392898303fd765efd6c8824f1
          Register
        </button>
      </form>
      {error && (
        <span style={{ marginTop: "10px", color: "red", fontSize: "20px" }}>
          Something went wrong
        </span>
      )}
<<<<<<< HEAD
      <div className="registerLogin">
        <h5 className="registerLogintitle">
          Already have an account, click here
        </h5>
        <button className="registerLoginbtn">Login</button>
      </div>
    </div>
  );
}

export default Register;
=======
      <div className="login">
        <p>Already have an account</p>
        <a className="loginbtn">click here please</a>
      </div>
    </div>
   </Wrapper>
  );
}

export default Register;
>>>>>>> 7b2de743ab82ef1392898303fd765efd6c8824f1
