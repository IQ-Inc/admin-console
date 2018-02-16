import React from 'react';
import AppNavBar from './AppNavbar'
import PlayerList from './PlayerList'

const fakeData = [
    {
        badge: "1A2B3C4D5E",
        wins: 5,
        losses: 4,
        ties: 1,
        lastgame: "2018-02-16T18:39:16.508Z"
    },
    {
        badge: "817AHE81A3",
        wins: 14,
        losses: 24,
        ties: 10,
        lastgame: "2018-02-16T18:39:16.508Z"
    },
    {
        badge: "1A63HA8E24",
        wins: 12,
        losses: 3,
        ties: 3,
        lastgame: "2018-02-16T18:39:16.508Z"
    },
    {
        badge: "6AHB4281HM",
        wins: 0,
        losses: 5,
        ties: 9,
        lastgame: "2018-02-16T18:39:16.508Z"
    }
]

class App extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <AppNavBar title={this.props.title} />
                <PlayerList players={fakeData} />
            </div>
        )
    }
}

export default App