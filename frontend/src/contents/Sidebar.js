import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { tablet } from "../Responsive";
import Footer from "./Footer";

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

  //css section
  const Wrapper = styled.div`
    margin: 0;
    margin-top: 20px;
    padding-bottom: 30px;
    background-color: #f3e5e5;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h2 {
      margin: 10px;
    }
    ul {
      margin-left: 0;
      list-style-type: none;
      display: grid;
    }
    .link {
      text-decoration: none;
      color: black !important;
      font-weight: bold;
      font-size: 16px;
    }
  `;

  return (
    <Wrapper>
      <h2 className="">Categories</h2>
      <div className="">
        {category.map((cat, i) => (
          <ul key={i}>
            <li>
              <NavLink className="link" to={`/?cat=${cat.name}`}>
                {cat.name}
              </NavLink>
            </li>
          </ul>
        ))}
      </div>
      <Footer />
    </Wrapper>
  );
}

export default Sidebar;
