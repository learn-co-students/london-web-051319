import React from 'react'

class HogCard extends React.Component {

    state = {
        showDetails: false
    }

    details = (specialty, weight, highestMedal) => (
        <div className="extra content">
            <div className="content">
                <a>
                    <i className="star icon"></i>
                    {specialty}
                </a>
            </div>
            <div className="content">
                <a>
                    <i className="weight icon"></i>
                    {weight}
                </a>
            </div>
            <div className="content">
                <a>
                    <i className="trophy icon"></i>
                    {highestMedal}
                </a>
            </div>
        </div>
    )

    toggleDetails = () => this.setState({ showDetails: !this.state.showDetails })

    render() {
        const { name, specialty, greased } = this.props
        const highestMedal = this.props['highest medal achieved']
        const weight = this.props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
        return (
            <div className={greased ? 'ui brown card' : 'ui card'}>
                <div className="image">
                    <img src={require(`../hog-imgs/${name.toLowerCase().split(' ').join('_') + '.jpg'}`)} />
                </div>
                <div className="content">
                    <a className="header">{name}</a>
                    <div className="meta">
                        <span className="date">Joined in 2013</span>
                    </div>
                    <div className="description">
                        Kristy is an art director living in New York.
                    </div>
                </div>
                <div className="content">
                    <button className="ui button" onClick={this.toggleDetails}>{this.state.showDetails ? 'Hide details' : 'Show details'}</button>
                </div>
                {
                    this.state.showDetails && this.details(specialty, weight, highestMedal)
                }
            </div>
        )
    }
}

export default HogCard