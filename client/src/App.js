import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
//import Navbar from "./components/NavBar";
import VendorCard from "./components/VendorCard/VendorCard";


function App() {
  return (
    <Router>
      <div>
        <VendorCard/>
      </div>
    </Router>
  );
}

export default App;
