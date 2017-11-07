import React, { Component } from 'react';

const FilteredFruitList = ({list}) => {

  return (
    <ul className="fruit-list">
      {list.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  );

}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: ()=>{console.log('hello')}
};

export default FilteredFruitList;
