import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import "./App.css";
import Login from "../Login/Login";
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
    <div>
      <NavBar />
      {/* <Vendors />
      <Events /> */}
    </div>
  );
}

export default App;
