import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Login from "./pages/Login";
import { useAuth0 } from "@auth0/auth0-react";
import Events from "./pages/Events";
import Vendors from "./pages/Vendors";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  const [currentEventId, setCurrentEventId] = useState(0);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <Router>
      <div className="wrapper">
        <NavBar />
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/vendors">
            <Vendors currentEventId={currentEventId} />
          </Route>
          <Route exact path="/">
            <Events setCurrentEventId={setCurrentEventId} />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
