import React from "react";
import "./SessionListing.css";
import CardBtn from "../CardBtn";

const SessionListing = () => (
  <div className="sessionListing earlyCard">
    <div className="sessionCard clearfix">
      <div className="cardBody">
        <h3><a href="#">1:JS Project 1</a></h3>
        <p className="classInfo">Some quick example text to build on the card title and make up the bulk of the 'card's content.</p>
        <p className="classPosted">Posted: Mar 5, 2018 at 3:00 PM  |  Submitted: Mar 12, 2018 at 12</p>
      </div>
      <div className="checkInRight">
        <h2>Early</h2>
        <CardBtn />
      </div>
    </div>
  </div>
);

export default SessionListing;
