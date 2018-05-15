import React from "react";
import "./HomeworkWrapper.css";
import HomeworkListing from "../HomeworkListing";
import ViewAllBtn from "../ViewAllBtn";

const HomeworkWrapper = () => (
  <div className="hwwrapper">
    <h2>Homework Assignments</h2>
    <HomeworkListing />
    <ViewAllBtn />
  </div>
);
export default HomeworkWrapper;
