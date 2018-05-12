import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Profile from "../../components/Profile";
import DashboardWrapper from "../../components/DashboardWrapper";

class User extends Component {
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
            <DashboardWrapper />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default User;
