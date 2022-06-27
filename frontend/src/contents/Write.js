import React, { useState, useContext } from "react";
import axios from "axios";
import Topbar from "./Topbar";
import "./write.css";
import { Context } from "../context/Context";

function Write() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, description, username: user.username };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;

      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      const res = await axios.post("/post", newPost);
      console.log(res);
      window.location.replace(`/post/${res.data._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Topbar />
      <div className="write">
        {file && (
          <img
            src={URL.createObjectURL(file)}
            alt="article "
            className="writeImg"
          />
        )}

        <form className="writeform" onSubmit={handleSubmit}>
          <div className="writeformgroup">
            <label htmlFor="fileinput">
              <i className="fa-solid fa-plus writeIcon"></i>
            </label>
            <input
              type="file"
              name="file"
              id="fileinput"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <label htmlFor="textinput">Title</label>
            <input
              type="text"
              name="title"
              id="textinput"
              className="textinput"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="writeformgroup">
            <textarea
              type="text"
              className="textinput writetext"
              placeholder="write your story"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <button className="writeBtn" type="submit">
            Publish
          </button>
        </form>
      </div>
    </div>
  );
}

export default Write;
