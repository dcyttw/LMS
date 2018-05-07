import React from "react";
import "./ListBtn.css";

const ListBtn = props => (
  <button
    onClick={props.onClick}
    className={`card-btn ${props["data-value"]}`}
    {...props}
  />
);

export default ListBtn;
