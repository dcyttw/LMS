import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Profile from "../../components/Profile";
import Dashboard from "../../components/DashboardWrapper";

class Attendance extends Component {
  // Setting our component's initial state
  // state = {
  //   books: [],
  //   title: "",
  //   author: "",
  //   synopsis: ""
  // };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-6 sm-12">
            <Profile />
          </Col>
          <Col>
            <Dashboard />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Attendance;
