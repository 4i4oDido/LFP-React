import React from 'react';
import './Scorebar.css';

const GameResult = (props)=> {
    const className = (props.isLive) ? "GameResult Live" : "GameResult";
    return (
        <div className={className} >
            <div className="Date">{props.date}<span>{props.hour}</span></div>
            <div className="Team HomeTeam"><img src={props.homeTeamlogo} alt="logo"/>{props.homeTeamName}<span>{props.homeTeamScore}</span></div>
            <div className="Team AwayTeam"><img src={props.awayTeamlogo} alt="logo"/>{props.awayTeamName}<span>{props.awayTeamScore}</span></div>
        </div>
    )
}

export default GameResult;