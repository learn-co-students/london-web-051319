import React from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const colorMap = {
  poison: 'purple',
  grass: 'green',
  fire: 'red',
  bug: 'olive',
  electric: 'yellow',
  water: 'blue',
  fairy: 'pink',
  normal: 'grey',
  ground: 'brown',
  fighting: 'teal',
  dragon: 'orange',
  ghost: 'violet'
}

class PokemonCard extends React.Component {

  render() {

    const hp = this.props.stats.find(stat => stat.name === 'hp')
    const speed = this.props.stats.find(stat => stat.name === 'speed')
    const { front } = this.props.sprites
    const color = colorMap[this.props.types[0]] || 'black'
    const id = this.props.id

    return (
      <Card as={Link} to={`/pokemons/${id}`} color={color}>
        <div>
          <div className="image">
            <img alt="oh no!" src={front} />
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
