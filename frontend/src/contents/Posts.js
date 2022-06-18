import React from "react";
<<<<<<< HEAD
=======
import Topbar from "./topbar/Topbar";
import "./write.css";
>>>>>>> 7b2de743ab82ef1392898303fd765efd6c8824f1
import "./posts.css";
import Post from "./Post";

function Posts(props) {
  return (
<<<<<<< HEAD
=======
    <>
    <Topbar />
>>>>>>> 7b2de743ab82ef1392898303fd765efd6c8824f1
    <div className="posts">
      {props.posts.map((post, i) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
<<<<<<< HEAD
  );
}

export default Posts;
=======
    </>
  );
}

export default Posts;
>>>>>>> 7b2de743ab82ef1392898303fd765efd6c8824f1
