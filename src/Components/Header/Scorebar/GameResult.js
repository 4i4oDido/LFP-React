import React from 'react';

const GameResult = (props)=> {
    return (
        <div className="GameResult">
            <div className="Date">{props.date}<span>{props.hour}</span></div>
            <div className="Team HomeTeam"><img src={props.homeTeam.logo} alt="logo"/>{props.homeTeamName}<span>{props.homeTeamScore}</span></div>
            <div className="Team AwayTeam"><img src={props.awayTeam.logo} alt="logo"/>{props.awayTeamName}<span>{props.awayTeamScore}</span></div>
        </div>
    )
}

export default GameResult;