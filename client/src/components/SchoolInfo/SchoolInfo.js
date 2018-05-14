import React from "react";
import "./SchoolInfo.css";
import { Col, Row, Container } from "../../components/Grid";

const SchoolInfo = () => (
  <div className="SchoolInfo row">
      <Col xs={12} md={8}>
        <div id="schoolLogo"><img src="nw_logo.png" /></div>
        <h1>Northwestern Coding Bootcamp</h1>
        <h3>Class ID: NWEVA201711FSF3</h3>
      </Col>
      <Col xs={6} md={4}>
        <h2>Fall 2017 - Spring 2018</h2>
      </Col>
    </div>
);

export default SchoolInfo;
