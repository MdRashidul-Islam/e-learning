import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Course = (props) => {
  const {name, price, img}=props.course
  return (
    <CardGroup className="p-2 mb-5 course-card ">
    <Card className="course-info">
      <Card.Img variant="top" className="card-img" height="230px" src={img} />
      <Card.Body>
        <Card.Title className="card-text fs-4"><span>Course:</span> {name}</Card.Title>
        <Card.Text className="fs-5">
        <span>Price:</span> {price} TK
        </Card.Text>
      </Card.Body>
      <Card.Footer className="footer bg-white">
      <button className="footer-btn">Details</button>
      </Card.Footer>
      </Card>
  </CardGroup>
  );
}

export default Course;