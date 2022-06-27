import React, { useState, useContext } from "react";
import axios from "axios";
import "./settings.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./write.css";
import { Context } from "../context/Context";
import {
  UPDATE_START,
  UPDATE_SUCCESS,
  UPDATE_FAILURE,
} from "../context/ActionType";

function Settings() {
  const Pf = "http://localhost:8000/images/";

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const { user, dispatch } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: UPDATE_START });
    const updateUser = { username, email, password, userId: user._id };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updateUser.profilePix = filename;

      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const res = await axios.put("/user/" + user._id, updateUser);
      setSuccess(true);
      dispatch({ type: UPDATE_SUCCESS, payload: res.data });
    } catch (err) {
      console.log(err);
      dispatch({ type: UPDATE_FAILURE });
    }
  };

  return (
    <>
      <Topbar />
      <div className="settings">
        <div className="settingswrapper">
          <div className="settingstitle">
            <span className="settingseditTitle">update ur Account</span>
            <span className="settingsdeleteTitle">Delete ur Account</span>
          </div>
          <form className="settingsform" onSubmit={handleSubmit}>
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img
                className="settingsimg"
                src={file ? URL.createObjectURL(file) : Pf + user.profilePix}
                alt="profile"
                name="profile"
              />

              <label htmlFor="inputfile">
                <i className="settingsPPIcon fa fa-user-circle"></i>
              </label>
              <input
                id="inputfile"
                className="inputfile"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>
            <label>Username</label>
            <input
              type="text"
              placeholder={user.username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Email</label>
            <input
              type="email"
              placeholder={user.email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="settingsBtn" type="submit">
              Update
            </button>
            {success && (
              <p
                className="alert alert-success"
                style={{ textAlign: "center", marginTop: "20px", width: "50%" }}
              >
                user info successfully updated
              </p>
            )}
          </form>
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default Settings;
