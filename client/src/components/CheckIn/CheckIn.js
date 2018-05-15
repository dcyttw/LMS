import React from "react";
import "./CheckIn.css";
import CardBtn from "../CardBtn";

const CheckIn = () => (
  <div className="checkIn earlyCard">
    <div className="checkInCard clearfix">
      <div className="cardBody">
        <h3>You Are Checked In</h3>
        <p className="card-text"><a href="#">Class Name</a></p>
        <p className="text-muted">Date: Day / Year / Time of Day</p>
      </div>
      <div className="checkInRight">
        <h2 className="Early">Early</h2>
        <CardBtn />
      </div>
    </div>
  </div>
);

export default CheckIn;
