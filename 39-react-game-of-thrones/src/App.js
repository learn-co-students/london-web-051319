import React from 'react';
import './App.css';
import API from './adapters/API';
import CharacterList from './components/CharacterList'
import CharacterDetails from './components/CharacterDetails';

class App extends React.Component {

  state = {
    characters: [],
    likedCharacters: [
      "https://anapioficeandfire.com/api/characters/192",
      "https://anapioficeandfire.com/api/characters/206",
      "https://anapioficeandfire.com/api/characters/207"
    ],
    selectedCharacterUrl: "https://anapioficeandfire.com/api/characters/2"
  }

  componentDidMount() {
    API.getHouse()
      .then(house => {
        API.getAllURLs(house.swornMembers)
          .then(characters => this.setState({ characters }))
      })
  }

  getCharacters = urls => this.state.characters.filter(character => urls.includes(character.url))
  likedCharacters = () => this.getCharacters(this.state.likedCharacters)

  selectCharacter = selectedCharacterUrl => this.setState({ selectedCharacterUrl })

  selectedCharacter = () => this.state.characters.find(character => character.url === this.state.selectedCharacterUrl)

  toggleLikeCharacter = url => {
    if (this.state.likedCharacters.includes(url)) {
      this.setState({
        likedCharacters: this.state.likedCharacters.filter(likedUrl => likedUrl !== url)
      })
    } else {
      this.setState({
        likedCharacters: [...this.state.likedCharacters, url]
      })
    }
  }

  swapAlias = alias => {
    this.setState({
      characters: this.state.characters.map(character => {
        if (character.url !== this.state.selectedCharacterUrl) return character

        const ogName = character.name
        character.name = alias

        character.aliases = character.aliases.map(otherAlias => otherAlias !== alias ? otherAlias : ogName)

        return character
      })
    })
  }

  render() {

    const { characters } = this.state
    const selectedCharacter = this.selectedCharacter()

    return (
      <div className="App">
        <CharacterList all={characters} liked={this.likedCharacters()} selectCharacter={this.selectCharacter} />
        {
          selectedCharacter &&
          <CharacterDetails
            {...selectedCharacter}
            toggleLike={() => this.toggleLikeCharacter(selectedCharacter.url)}
            liked={this.state.likedCharacters.includes(selectedCharacter.url)}
            swapAlias={this.swapAlias}
          />
        }
      </div>
    );
  }
}

export default App;
