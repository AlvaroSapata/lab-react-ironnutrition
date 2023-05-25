import { useState } from 'react';
import './App.css';
// Traer la data inicial
import foods from './foods.json';
// Importar componentes
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
// Importar Bootstrap
import Button from 'react-bootstrap/Button';


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

  // Estado para cuando la lista este vacia
  const [isListEmpty, setIsListEmpty] = useState(false);

  // Funcion para añadir nuevo elemento
  const handleAddFood = (newFood) => {
    // Spread + newFood para evitar clones
    setFoodList([...foodList, newFood]);
    setFilteredFood([...foodList, newFood]);
    // Ocultamos el formulario al añadir un nuevo producto
    setIsFormShowing(false);
    // Pasamos a false el mensaje de feedbacl
    setIsListEmpty(false);
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

    if (updatedFoodList.length === 0) {
      setIsListEmpty(true);
    }
  };

  return (
    <div>
      <Search searchFood={handleSearchFood} />
      <div className='centrarBtn'>
      <Button  variant="warning" onClick={toggleForm}>
        {isFormShowing === true ? 'Hide Form' : 'Add New Food'}
      </Button>
      </div>
      {isFormShowing === true ? <AddFoodForm addFood={handleAddFood} /> : null}

      <div>
        {isListEmpty === true ? <p>No more items in the list.</p> : null}
      </div>
      {/* Iteramos en el array filtrado y mostramos un render de cada producto */}
      <div className='cardContainer'>
      {filteredFood.map((food, index) => (
        <FoodBox key={index} food={food} deleteFood={handleDeleteFood} />
      ))}
      </div>
    </div>
  );
}

export default App;
