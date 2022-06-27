import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { tablet } from "../Responsive";

//css section
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rgb(78, 77, 77);
  color: rgb(212, 201, 201);

  .item1 {
    display: flex;
    margin-left: 20px;
    margin-right: 10px;
    margin-top: 10px;
  }

  img {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-right: 20px;
  }
  .footer-container .foot-item div span {
    font-size: 0.5rem;
    margin-right: 20px;
    margin-left: 5px;
  }
  .footer-container .foot-item {
    margin: 0;
    padding: 0;
  }
  .footerNav {
    list-style-type: none;
    padding: 0;
    /* margin-top: 20px;
    margin-left: 20px; */
    margin: 20px;
  }
  li {
    margin-bottom: 15px;
  }
  a {
    text-decoration: none;
    color: rgb(212, 201, 201);
  }
  a:hover {
    font-weight: bold;
    color: #fff;
  }
  p {
    text-align: center;
    margin-bottom: 0;
    margin-left: 20px;
  }
  hr {
    border: 3px solid white;
    width: 100%;
    margin: 0;
  }
  .icon {
    margin-right: 20px;
  }
  .item2 {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    margin-left: 20px;
    ${tablet({ flexDirection: "row", alignItems: "center" })}
  }
  h4 {
    margin-right: 20px;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <div className="item1">
        <img src="/images/brand.png" alt="logo" />
        <h3 className="name">All Voice Blog</h3>
      </div>
      <ul className="footerNav">
        <li>
          <Link className="icon" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="icon" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="icon" to="/contact">
            Contact
          </Link>
        </li>
      </ul>

      <div className="item2">
        <h4>Follow All Voice</h4>
        <div className="footimg-container">
          <i className="fa-brands fa-facebook icon"></i>
          <i className="fa-brands fa-twitter icon"></i>
          <i className="fa-brands fa-youtube icon"></i>
          <i className="fa-brands fa-instagram icon"></i>
        </div>
      </div>
      <hr />
      <p>
        <em>Copyright at Idoko</em>
      </p>
    </Wrapper>
  );
}

export default Footer;
