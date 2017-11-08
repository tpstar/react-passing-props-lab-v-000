import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({fruit, filters, currentFilter, updateFilterCallback}) => {



  return (
    <div className="fruit-basket">
      <Filter handleChange={updateFilterCallback} filters={filters}/>
      <FilteredFruitList
        fruit={fruit} filter={currentFilter}/>
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
