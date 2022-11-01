import React, { useEffect } from 'react';
import "../css/Games.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios, { AxiosResponse } from 'axios';
import GameData from '../models/GameData';
import GameCard from '../components/GameCard';



const Games = () => {
    const gamePath = 'http://localhost:8000/api/speedrun/games/'
    const [gameData, setGameData] = React.useState<JSX.Element[]>([]);
    useEffect( () =>{
        try {
            let promise = new Promise((resolve, reject) => {
                Axios.get(gamePath,
                { params:{home:true}, responseType: "json" }
                ).then
                    (response => {
                        resolve(response);
                    })
                    .catch((e: Error) => {
                        reject(e);
                    });
            });
            promise
                .then(
                    result => {
                        let data: GameData[] = (result as AxiosResponse<any, any>).data;
                        setGameData(data.map(gameCard => <GameCard key={gameCard.id} {...gameCard}/>));
                    },
                    error => {
                        alert(`${error.response.status} ${error.response.data}.`);
                    }
                );

        } catch (error) {
            console.log(error)
        }
    }, [])
    return (
        <div className="widget-container">
            <div className="widget-header">
                <div className="widget-title">Games</div>
            </div>
            <div className="widget-body">
            <div className="runs-list row">    
                {gameData}
            </div>
            </div>    
        </div>
    )
}

export default Games;