import React from 'react'
import { sortOptions, CHOOSE_COUNTRY } from '../config/config'
import { thisTypeAnnotation } from '@babel/types';

class SearchOptions extends React.Component {

    state = {
        sortOption: null,
        countryOption: null
    }

    submitForm = event => {
        event.preventDefault()
        this.props.submitForm({
            sortOption: this.state.sortOption,
            countryOption: this.state.countryOption === CHOOSE_COUNTRY ? null : this.state.countryOption
        })
    }

    render() {
        return (
            <div className="filter-options">
                <input value={this.props.searchTerm} type="text" onChange={event => this.props.updateSearchTerm(event.target.value)} placeholder="Search..." />

                <form onSubmit={this.submitForm}>

                    <select onChange={event => this.setState({ countryOption: event.target.value })}>
                        <option selected={this.state.countryOption === null} value={null}>{CHOOSE_COUNTRY}</option>
                        {
                            this.props.countries.map(country =>
                                <option selected={this.state.countryOption === country} key={country} value={country}>{country}</option>
                            )
                        }
                    </select>
                    <div>

                        {
                            sortOptions.map(option => {
                                return (
                                    <div key={option} >
                                        <input
                                            type="radio"
                                            id={option}
                                            name="option-filter"
                                            value={option}
                                            checked={this.state.sortOption === option}
                                            onChange={() => this.setState({ sortOption: option })}
                                        />
                                        <label for={option}>{option}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <input type="submit" value="Apply filters" />
                </form>
            </div>
        )
    }
}

export default SearchOptions