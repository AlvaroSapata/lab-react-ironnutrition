import React, { useState } from 'react';

// Destructurar props
const AddFoodForm = ({ addFood, toggleForm }) => {
  // Creamos un estado por cada campo del formulario
  const [nameInput, setNameInput] = useState('');
  const [imageInput, setImageInput] = useState('');
  const [caloriesInput, setCaloriesInput] = useState('');
  const [servingsInput, setServingsInput] = useState('');

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
    setCaloriesInput('');
    setServingsInput('');
  };

  return (
    <div>
      <h2>Add food</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input value={nameInput} onChange={handleNameChange} type="text" />
        <label htmlFor="image">image</label>
        <input value={imageInput} onChange={handleImageChange} type="text" />
        <label htmlFor="calories">calories</label>
        <input
          value={caloriesInput}
          onChange={handleCaloriesChange}
          type="number"
        />
        <label htmlFor="servings">servings</label>
        <input
          value={servingsInput}
          onChange={handleServingsChange}
          type="number"
        />
        <button htmlType="submit" >Add Food</button>
      </form>
    </div>
  );
};

export default AddFoodForm;
