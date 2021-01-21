import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import "./App.css";
import Login from "./components/Login/Login";
import Dashboard from "./components/Login/Dashboard";
import Preferences from "./components/Login/Preferences";
// import Events from "./pages/Events";
// import Vendors from "./pages/Vendors";

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
}

function App() {
  const token = getToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <NavBar />
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
