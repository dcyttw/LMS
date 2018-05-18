import React from "react";
import "./SessionListing.css";
import CardBtn from "../CardBtn";

const SessionListing = props => (
  <div className="sessionListing earlyCard">
    <div className="sessionCard clearfix">
      <div className="cardBody">
        <h3><a href="#">{props.title}</a></h3>
        <p className="classInfo">{props.description}</p>
        <p className="classPosted">{props.date}</p>
      </div>
      <div className="checkInRight">
        <h2>Early</h2>
        <button className="btn btn-primary" onClick={() => props.handleCheckInButton(props._id)}>Check-In</button>
      </div>
    </div>
  </div>
);

export default SessionListing;
