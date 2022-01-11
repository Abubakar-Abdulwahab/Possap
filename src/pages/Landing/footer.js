import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="footer__content">
              <ul>
                <li>
                  <Link to="/">About</Link>
                  <Link to="/">Contact</Link>
                  <Link to="/">Privacy Policy</Link>
                  <Link to="/">Terms Of Use</Link>
                  {/* <a href="#">About</a>
                  <a href="#">Contact</a>
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms Of Use</a> */}
                </li>
              </ul>
              <div className="social__links">
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-facebook-f"></i>
              </div>
              <p>
                Copyright 2022. Federal Ministry of Defence. All Rights
                Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
