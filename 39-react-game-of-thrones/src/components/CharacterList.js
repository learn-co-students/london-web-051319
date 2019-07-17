import React from 'react'
import Character from './Character';

class CharacterList extends React.Component {

    state = {
        liked: this.props.liked,
        likeFilter: false
    }

    setLikeFilter = likeFilter => this.setState({ likeFilter })

    render() {
        const characters = this.state.likeFilter ? this.props.liked : this.props.all;

        return (
            <div className="list sidebar">
                <div className="filters">
                    <div className={`option ${this.state.likeFilter ? 'selected' : ''}`} onClick={() => this.setLikeFilter(true)}>
                        Liked
                    </div>
                    <div className={`option ${this.state.likeFilter ? '' : 'selected'}`} onClick={() => this.setLikeFilter(false)}>
                        All
                    </div>
                </div>
                {
                    characters.map(character => <Character handleClick={() => this.props.selectCharacter(character.url)} {...character} />)
                }
            </div>
        )
    }
}

export default CharacterList