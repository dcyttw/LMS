import React, { Component } from "react";
import API from "../utils/API";

class UpdateSession extends Component {
    state = {
        id: "",
        title: "",
        description: "",
        date: ""
    };
	// When the component mounts, list all sessions and update this.state.sessions
	componentDidMount() {

	}
	// Getting a session from the db
	getSession = id => {
		API.getSession(id)
		.then((res) => {
            console.log(res.data);
			//this.setState({ sessions: res.data });
		});
    }
	handleInputChange = event => {
		// Destructure the name and value properties off of event.target
		// Update the appropriate state
		const { name, value } = event.target;
		this.setState({ [name]: value });
    };

    handleFormSubmit = event => {
		// When the form is submitted, prevent its default behavior, create a session
        event.preventDefault();
        const updateSession = {
            title: this.state.title,
            description: this.state.description,
            date: this.state.date
        }
		API.updateSession(id, updateSession)
		.then(res => {
			console.log(res);
			//this.setState({ articles: res.data.response.docs });
		})
		.catch(err => console.log(err));
    };

	render() {
		return (
            <div>
				<form>
					<div className="form-group">
						<label htmlFor="title">Session Title</label>
						<input
							id="title"
							className="form-control"
							type="text"
                            placeholder="Session Title"
                            value={this.state.title}
							name="title"
							onChange={this.handleInputChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="description">Session Description</label>
						<input
							id="description"
							className="form-control"
							type="text"
                            placeholder="Session Description"
                            value={this.state.description}
							name="description"
							onChange={this.handleInputChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="date">Session Date</label>
						<input
							id="date"
							className="form-control"
							type="text"
                            placeholder="Session Date"
                            value={this.state.date}
							name="date"
							onChange={this.handleInputChange}
						/>
					</div>
					<button
						onClick={this.handleFormSubmit}
						type="submit"
						className="btn btn-primary">
						Update
					</button>
				</form>
            </div>
        )
    }
}

export default UpdateSession;