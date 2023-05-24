import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//Destructurado
const FoodBox = ({ food, deleteFood }) => {
  const handleDelete = () => {
    deleteFood(food.index);
  };
  return (
    <Card style={{ width: '300px' }} className='cardItems'>
      <Card.Img src={food.image} alt="comida" width={'200px'} />
      <Card.Body>
        <Card.Title>{food.name}</Card.Title>
        <Card.Text>Calories: {food.calories}</Card.Text>
        <Card.Text>Servings: {food.servings}</Card.Text>

        <Button variant="danger" onClick={handleDelete}>Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default FoodBox;
