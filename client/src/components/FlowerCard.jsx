import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const FlowerCard = ({ flower }) => {
  return (
    <Card style={{ width: '18rem' }} className="m-3">
      <Card.Img variant="top" src={flower.imageUrl} alt={flower.name} />
      <Card.Body>
        <Card.Title>{flower.name}</Card.Title>
        <Card.Text>{flower.description}</Card.Text>
        <Card.Text><strong>${flower.price}</strong></Card.Text>
        <Link to={`/flower/${flower.id}`}>
          <Button variant="primary">Voir détails</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default FlowerCard;
