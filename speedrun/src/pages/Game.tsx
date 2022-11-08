import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameData from '../models/GameData';
import { getGames } from '../apis/gameApi';
import { useParams } from 'react-router-dom';
import GamePreview from '../components/GamePreview';
import Leaderboard from '../components/Leaderboard';



const Game = () => {
    const {gameId} = useParams()
    const [gameData, setGameData] = React.useState<GameData>({
        id: 0,name:'',img:'',publisher:'',developer:'',rule:''});
    useEffect( () =>{
        getGames(setGameData, gameId)
    }, [gameId])
    return (
        <>
            <GamePreview {...gameData}/>
            <Leaderboard game_id={gameData.id} rule={gameData.rule} />
        </>
    )
}

export default Game;