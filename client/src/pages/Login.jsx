import React  from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";
// import API from "../utils/API"

export default function Login(props) {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login-wrapper">
      <h1 className="login-font">To the Altar</h1>
      <button className="btn-font" onClick={loginWithRedirect}>Login</button>
    </div>
  );
}
