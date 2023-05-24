import React from 'react';

const Search = ({ searchFood }) => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    searchFood(searchTerm);
  };

  return (
    <input onChange={handleSearch} type="text" placeholder="Search food..." />
  );
};

export default Search;
