// JavaScript Document
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
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
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
