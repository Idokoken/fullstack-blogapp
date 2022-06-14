import React, { useState, useEffect } from "react";
import axios from "axios";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getCatigories = async () => {
      try {
        const res = await axios.get("/category");
        setCategory(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCatigories();
  }, []);

  return (
    <div className="sidebar">
      <div className="sideItem">
        <span className="sideTitle">About Me</span>
        <img src="/images/gallery2.jpeg" alt="sidephoto" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          sed pharetra neque, vel
        </p>
      </div>
      <div className="sideItem">
        <span className="sideTitle">Categories</span>
        {category.map((cat, i) => (
          <ul key={i}>
            <NavLink to={`/?cat=${cat.name}`}>
              <li>{cat.name}</li>
            </NavLink>
          </ul>
        ))}
      </div>

      <div className="sideItem">
        <span className="sideTitle">Follow Us</span>
        <div className="sidebarScial">
          <i className="fa-brands fa-facebook sideIcon"></i>
          <i className="fa-brands fa-instagram sideIcon"></i>
          <i className="fa-brands fa-pinterest sideIcon"></i>
          <i className="fa-brands fa-twitter sideIcon"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
