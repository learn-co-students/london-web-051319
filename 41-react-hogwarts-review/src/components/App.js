import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsList from './HogsList';
import SortAndFilter from './SortAndFilterOptions';

class App extends Component {

  state = {
    hogs: hogs,
    sortOptions: [
      'Default',
      'Name',
      'Weight'
    ],
    sortOption: 'Default',
    greasedOptions: [
      'all',
      'greased',
      'ungreased'
    ],
    greasedFilter: 'all'
  }

  changeSort = sortOption => this.setState({ sortOption })

  sortHogs = (sortOption, hogs) => {
    if (sortOption === 'Default') return hogs

    return hogs.sort((hogA, hogB) => {
      if (sortOption === 'Name')
        return hogA.name.localeCompare(hogB.name)
      if (sortOption === 'Weight')
        return hogB['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] -
          hogA['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
    })
  }

  filterHogs = (hogs, filter) => hogs.filter(hog => {
    return filter === 'all' || (filter === 'greased' ? hog.greased : !hog.greased)
  })

  changeGreasedFilter = greasedFilter => this.setState({ greasedFilter })

  render() {
    const hogs = this.sortHogs(this.state.sortOption, this.filterHogs(this.state.hogs, this.state.greasedFilter))
    return (
      <div className="App">
        < Nav />
        <SortAndFilter greasedOptions={this.state.greasedOptions} greasedOption={this.state.greasedFilter} changeGreasedFilter={this.changeGreasedFilter} sortOptions={this.state.sortOptions} changeSort={this.changeSort} sortOption={this.state.sortOption} />
        <HogsList hogs={hogs} />
      </div>
    )
  }
}

export default App;
