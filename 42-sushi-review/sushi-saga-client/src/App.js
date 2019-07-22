import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import API from './adapters/API';
import SushiWallet from './components/SushiWallet';


class App extends Component {

  state = {
    allSushis: [],
    eatenSushis: [],
    budget: Math.floor(Math.random() * 50) + 10,
    cantAfford: false
  }

  componentDidMount() {
    API.getAllSushis()
      .then(allSushis => this.setState({ allSushis }))
  }

  eatSushi = sushi => {
    if (this.state.eatenSushis.includes(sushi.id)) return;
    if (this.state.budget < sushi.price) {
      this.setState({
        cantAfford: true
      })
      return;
    }
    this.setState({
      eatenSushis: [...this.state.eatenSushis, sushi.id],
      budget: this.state.budget - sushi.price,
      cantAfford: false
    })
  }

  findSushi = id => this.state.sushis.find(sushi => sushi.id === id)

  addFunds = funds => this.setState({
    budget: this.state.budget + parseInt(funds)
  })

  render() {

    const sushis = this.state.allSushis.map(sushi => ({
      ...sushi,
      isEaten: this.state.eatenSushis.includes(sushi.id)
    }))

    return (
      <div className="app">
        <SushiContainer sushis={sushis} sushiClickHandler={this.eatSushi} />
        <Table plates={this.state.eatenSushis} budget={this.state.budget} showBrokeMessage={this.state.cantAfford} />
        <SushiWallet addFunds={this.addFunds} />
      </div>
    );
  }
}

export default App;