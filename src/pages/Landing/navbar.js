import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/PossapLogo.svg";

const NavBar = () => {
  return (
    <div>
      <section id="nav-bar">
        <header>
          <nav className="navbar navbar-expand-md navbar-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/index">
                <img src={Logo} alt="logo" className="logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarCollapse"
              >
                <ul className="navbar-nav   mr-2  ">
                  <li className="nav-item">
                    <a href="#" className="nav-link ">
                      <Link to="/select-service">Request Service</Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/about" className="nav-link ">
                      <Link to="/about">About</Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/contact" className="nav-link active">
                      <Link to="/contact">Contact</Link>
                    </a>
                  </li>

                  <li className="nav-item ">
                    <a className="nav_btn" role="button">
                      Login | Sign Up
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </section>
    </div>
  );
};

export default NavBar;
