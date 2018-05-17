import React, { Component } from "react";
import "./SessionWrapper.css";
import SessionListing from "../SessionListing";
import ViewAllBtn from "../ViewAllBtn";
import API from "../../utils/API";

class SessionWrapper extends Component {
  state = {
    sessions: []
  };
	// When the component mounts, list all sessions and update this.state.sessions
	componentDidMount() {
		this.getSessions()
	}
	// Getting all sessions from the db
	getSessions = () => {
		API.getSessions()
		.then((res) => {
			this.setState({ sessions: res.data });
		});
  }
	render() {
    return (
      <div className="SessionWrapper">
        <h2>Sessions</h2>
				{!this.state.sessions.length ? (
					<h4 className="text-center">No Session Record to Display</h4>
				) : (
          this.state.sessions.map(session => (
            <SessionListing
              title={session.title}
              description={session.description}
              date={session.date}
            />
          ))
        )}
        <ViewAllBtn />
      </div>
    );
  }
}
export default SessionWrapper;
