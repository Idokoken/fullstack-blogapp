import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Context } from "../context/Context";
import { LOGOUT } from "../context/ActionType";

function Topbar() {
  const Pf = "http://localhost:8000/images/";
  const { dispatch, user } = useContext(Context);
  const handleLogOut = () => {
    dispatch({ type: LOGOUT });
    window.location.replace("/auth/login");
  };
  //const user = false;
  console.log(user);

  const Wrapper = styled.div`
    margin: 0;
    padding: 0;

    img {
      height: 30px;
      width: 30px;
      object-fit: cover;
      border-radius: 50%;
      margin-right: 10px;
    }
    .logout {
      color: white;
      align-self: center;
      margin-right: 10px;
    }
    .nav-link {
      color: white !important;
    }
    .nav-link:focus {
      font-weight: bold;
    }
  `;

  return (
    <Wrapper>
      <nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-primary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              src="/images/brand.png"
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            GRNews
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/user/write">
                  Write
                </NavLink>
              </li>
            </ul>
            {user ? (
              <>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink to="/user/settings" className="nav-link">
                      {user.profilePix ? (
                        <img
                          className="profileimg"
                          src={Pf + user.profilePix}
                          alt="profile"
                        />
                      ) : (
                        <img
                          className="profileimg"
                          src="/images/profile.png"
                          alt="profile"
                        />
                      )}
                    </NavLink>
                  </li>
                  <li className="nav-item logout" onClick={handleLogOut}>
                    Logout
                  </li>
                </ul>
              </>
            ) : (
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/auth/login" className="nav-link">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/auth/register" className="nav-link">
                    Register
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </Wrapper>
  );
}

export default Topbar;
