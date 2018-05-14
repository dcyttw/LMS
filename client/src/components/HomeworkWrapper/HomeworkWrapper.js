import React from "react";
import "./HomeworkWrapper.css";
import HomeworkListing from "../HomeworkListing";

const HomeworkWrapper = () => (
  <div className="hwwrapper">
    <h2>Homework Assignments</h2>
    <HomeworkListing />
  </div>
);
export default HomeworkWrapper;
