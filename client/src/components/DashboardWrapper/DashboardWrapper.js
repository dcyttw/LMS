import React from "react";
import "./DashboardWrapper.css";
import { Col, Row, Container } from "../../components/Grid";
import SchoolInfo from "../SchoolInfo";
import HomeworkWrapper from "../HomeworkWrapper";
import SessionWrapper from "../SessionWrapper";
import CheckIn from "../CheckIn";

const DashboardWrapper = () => (
  <div className="DashboardWrapper">
    <SchoolInfo />
    <CheckIn />
    <HomeworkWrapper />
    <SessionWrapper />
  </div>
);
export default DashboardWrapper;
