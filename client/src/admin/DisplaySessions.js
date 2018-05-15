import React, { Component } from "react";
import API from "../utils/API";

class DisplaySessions extends Component {
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
            console.log(res.data);
			this.setState({ sessions: res.data });
		});
    }
	render() {
        return (
            <div>
				{!this.state.sessions.length ? (
					<h4 className="text-center">No Session Record to Display</h4>
				) : (
					this.state.sessions.map(session => (
                        <div>
                            <p>{session._id}</p>
                            <p>{session.title}</p>
                            <p>{session.description}</p>
							<p>{session.date}</p>
                        </div>
					))
				)}
            </div>
        );
    }
}

export default DisplaySessions;