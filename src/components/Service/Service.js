import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
  const {name, img, price, description}= props.service
  return (
    <CardGroup className="p-2 mb-4 service-card">
    <Card>
      <Card.Img variant="top" height="230px" src={img} />
      <Card.Body>
        <Card.Title className="text-start fw-bold">Course: {name}</Card.Title>
        <Card.Title className="text-start fw-bold">Price: {price} TK</Card.Title>
        <Card.Text className="text-start">
        <span>Details:</span> {description}
        </Card.Text>
      </Card.Body>
      <Card.Footer className='footer bg-white'>
      <button className="footer-btn">See More</button>
      </Card.Footer>
    </Card>
  </CardGroup>
    
  );
};

export default Service;