import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../store/slices/userSlice";
import { toast } from "react-toastify";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully");
    navigate("/"); // ✅ Redirects to home
  };

  return (
    <>
      <nav className={show ? "navbar show_navbar" : "navbar"}>
        <div className="logo">
          <img src="/final2.png" alt="logo" />
          <h1>Hire-Wire</h1>
        </div>

        <div className="links">
          <ul>
            <li>
              <Link to={"/"} onClick={() => setShow(false)}>
                HOME
              </Link>
            </li>
            <li>
              <Link to={"/jobs"} onClick={() => setShow(false)}>
                JOBS
              </Link>
            </li>

            {isAuthenticated ? (
              <>
                <li>
                  <Link to={"/dashboard"} onClick={() => setShow(false)}>
                    DASHBOARD
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout} className="logout-btn">
                    LOGOUT
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link to={"/login"} onClick={() => setShow(false)}>
                  LOGIN
                </Link>
              </li>
            )}
          </ul>
        </div>

        <GiHamburgerMenu
          className="hamburger"
          onClick={() => setShow(!show)}
        />
      </nav>
    </>
  );
};

export default Navbar;
