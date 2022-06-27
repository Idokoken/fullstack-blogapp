import React from "react";
import { NavLink } from "react-router-dom";

function Posts(props) {
  const Pf = "http://localhost:8000/images/";

  const postData = props.posts.map((post, i) => (
    <div
      className="col-md-3 col-sm-12 mb-3"
      key={post.id}
      style={{ width: "350px" }}
    >
      <div className="card">
        {post.photo ? (
          <img
            className="card-img-top"
            height="250px"
            src={Pf + post.photo}
            alt="post cover"
          />
        ) : (
          <img
            className="card-img-top"
            height="250px"
            src="/images/card.jpg"
            alt="post cover"
          />
        )}
        <div className="card-body">
          <h5 className="card-title">{post.title.substring(0, 12)}</h5>
          <span className="card-text">
            {new Date(post.createdAt).toDateString()}
          </span>
          <p className="card-text"> {post.description.substring(0, 50)}</p>
          <NavLink to={`/post/${post._id}`} className="btn btn-primary">
            Read More
          </NavLink>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="container mt-3">
      <div className="row d-flex justify-content-center">{postData}</div>
    </div>
  );
}

export default Posts;
