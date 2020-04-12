import React, { Component } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

class ResultList extends Component {
  constructor() {
    super();
    this.state = {
      showCourse: false,
      course: {}
    };
  }

  render() {
    let data;
    if (this.state.showCourse) {
      data = "Course Page";
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
                <Button>More Details</Button>
              </Card.Body>
              <Card.Footer>
                {course._source.quzeTags &&
                  course._source.quzeTags.split(",").map(tag => {
                    return (
                      <Button size='sm' variant='secondary'>
                        {tag}{" "}
                      </Button>
                    );
                  })}
              </Card.Footer>
            </Card>
          </Col>
        );
      });
    }

    return <Row>{data}</Row>;
  }
}

export default ResultList;
