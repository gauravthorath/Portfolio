import React from "react";
import Routes from "./routes";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes />
    </div>
  );
};

export default App;
