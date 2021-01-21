import React from "react";
import NavBar from "./components/navbar/NavBar";
import Events from "./pages/Events";
import Vendors from "./pages/Vendors";

function App() {
  const [token, setToken] = useState();

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
