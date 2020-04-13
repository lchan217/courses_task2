import React, { Component } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";

class ResultList extends Component {
  constructor() {
    super();
    this.state = {
      showCourse: false,
      course: {}
    };
  }

  handleOnClick = course => {
    this.setState({ showCourse: true, course: course });
  };

  render() {
    let data;
    if (this.state.showCourse) {
      data = (
        <Redirect
          to={{
            pathname: `${this.state.course._id}`,
            state: { course: this.state.course }
          }}
        />
      );
    } else {
      data = this.props.courses.map(course => {
        return (
          <Col>
            <Card style={{ width: "20em" }}>
              <Card.Img src={`${course._source.imgUrl}`} />
              <Card.Body>
                <Card.Title>{course._source.title}</Card.Title>
                <Card.Text>
                  {course._source.shortDescription.slice(0, 300)}
                </Card.Text>
                <Button onClick={() => this.handleOnClick(course)}>
                  More Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      });
    }

    return <Row>{data}</Row>;
  }
}

export default ResultList;
