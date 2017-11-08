import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    }
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }


  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  handleFilterChange = event => {
    this.setState({
      currentFilter: event.target.value
      // fruit: !this.state.currentFilter || this.state.currentFilter === 'all' ? this.state.fruit : this.state.fruit.filter(i => i.fruit_type === currentFilter)
    });
  }

  render() {

    return (
      <FruitBasket fruit={this.state.fruit} filters={this.state.filters} currentFilter={this.state.currentFilter} updateFilterCallback={this.handleFilterChange}/>
    )
  }
}

export default App;
