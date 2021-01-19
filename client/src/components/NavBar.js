import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";


const NavBar = () => {
    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
        <div class="button navbar-burger burger" data-target="navbar-menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </div>
    </div>
    <div class="navbar-menu">
        <div class="navbar-end">
        <div class="navbar-brand">
            <a  class="navbar-item" href="https://images.unsplash.com/photo-1579726670131-487ecc8e1e8a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fHJpbmdzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60">
                <img src="./images" alt="logo_transparent" width="112" height="28">
                    </img>
            </a>
             <a class="navbar-item has-text-black" href="./home">
                My Events
            </a>
            <a class="navbar-item has-text-black" href="./survey">
                Survey
            </a>
            <a class="navbar-item has-text-black is-disabled" href="./budget">
                Budget
            </a>
            <a class="navbar-item has-text-black is-disabled" href="./calendar">
                Calendar
            </a>
            <a class="navbar-item has-text-black" href="./logout">
                Logout
            </a> ​
            </div>
        </div>
    </div>
</nav>
    )
}

export default NavBar