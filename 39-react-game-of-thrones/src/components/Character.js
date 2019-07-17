import React from 'react'

const Character = ({ name, handleClick }) => {
    return (
        <div className="option" onClick={handleClick}>{name}</div>
    )
}

export default Character