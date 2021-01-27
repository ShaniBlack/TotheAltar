import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-n3kobf7i.us.auth0.com"
      clientId="4BROrd2JbYA8HoJL9UxwHqa9Twm7tX2k"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
