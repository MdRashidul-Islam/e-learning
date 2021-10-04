import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Team = (props) => {
  const {img, name, about}=props.team
  return (
    <CardGroup className="p-2 mb-4  team-card">
    <Card className="team-info bg-dark">
      <Card.Img variant="top" className="image" height="230px" src={img} />
      <Card.Body>
        <Card.Title className="text-center">{name}</Card.Title>
        <Card.Text className="text-start">
        {about.slice(0, 150)}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="footer bg-dark">
      <button className="footer-btn">Download CV</button>
      </Card.Footer>
    </Card>
  </CardGroup>
  );
};

export default Team;