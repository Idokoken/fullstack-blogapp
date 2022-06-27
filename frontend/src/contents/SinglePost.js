import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import "./singlepost.css";
import { Context } from "../context/Context";

function SinglePost() {
  const { id } = useParams();

  //const path = useLocation().pathname.split("/")[2];

  const [post, setPost] = useState([]);
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getpost = async () => {
      try {
        const res = await axios.get(`/post/${id}`);
        setPost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.description);
      } catch (error) {
        console.log(error);
      }
    };
    getpost();
  }, [id]);
  const Pf = "http://localhost:8000/images/";

  const handleDelete = async () => {
    try {
      await axios.delete(`/post/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/post/${post._id}`, {
        username: user.username,
        title,
        description: desc,
      });
      //window.location.reload();
      setUpdateMode(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Topbar />
      <div className="singlepost container">
        <div className="wrapper">
          {post.photo && (
            <img
              src={Pf + post.photo}
              alt="post cover"
              className="singlepostimage"
            />
          )}
          {updateMode ? (
            <input
              type="text"
              value={title}
              className="singlepostitleInput"
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <h1 className="singlepostitle">
              {title}
              {post.username === user?.username && (
                <div className="edit">
                  <div className="editIcon" onClick={() => setUpdateMode(true)}>
                    <i className="fa-solid fa-pen-to-square "></i>
                  </div>
                  <div className="editIcon" onClick={handleDelete}>
                    <i className="fa-solid fa-trash-can "></i>
                  </div>
                </div>
              )}
            </h1>
          )}

          <div className="singlepostinfo">
            <span>
              <NavLink to={`/?user=${post.username}`}>
                Authur: <b>{post.username}</b>
              </NavLink>
            </span>
            <span>{new Date(post.createdAt).toDateString()}</span>
          </div>
          {updateMode ? (
            <textarea
              className="singlepostdescInput"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              autoFocus
            />
          ) : (
            <p className="singlepostdesc">{desc}</p>
          )}
          {updateMode && (
            <button className="singlePostButton" onClick={handleUpdate}>
              Update
            </button>
          )}
        </div>
      </div>
      <Sidebar />
    </>
  );
}

export default SinglePost;
