import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

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
      <Container fluid>
        <Row>
          <Col>
            <Jumbotron>
              <h1>Northwestern Coding Bootcamp</h1>
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

export default Browse;
