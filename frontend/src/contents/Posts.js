import React from "react";
import Topbar from "./topbar/Topbar";
import "./write.css";
import "./posts.css";
import Post from "./Post";

function Posts(props) {
  return (
    <>
    <Topbar />
    <div className="posts">
      {props.posts.map((post, i) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
    </>
  );
}

export default Posts;