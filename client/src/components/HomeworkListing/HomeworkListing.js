import React from "react";
import "./HomeworkListing.css";
import CardBtn from "../CardBtn";

const HomeworkListing = props => (
  <div className="listing">
    <div className="listingCard clearfix">
      <div className="cardBody">
        <h3><a href="#">{props.title}</a></h3>
        <p className="homeworkInfo"><span className="classStatus">Required</span><span className="classType">Type: Technology</span></p>
        <p className="classInfo">{props.description}</p>
        <p className="classPosted">Due date: {props.dueDate}</p>
      </div>
      <div className="checkInRight">
        <h2>A</h2>
        <h3 className="submitted">Submitted</h3>
        <CardBtn />
      </div>
    </div>
  </div>
);

export default HomeworkListing;
