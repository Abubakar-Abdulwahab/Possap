import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/PossapLogo.svg";

const NavBar = () => {
  return (
    <div>
      <section id="nav-bar" activeClassName="active">
        <header>
          <nav class="navbar navbar-expand-md navbar-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="/index.html">
                <img src={Logo} alt="logo" class="logo" />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse justify-content-end"
                id="navbarCollapse"
              >
                <ul class="navbar-nav   mr-2  ">
                  <li class="nav-item">
                    <a href="#" class="nav-link ">
                      Request Service
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="/about" class="nav-link ">
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="/contact" class="nav-link active">
                      Contact
                    </a>
                  </li>

                  <li class="nav-item ">
                    <a class="nav_btn" role="button">
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
