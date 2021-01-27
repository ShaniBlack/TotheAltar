import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
// import "./bulma.js";
import "./navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { user, logout } = useAuth0();
  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <figure className="image is-32x32 pt-3">
          <img className="login-img is-rounded" src={user.picture} />
          </figure>
          <p className="login-name pl-3 pt-3">{user.name}</p>
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
            {/* <div className="navbar-brand"> */}
              <a
                className="navbar-item has-text-black"
                id="navbar-font"
                href="./events"
              >
                Home
              </a>
              {/* hidden for future features */}
              <a
                className="navbar-item has-text-black is-hidden"
                id="navbar-font"
                href="./budget"
              >
                Budget
              </a>
              {/* hidden for future features */}
              <a
                className="navbar-item has-text-black is-hidden"
                id="navbar-font"
                href="./calendar"
              >
                Calendar
              </a>
              <Link
                className="navbar-item has-text-black"
                id="navbar-font"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </Link>
              {/* <Link
                className="navbar-item has-text-black"
                id="navbar-font"
                to="/login"
              >
                Log in
              </Link> */}
            {/* </div> */}
            ​
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
