import React from 'react'
import PokemonIndex from './components/PokemonIndex'
import PokemonShow from './components/PokemonShow'
import './App.css'
import API from './adapters/API';
import { Route } from 'react-router-dom'

class App extends React.Component {

  state = {
    pokemons: []
  }

  componentDidMount() {
    API.getPokemons()
      .then(pokemons => this.setState({ pokemons }))
  }

  addPokemon = newPokemon => {
    API.postPokemon(newPokemon)
      .then(pokemon => this.setState({
        pokemons: [...this.state.pokemons, pokemon]
      }))
  }

  findPokemon = id => this.state.pokemons.find(p => p.id === parseInt(id))

  render() {
    return (
      <div className="App">
        <Route exact path={"/pokemons"} component={(props) => <PokemonIndex {...props} pokemons={this.state.pokemons} addPokemon={this.addPokemon} />} />
        <Route path={"/pokemons/:id"} component={(props) =>
          <PokemonShow {...props} loading={!this.findPokemon(props.match.params.id)} {...this.findPokemon(props.match.params.id)} />
        } />
        {/* <PokemonIndex pokemons={this.state.pokemons} addPokemon={this.addPokemon} /> */}
      </div>
    )
  }
}

export default App
