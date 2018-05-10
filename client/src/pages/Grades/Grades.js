import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

class Grades extends Component {
  // Setting our component's initial state
  // state = {
  //   books: [],
  //   title: "",
  //   author: "",
  //   synopsis: ""
  // };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            //Profile Stuff
          </Col>
          <Col size="md-6 sm-12">
            //Auth0 Stuff
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Grades;
