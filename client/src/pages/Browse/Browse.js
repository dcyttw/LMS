import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import DashboardWrapper from "../../components/DashboardWrapper";
import ProfileWrapper from "../../components/ProfileWrapper";

class Browse extends Component {
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
            <ProfileWrapper />
          </Col>
          <Col>
            <DashboardWrapper />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Browse;
