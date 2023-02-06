import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import axios from "axios";
import { API } from "../Constant/Constant";
function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const a = 1;

  // code to check if user is logged in or not
  const [isloggedin, setIsloggedin] = useState(false);
  const [checklogin, setChecklogin] = useState("");
  const getuser = () => {
    axios
      .get(`${API}/user_login/check_valid_token`, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data);
        setChecklogin(res.data);
        // setIsloggedin(true);
      })
      .catch((err) => {
        console.log(err);
        // setIsloggedin(false);
      });
  };

  useEffect(() => {
    getuser();
  }, []);

  // code to logout user
  // const logout = () => {
  //   axios
  //     .get(`${API}/user_logout`, {
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       window.location.href = "/";
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <>
      <nav className={toggle ? "navbar expanded" : "navbar"}>
        <Link to="/">
          <h2 className="logo">HarshaWeb</h2>
        </Link>
        <div className="toggle-icon" onClick={handleToggle}>
          {toggle ? <RxCross1 size={28} /> : <AiOutlineMenu size={28} />}
        </div>
        <ul className="links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/website_price_cal">
            <li>Website</li>
          </Link>
          <Link to="/app_dev_cal">
            <li>Application</li>
          </Link>
          {checklogin === false ? (
            <Link to="/login">
              <li>Login</li>
            </Link>
          ) : (
            <Link to="/profilepage">
              <li>Profile</li>
            </Link>
          )}
          {/* <button onClick={logout} className="btn btn-sm">
            <li>Logout</li>
          </button> */}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
