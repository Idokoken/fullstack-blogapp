import axios from "axios";
import React, { useState } from "react";
import "./register.css";

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

  return (
    <div className="register">
      <h3 className="registertitle">Register</h3>
      <form className="registerform" onSubmit={handleSummit}>
        <label className="registerlabel" type="text">
          Username
        </label>
        <input
          className="registerinput"
          placeholder="enter username"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <label className="registerlabel" type="text">
          Email
        </label>
        <input
          className="registerinput"
          placeholder="enter email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <label className="registerlabel">password</label>
        <input
          type="password"
          className="registerinput"
          placeholder="enter password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <button className="registerBtn" type="submit">
          Register
        </button>
      </form>
      {error && (
        <span style={{ marginTop: "10px", color: "red", fontSize: "20px" }}>
          Something went wrong
        </span>
      )}
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
