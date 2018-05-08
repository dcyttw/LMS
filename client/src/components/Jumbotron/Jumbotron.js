import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) => (
  <div className="jumbotron mt-2">
    {children}
  </div>
);

export default Jumbotron;
