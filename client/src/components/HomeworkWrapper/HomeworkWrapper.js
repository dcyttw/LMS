import React, { Component } from "react";
import "./HomeworkWrapper.css";
import HomeworkListing from "../HomeworkListing";
import ViewAllBtn from "../ViewAllBtn";
import API from "../../utils/API";

class HomeworkWrapper extends Component {
  state = {
    courseworks: []
  };
	// When the component mounts, list all sessions and update this.state.sessions
	componentDidMount() {
		this.getCourseworks()
	}
	// Getting all courseworks from the db
	getCourseworks = () => {
		API.getCourseworks()
		.then((res) => {
			this.setState({ courseworks: res.data });
		});
  }
	render() {
    return (
      <div className="hwwrapper">
        <h2>Homework Assignments</h2>
        {!this.state.courseworks.length ? (
					<h4 className="text-center">No Homework to Display</h4>
				) : (
          this.state.courseworks.map(coursework => (
            <HomeworkListing
              title={coursework.title}
              description={coursework.description}
              dueDate={coursework.dueDate}
            />
        ))
      )}
        <ViewAllBtn />
      </div>
    )
  }
}

export default HomeworkWrapper;
