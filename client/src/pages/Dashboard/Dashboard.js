import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron"
import Footer from "../components/Footer";

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

export default Dashboard;
