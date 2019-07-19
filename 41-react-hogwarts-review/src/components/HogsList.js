import React from 'react'
import HogCard from './HogCard';

const HogsList = ({ hogs }) => {
    return (
        <div className="ui cards">
            {
                hogs.map(hog => <HogCard key={hog.name} {...hog} />)
            }
        </div>
    )
}

export default HogsList