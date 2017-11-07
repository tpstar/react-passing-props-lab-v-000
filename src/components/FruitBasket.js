import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({fruit, filters, updateFilterCallback, list}) => {

  const handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    // this.setState({ selectedFilter: event.target.value });
  }

  return (
    <div className="fruit-basket">
      <Filter handleChange={handleFilterChange} filters={filters}/>
      <FilteredFruitList
        list={list} />
    </div>
  );

}

FruitBasket.defaultProps = {
  fruit: null,
  filters: [],
  currentFilter: null,
  updateFilterCallback: ()=>{console.log('hello')}
};

export default FruitBasket;
