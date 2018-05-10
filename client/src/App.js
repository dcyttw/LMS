import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Attendance from "./pages/Attendance";
import Browse from "./pages/Browse";
import Dashboard from "./pages/Dashboard";
import Grades from "./pages/Grades";
import Login from "./pages/Login";
import Sessions from "./pages/Sessions";
import User from "./pages/User";
import Wrapper from "./components/Wrapper";

const App = () => (
  <Router>
    <Wrapper>
      <Nav />
      <Route path="/" component={Login} />
      <Route exact path="/attendance" component={Attendance} />
      <Route exact path="/browse" component={Browse} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/grades" component={Grades} />
      <Route exact path="/sessions" component={Sessions} />
      <Route exact path="/user:id" component={User} />
    </Wrapper>
  </Router>
);

export default App;
