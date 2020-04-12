import React, { Component } from "react";

class CoursesContainer extends Component {
  constructor() {
    super();
    this.state = {
      courses: []
    };
  }

  handleClick = () => {
    let body = {
      size: 100,
      query: {
        match: {
          title: "elasticsearch"
        }
      }
    };
    return fetch("http://staging-api.quze.co/search/intern-test/_search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
      .then(response => console.log(response));
  };

  render() {
    return (
      <div>
        Courses Container
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default CoursesContainer;
