import React from "react";
import "./ViewAllBtn.css";

const ListBtn = props => (
  <button
    onClick={props.onClick}
    className={`card-btn ${props["data-value"]}`}
    {...props}
  />
);

export default ViewAllBtn;
