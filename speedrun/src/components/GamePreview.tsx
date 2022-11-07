import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameData from '../models/GameData';
import "../css/GamePreview.css";

const GamePreview = (props: GameData) =>{
    return (
        <div className="game-content">
            <div className="widget-game">
                <img className="poster" src={props.img} alt='logo'/> 
                <div className="meta">
                    <div className="widget-title">{props.name}</div>
                    
                    <div className="developer">Developer(s): {props.developer}</div>
                    
                    <div className="publisher">Publisher(s): {props.publisher}</div>
                </div> 
            </div>
        </div>
    )
}

export default GamePreview;
