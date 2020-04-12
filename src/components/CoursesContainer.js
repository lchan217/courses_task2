import React, { Component } from "react";
import ResultList from "./ResultList";
import { Container, Form, Button } from "react-bootstrap";

class CoursesContainer extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      courses: [],
      search: ""
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
          results: response.hits.hits,
          courses: response.hits.hits
        });
      });
  }

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  //   handleSubmit = event => {
  //     event.preventDefault();
  //     let results = this.state.courses.filter(course => {
  //       return course.title
  //         .toLowerCase()
  //         .includes(this.state.search.toLowerCase());
  //     });
  //     this.setState({ results: results });
  //   };

  handleClick = event => {
    event.preventDefault();
    let query = this.state.search;

    let body = {
      size: 100,
      query: {
        match: {
          title: `${query}`
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
      .then(response => {
        this.setState({
          results: response.hits.hits
        });
      });
  };

  render() {
    return (
      <Container>
        <Form>
          <Form.Label>Search by Title: </Form.Label>
          <Form.Control
            value={this.state.search}
            onChange={this.handleChange}
            type='search'
            placeholder='keywords'
          />
          <Button onClick={this.handleClick} variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
        <ResultList courses={this.state.results} />
      </Container>
    );
  }
}

export default CoursesContainer;
