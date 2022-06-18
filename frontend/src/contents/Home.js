// JavaScript Document
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
<<<<<<< HEAD
=======
import Topbar from "./topbar/Topbar";
import "./write.css";
>>>>>>> 7b2de743ab82ef1392898303fd765efd6c8824f1
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import Posts from "./Posts";
import "./home.css";

function Home() {
  const [posts, setPost] = useState([]);
  const { search } = useLocation();
  //console.log(location);

  const fetchpost = async () => {
    try {
      const res = await axios.get(`/post${search}`);
      setPost(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchpost();
  }, [search]);

  return (
    <>
<<<<<<< HEAD
=======
    <Topbar />
>>>>>>> 7b2de743ab82ef1392898303fd765efd6c8824f1
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}

<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> 7b2de743ab82ef1392898303fd765efd6c8824f1
