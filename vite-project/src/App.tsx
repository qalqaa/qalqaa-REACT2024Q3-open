import React from "react";
import "./App.css";
import MainRouter from "./components/MainRouter";
import Navbar from "./components/NavBar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <MainRouter />
    </>
  );
};

export default App;
