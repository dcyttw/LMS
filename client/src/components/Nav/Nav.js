import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Nav.css";
import Logo from "./Logo";

const Nav = () => (
  <nav>
    <Row className="show-grid">
      <Col xs={6} md={4}>
        <Logo />
      </Col>
      <Col xs={6} md={4}>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/session:id"
              className={
                window.location.pathname === "/session:id" ? "nav-link active" : "nav-link"
              }
            >
              Sessions
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/grades"
              className={
                window.location.pathname === "/grades" ? "nav-link active" : "nav-link"
              }
            >
              Grades
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/attendance"
              className={
                window.location.pathname === "/attendance" ? "nav-link active" : "nav-link"
              }
            >
              Attendance
            </Link>
          </li>
        </ul>
      </Col>
      <Col xsHidden md={4}>
        <Link
          to="/attendance"
          className={
            window.location.pathname === "/login" ? "nav-link active" : "nav-link"
          }
        >
          Logout
        </Link>
      </Col>
      </Row>
  </nav>
);


export default Nav;
