import React from 'react'
import { Container, Segment, Dimmer, Loader } from 'semantic-ui-react'

class PokemonShow extends React.Component {

    componentDidMount() {
        setTimeout(() => this.props.history.push('/login'), 1000)
    }

    render() {

        if (this.props.loading) {
            return <Container>
                <Dimmer active inverted>
                    <Loader inverted content='Loading' />
                </Dimmer>
            </Container>
        }

        const hp = this.props.stats.find(stat => stat.name === 'hp')
        const speed = this.props.stats.find(stat => stat.name === 'speed')
        const { front, back } = this.props.sprites

        return (
            <Container>
                <div>
                    <div className="image">
                        <img alt="oh no!" src={front} />
                    </div>
                    <div className="image">
                        <img alt="oh no!" src={back} />
                    </div>
                    <div className="content">
                        <div className="header">{this.props.name}</div>
                    </div>
                    <div className="extra content">
                        <span>
                            <i className="icon heartbeat red" />
                            {hp.value}
                        </span>
                        <span>
                            <i className="icon lightning yellow" />
                            {speed.value}
                        </span>
                    </div>
                </div>
            </Container>
        )
    }
}

export default PokemonShow
