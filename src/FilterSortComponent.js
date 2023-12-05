// src/FilterSortComponent.js
import React, { useState, useEffect } from 'react';
import products from './Product.json';

const FilterSortComponent = () => {
  const [filteredData, setFilteredData] = useState(products);

  const resetData = () => {
    setFilteredData(products);
  };

  const sortByPrice = () => {
    const sortedData = [...filteredData].sort((a, b) => a.price - b.price);
    setFilteredData(sortedData);
  };

  const sortByName = () => {
    const sortedData = [...filteredData].sort((a, b) => a.name.localeCompare(b.name));
    setFilteredData(sortedData);
  };

  const filterByDress = () => {
    const filteredData = products.filter(item => item.type === 'Dress');
    setFilteredData(filteredData);
  };

  const filterByTop = () => {
    const filteredData = products.filter(item => item.type === 'Top');
    setFilteredData(filteredData);
  };

  useEffect(() => {
    console.log('DataFileImported:', filteredData);
  }, [filteredData]);

  return (
    <div>
      <button onClick={resetData} id="resetButton">
        Reset
      </button>
      <button onClick={sortByPrice} id="sortByPrice">
        Sort by Price
      </button>
      <button onClick={sortByName} id="sortByName">
        Sort by Name
      </button>
      <button onClick={filterByDress} id="filterByDress">
        Filter by Dress
      </button>
      <button onClick={filterByTop} id="filterByTop">
        Filter by Top
      </button>
      
    </div>
  );
};

export default FilterSortComponent;
