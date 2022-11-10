import React, { useEffect } from 'react';
import "../css/Games.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import GameData from '../models/GameData';
import { getGames } from '../apis/gameApi';
import GameCard from '../components/GameCard';
import Widget from '../components/ContentWidget';


const Games = () => {
    const [gameData, setGameData] = React.useState<GameData[]>([]);
    useEffect( () =>{
        getGames(setGameData)
    }, [])
    return (
        <>
            <Widget title='Games'>
                <div className='row'>
                    { gameData.map(game => <GameCard {...game} key={game.id} />) }   
                </div>
            </Widget>
        </>
    )
}

export default Games;