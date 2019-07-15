import React from 'react'

class SearchOptions extends React.Component {
    render() {
        return (
            <div className="filter-options">
                <input type="text" placeholder="Search..." />
                <button onClick={this.props.submitForm}>Apply filters</button>
            </div>
        )
    }
}

export default SearchOptions