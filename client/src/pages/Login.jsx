import React  from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";

export default function Login(props) {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login">
    <div className="login-wrapper mt-6">
      <h1 className="login-font">To the Altar</h1>
      <button className="button is-rounded btn-font" onClick={loginWithRedirect}>Login</button>
      <h1 className="description">
        Safely keeping all your wedding plans in one place, all the way up to the altar
      </h1>
    </div>
    </div>
  );
}
