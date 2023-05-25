import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Destructurar props
const AddFoodForm = ({ addFood, toggleForm }) => {
  // Creamos un estado por cada campo del formulario
  const [nameInput, setNameInput] = useState('');
  const [imageInput, setImageInput] = useState('');
  const [caloriesInput, setCaloriesInput] = useState(0);
  const [servingsInput, setServingsInput] = useState(0);

  //* Podriamos crear un solo estado
  //   const [formInputs, setFormInputs] = useState({
  //     name:"",
  //     image: "",
  //     calories: 0,
  //     servings: 0,
  //   })

  // Creamos las funciones de handle
  const handleNameChange = (event) => {
    // Registramos la escritura
    let value = event.target.value;
    // la almacenamos en el estado
    setNameInput(value);
  };

  const handleImageChange = (event) => {
    // Registramos la escritura
    let value = event.target.value;
    // la almacenamos en el estado
    setImageInput(value);
  };

  const handleCaloriesChange = (event) => {
    // Registramos la escritura
    let value = event.target.value;
    // la almacenamos en el estado
    setCaloriesInput(value);
  };

  const handleServingsChange = (event) => {
    // Registramos la escritura
    let value = event.target.value;
    // la almacenamos en el estado
    setServingsInput(value);
  };

  // Funcion para submit del formulario
  const handleSubmit = (event) => {
    // Funcion del evento que detiene todos los comportamientos predeterminados
    event.preventDefault();

    // 1. Recopilar la data del nuevo producto
    const newFood = {
      name: nameInput,
      image: imageInput,
      calories: caloriesInput,
      servings: servingsInput,
    };

    // 2. Agregar la data del producto al array
    // Destructurado props contine la funcion
    addFood(newFood);

    // 3. Reiniciar los valores despues de añadir
    setNameInput('');
    setImageInput('');
    setCaloriesInput(0);
    setServingsInput(0);
  };

  return (
    <div className="centrarAdd">
      <h2>Add food</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            value={nameInput}
            onChange={handleNameChange}
            type="text"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="image">Image</Form.Label>
          <Form.Control
            value={imageInput}
            onChange={handleImageChange}
            type="text"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="calories">Calories</Form.Label>
          <Form.Control
            value={caloriesInput}
            onChange={handleCaloriesChange}
            type="number"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="servings">Servings</Form.Label>
          <Form.Control
            value={servingsInput}
            onChange={handleServingsChange}
            type="number"
          />
        </Form.Group>
        <Form.Group>
          <Button variant="warning" type="submit" className="botonAdd">
            Add Food
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddFoodForm;
