import React from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "./style/style.css";
const App = () => {
  return (
    <div className="Wrapper">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
