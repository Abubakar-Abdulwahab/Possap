import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/PossapLogo.svg";

const NavBar = () => {
  return (
    <div>
      <section id="nav-bar" activeClassName="active">
        <header>
          <nav className="navbar navbar-expand-md navbar-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/index.html">
                <img src={Logo} alt="logo" className="logo" />
              </a>
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
                    <NavLink
                      to="/index"
                      className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                      }
                    >
                      Request Service
                    </NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                      }
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                      }
                    >
                      Contact
                  </NavLink>
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
