import React from 'react';
import './App.css';
import rankings from './rankings'
import Title from './components/Title'
import CardContainer from './components/CardContainer'
import SearchOptions from './components/SearchOptions'

// name 
// picture
// ranking
// points
// country

class App extends React.Component {

  submitForm = () => {
    console.log('form submitted')
  }

  render() {
    return (
      <div className="App">
        <Title title={"anyone for tennis??"} />
        <SearchOptions submitForm={this.submitForm} />
        <CardContainer players={rankings} />
      </div>
    );
  }
}

export default App;
