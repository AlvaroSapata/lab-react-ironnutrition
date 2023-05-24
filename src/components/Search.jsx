import React from 'react';
import Form from 'react-bootstrap/Form';

const Search = ({ searchFood }) => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    searchFood(searchTerm);
  };

  return (
    <div className='centrarBarra'>
    <Form.Group className='searchBar'>
    <Form.Label htmlFor="searchBar">Search food</Form.Label>
    <Form.Control onChange={handleSearch} type="text"  />
    </Form.Group>
    </div>
  );
};

export default Search;
