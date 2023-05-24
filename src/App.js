import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  // useState(foods)
  const [foodList, setFoodList] = useState(foods);

  // Creamos un estado secundario
  const [filteredFood, setFilteredFood] = useState(foods);

  // Estado para mostrar/ocultar
  const [isFormShowing, setIsFormShowing] = useState(false);

  // Funcion para cambiar dicho estado
  const toggleForm = () => {
    setIsFormShowing(!isFormShowing);
  };

  // Funcion para añadir nuevo elemento
  const handleAddFood = (newFood) => {
    // Spread + newFood para evitar clones
    setFoodList([...foodList, newFood]);
    setFilteredFood([...foodList, newFood]);
    // Ocultamos el formulario al añadir un nuevo producto
    setIsFormShowing(false);
  };

  // Funcion para buscar un elemento
  const handleSearchFood = (search) => {
    console.log(search);

    //filter
    let filteredArr = foods.filter((eachFood) => {
      if (eachFood.name.includes(search)) {
        return true; // agrega el elemento
      } else {
        return false; // no agregues el elemento
      }
    });

    // Actualizar el array
    setFilteredFood(filteredArr);
  };

  const handleDeleteFood = (index) => {
    // borramos el elemento por su indice
    const updatedFoodList = JSON.parse(JSON.stringify(foodList));
    updatedFoodList.splice(index, 1);
    setFoodList(updatedFoodList);
    setFilteredFood(updatedFoodList);
  };

  return (
    <div>
      <Search searchFood={handleSearchFood} />
      <button onClick={toggleForm}>
      {isFormShowing === true ? "Hide Form" : "Add New Food"}
      </button>
      {isFormShowing === true ? <AddFoodForm addFood={handleAddFood}/> : null}
      

      {/* Iteramos en el array filtrado y mostramos un render de cada producto */}
      {filteredFood.map((food, index) => (
        <FoodBox key={index} food={food} deleteFood={handleDeleteFood} />
      ))}
    </div>
  );
}

export default App;
