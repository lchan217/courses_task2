import React from "react";
import { Image } from "react-bootstrap";

const ShowCourse = props => {
  const {
    title,
    author,
    shortDescription,
    duration,
    durationPeriod,
    imgUrl,
    level,
    url
  } = props.location.state.course._source;
  return (
    <div>
      <h1>{title}</h1>
      <h3>By: {author}</h3>
      <Image src={imgUrl} style={{ width: "20em" }} />
      <div>{shortDescription}</div>
      <a href={url}>Website</a>
      <div>
        Time: {duration} {durationPeriod}
      </div>
      <div>Level: {level}</div>
    </div>
  );
};

export default ShowCourse;
