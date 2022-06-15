import React from "react";
import "./posts.css";
import Post from "./Post";

function Posts(props) {
  return (
    <div className="posts">
      {props.posts.map((post, i) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
}

export default Posts;
