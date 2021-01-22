import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";

export default function Login(props) {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <button onClick={loginWithRedirect}>Log In Auth0</button>
    </div>
  );
}
