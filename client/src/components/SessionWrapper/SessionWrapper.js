import React from "react";
import "./SessionWrapper.css";
import SessionListing from "../SessionListing";
import ViewAllBtn from "../ViewAllBtn";

const SessionWrapper = () => (
  <div className="SessionWrapper">
    <h2>Sessions</h2>
    <SessionListing />
    <ViewAllBtn />
  </div>
);
export default SessionWrapper;
