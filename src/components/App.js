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

  render() {
    // const list = this.state.fruit;
    //!this.props.currentFilter || this.props.currentFilter === 'all' ? this.state.items : this.state.items.currentFilter(i => i.fruit_type === this.props.currentFilter);
    return (
      <FruitBasket filters={this.state.filters} selectedFilter={this.state.currentFilter} list={this.state.fruit}/>
    )
  }
}

export default App;
