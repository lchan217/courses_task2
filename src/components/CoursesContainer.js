import React, { Component } from "react";
import ResultList from "./ResultList";
import { Container } from "react-bootstrap";

class CoursesContainer extends Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    let body = {
      size: 150,
      query: {
        match_all: {}
      }
    };
    fetch("http://staging-api.quze.co/search/intern-test/_search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(resp => resp.json())
      .then(response => {
        this.setState({
          results: response.hits.hits
        });
      });
  }

  handleClick = () => {
    let body = {
      size: 100,
      query: {
        match: {
          title: "javascript"
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
      <Container>
        Courses Container
        <button onClick={this.handleClick}>Click me</button>
        <ResultList courses={this.state.results} />
      </Container>
    );
  }
}

export default CoursesContainer;
