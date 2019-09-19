import React, { Component } from 'react';
import axios from 'axios';
import GameResult from './GameResult';

class Scorebar extends Component {
    state = {
        gameResults: []
    };

    componentDidMount() {
        axios.get('http://my-json-server.typicode.com/4i4oDido/LFP-React/db')
            .then((res)=>{
                this.setState({
                    gameResults: res.data.gameResults
                })
            })
    }

    render() {
        const gamePanel = this.state.gameResults.map(item => {
            return <GameResult
                date={item.date}
                hour={item.hour}
                homeTeamName={item.homeTeam.name}
                homeTeamScore={item.homeTeam.score}
                awayTeamName={item.awayTeam.name}
                awayTeamScore={item.awayTeam.score}
            />
        })
        return (
            <div className="Scorebar">
                {gamePanel}
            </div>
        )
    }
}

export default Scorebar;