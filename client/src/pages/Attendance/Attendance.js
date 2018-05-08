import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

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
          <Col>
          <Jumbotron>
            <h1 className="text-center">
              Northwestern Coding Bootcamp
            </h1>
          </Jumbotron>
          </Col>
          <Col size="md-6 sm-12">
            //Auth0 Stuff
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Attendance;
