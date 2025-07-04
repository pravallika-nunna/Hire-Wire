import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <footer>
        <div>
          <img src="/final2.png" alt="logo" />
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>
              Thrishitha-Pravallika Basecamp, Street No. 007, Hyderabad, India
              (Where projects begin and sleep ends)
            </li>

            <li>
              hirewireteam1226@gmail.com-Guaranteed reply (unless we’re asleep
              or eating biryani)
            </li>
            <li>+91 74161****</li>
          </ul>
        </div>

        {/* <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li to={"/jobs"}>
              <Link>Jobs</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
          </ul>
        </div> */}
        <div>
          <h4>Follow Us</h4>
          <ul>
            <Link
              to="https://www.linkedin.com/in/thrishitha-perabathula-bb0427259/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <FaLinkedin />
              </span>
              <span>Thrishitha – LinkedIn</span>
            </Link>

            <Link
              to="https://www.linkedin.com/in/pravallika-nunna/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <FaLinkedin />
              </span>
              <span>Pravallika – LinkedIn</span>
            </Link>
          </ul>
        </div>
      </footer>
      <div className="copyright">
        &copy; CopyRight 2025. All Rights Reserved By HireWire
      </div>
    </>
  );
};

export default Footer;
