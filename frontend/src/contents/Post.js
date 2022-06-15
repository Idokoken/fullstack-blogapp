import React from "react";
import { NavLink } from "react-router-dom";
import "./post.css";
//import Skeleton from "react-loading-skeleton";
//import "react-loading-skeleton/dist/skeleton.css";

function Post({ post }) {
  const Pf = "http://localhost:8000/images/";
  return (
    <div className="post">
      {post.photo && <img src={Pf + post.photo} alt="post cover" />}

      <div className="postInfo">
        <div className="postCart">
          <span>from {post.username}</span>
        </div>
        <span className="postTitle">{post.title}</span>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.description}</p>
      <NavLink
        className="btn btn-dark"
        style={{ color: "white", fontWeight: "600" }}
        to={`/post/${post._id}`}
      >
        Read more
      </NavLink>
    </div>
  );
}

export default Post;
