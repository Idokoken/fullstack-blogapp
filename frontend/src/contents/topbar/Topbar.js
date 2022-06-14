import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./topbar.css";
import { Context } from "../../context/Context";
import { LOGOUT } from "../../context/ActionType";

function Topbar() {
  const { dispatch, user } = useContext(Context);
  const handleLogOut = () => {
    dispatch({ type: LOGOUT });
  };
  //const user = false;
  console.log(user);
  const style = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <div className="bar">
      <div className="leftbar">
        <i className="fa-brands fa-facebook topIcon"></i>
        <i className="fa-brands fa-instagram topIcon"></i>
        <i className="fa-brands fa-pinterest topIcon"></i>
        <i className="fa-brands fa-twitter topIcon"></i>
      </div>
      <div className="centerbar">
        <ul>
          <li>
            <NavLink style={style} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={style} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink style={style} to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink style={style} to="/user/write">
              Write
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="rightbar">
        {user ? (
          <>
            <ul>
              <li>
                <NavLink style={style} to="/user/settings">
                  {user.profilePix ? (
                    <img
                      className="profileimg"
                      src={user.profilePix}
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
              <li onClick={handleLogOut}>Logout</li>
            </ul>
          </>
        ) : (
          <ul>
            <li>
              <NavLink style={style} to="/auth/login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink style={style} to="/auth/register">
                Register
              </NavLink>
            </li>
          </ul>
        )}

        <i className="fa fa-search topIcon"></i>
      </div>
    </div>
  );
}

export default Topbar;
