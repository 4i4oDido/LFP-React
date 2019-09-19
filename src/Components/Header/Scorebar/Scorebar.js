import React, {Component} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import GameResult from './GameResult';
import "./Scorebar.css";

class Scorebar extends Component {
    state = {
        gameResults: []
    };

    componentDidMount() {
        axios.get('http://my-json-server.typicode.com/4i4oDido/LFP-React/db')
            .then((res)=> {
                this.setState({
                    gameResults: res.data.gameResults
                })
            })
    }

    render() {
        const settings = {
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5
        };
        const gamePanel = this.state.gameResults.map(item => {
            return <GameResult key={item.id}
                               date={item.date}
                               hour={item.hour}
                               isLive={item.isLive}
                               homeTeamlogo={item.homeTeam.logo}
                               awayTeamlogo={item.awayTeam.logo}
                               homeTeamName={item.homeTeam.name}
                               homeTeamScore={item.homeTeam.score}
                               awayTeamName={item.awayTeam.name}
                               awayTeamScore={item.awayTeam.score}
            />
        })
        return (
            <div className="Scorebar inline-block">
                <Slider {...settings}>
                    {gamePanel}
                </Slider>
            </div>
        )
    }
}

export default Scorebar;