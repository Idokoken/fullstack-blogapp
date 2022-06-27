import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Posts from "./Posts";

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
      <Topbar />
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
