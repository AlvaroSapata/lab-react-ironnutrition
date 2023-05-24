import React from 'react';

//Destructurado
const FoodBox = ({ food, deleteFood }) => {
    const handleDelete = () => {
        deleteFood(food.index);
    };
  return (
    <div className="FoodBox">
      <img src={food.image} alt="comida" width={"200px"} />
      <div>
        <h2>{food.name}</h2>
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default FoodBox;
