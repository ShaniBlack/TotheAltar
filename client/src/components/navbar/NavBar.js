import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";

const NavBar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div
          className="button navbar-burger burger"
          data-target="navbar-menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-brand">
            {/* <figure className="image is-50x25">
                <img src="../images/alyssa-hurley-rings.jpg" alt="logo_transparent">
                    </img>
            </figure> */}
            <a className="navbar-item has-text-black" href="./home">
              Home
            </a>
            {/* hidden for future features */}
            <a className="navbar-item has-text-black is-hidden" href="./budget">
              Budget
            </a>
            {/* hidden for future features */}
            <a
              className="navbar-item has-text-black is-hidden"
              href="./calendar"
            >
              Calendar
            </a>
            <a className="navbar-item has-text-black" href="./logout">
              Logout
            </a>{" "}
            ​
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
