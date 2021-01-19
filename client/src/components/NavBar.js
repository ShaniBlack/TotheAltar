import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css"

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
</nav>
    )
}

export default NavBar