import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
// import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useAuth0 } from "@auth0/auth0-react";
import Events from "./pages/Events";
import Vendors from "./pages/Vendors";

// const background={backgroundImage: "url('https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHdlZGRpbmclMjBhbHRhcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60')",
// backgroundSize: "cover",
// backgroundPosition: "center center",
// backgroundRepeat: "no-repeat",
// backgroundAttachment: "fixed",
// backgroundColor: "rgba(255, 255, 255, 0.6)",
// backgroundBlendMode: "lighten",
// position:"absolute",
// height:"100%",
// width:"100%"
// }


function App() {
  const { isAuthenticated, isLoading } = useAuth0();
//   let location = useLocation();
//  //  console.log(location);
// const [backgroundURL, setBackgroundURL] = useState([])
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <Router>
      <div className="wrapper">
      {/* //  style={background}> */}
        <NavBar />
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/vendors">
            <Vendors />
          </Route>
          <Route exact path="/">
            <Events />
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
