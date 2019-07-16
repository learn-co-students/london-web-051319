import React from 'react';
import './App.css';
import rankings from './rankings'
import Title from './components/Title'
import CardContainer from './components/CardContainer'
import SearchOptions from './components/SearchOptions'
import { SORT_OPTION_DEFAULT, SORT_OPTION_RANKING } from './config/config';

// name 
// picture
// ranking
// points
// country

class App extends React.Component {

  state = {
    searchTerm: '',
    players: rankings,
    sortAndFilterOptions: {
      sortOption: null
    }
  }

  submitForm = () => {
    console.log('form submitted')
  }

  filterPlayers = searchTerm => this.state.players.filter(player => this.state.sortAndFilterOptions.countryOption ? player.player_country === this.state.sortAndFilterOptions.countryOption : true)
    .filter(
      player => player.player_name.toLowerCase().includes(searchTerm.toLowerCase())
    )

  sortPlayers = (players, sortOption) => players.sort((a, b) => {
    if (sortOption === SORT_OPTION_DEFAULT) return 0;
    if (sortOption === SORT_OPTION_RANKING) return a.current_rank - b.current_rank
  })

  getCountries = players => [...new Set(players.map(player => player.player_country))]

  updateSearchTerm = searchTerm => this.setState({ searchTerm })

  applySortAndFilterOptions = sortAndFilterOptions => this.setState({
    sortAndFilterOptions
  })

  render() {

    const filteredPlayers = this.filterPlayers(this.state.searchTerm)
    const sortedPlayers = this.sortPlayers(filteredPlayers, this.state.sortAndFilterOptions.sortOption)

    return (
      <div className="App">
        <Title title={"anyone for tennis??"} />
        <SearchOptions
          countries={this.getCountries(this.state.players)}
          submitForm={this.applySortAndFilterOptions}
          searchTerm={this.state.searchTerm}
          updateSearchTerm={this.updateSearchTerm}
        />
        <CardContainer players={sortedPlayers} />
      </div>
    );
  }
}

export default App;
