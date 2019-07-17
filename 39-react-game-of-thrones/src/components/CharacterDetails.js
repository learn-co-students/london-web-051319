import React from 'react'

const CharacterDetails = ({ name, toggleLike, liked, aliases, swapAlias }) => {
    return (
        <div className="details">
            <h1>{name}</h1>
            {
                aliases[0] === "" ? <div>No aliases</div> :
                    <ul>
                        {
                            aliases.map(alias => <li onClick={() => swapAlias(alias)}>{alias}</li>)
                        }
                    </ul>
            }
            <button onClick={toggleLike}>{liked ? 'Unlike' : 'Like'}</button>
        </div>
    )
}

export default CharacterDetails