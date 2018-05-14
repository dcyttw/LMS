import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import DashboardWrapper from "../../components/DashboardWrapper";
import ProfileWrapper from "../../components/ProfileWrapper";

class Dashboard extends Component {
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
          <ProfileWrapper />
          <DashboardWrapper />
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
