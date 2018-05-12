import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import "./Nav.css";
import Logo from "../Logo";

const Nav = () => (
  <nav>
    <Row className="show-grid">
      <Col xs={6} md={4}>
      <Link
        to="/dashboard"
        className="logoLink"
      >
        <Logo />
        </Link>
      </Col>
      <Col xs={6} md={4}>
        <ul className="nav nav-tabs navBar">
          <li className="navLi">
            <Link
              to="/dashboard"
              className={
                window.location.pathname === "/dashboard" ? "navLink active" : "navLink"
              }
            >
              Home
            </Link>
          </li>
          <li className="pipe">|</li>
          <li className="navLi">
            <Link
              to="/sessions"
              className={
                window.location.pathname === "/sessions" ? "navLink active" : "navLink"
              }
            >
              Sessions
            </Link>
          </li>
          <li className="pipe">|</li>
          <li className="navLi">
            <Link
              to="/grades"
              className={
                window.location.pathname === "/grades" ? "navLink active" : "navLink"
              }
            >
              Grades
            </Link>
          </li>
          <li className="pipe">|</li>
          <li className="navLi">
            <Link
              to="/attendance"
              className={
                window.location.pathname === "/attendance" ? "navLink active" : "navLink"
              }
            >
              Attendance
            </Link>
          </li>
        </ul>
      </Col>
      <Col>
        <Link
          to="/"
          className="logoutLink navLink"
        >
          Logout
        </Link>
      </Col>
      </Row>
  </nav>
);


export default Nav;
