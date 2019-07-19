import React from 'react'

const SortAndFilter = ({ sortOptions, changeSort, sortOption, changeGreasedFilter, greasedOptions, greasedOption }) => {
    return (
        <div>
            <select onChange={e => changeSort(e.target.value)}>
                {
                    sortOptions.map(option => <option selected={sortOption === option} value={option}>{option}</option>)
                }
            </select>
            <div className="ui buttons">
                {
                    greasedOptions.map((option, i) => {
                        return (
                            <div>
                                <button className={`ui button ${greasedOption === option ? 'positive' : ''}`} onClick={() => changeGreasedFilter(option)}>{option}</button>
                                {
                                    i < greasedOptions.length - 1 && <div className="or"></div>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SortAndFilter