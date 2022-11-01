import React from 'react';
import "../css/GameCard.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import GameData from '../models/GameData';


const GameCard = (props: GameData) => {
    return (
        <div className="col-md-6 col-lg-4 mb-3">
            <div className='game'>
                <img src={props.img} alt='logo'/>
                <div className='description'>
                    <p>{props.name}</p>
                </div>
            </div>
        </div>
    )
}

export default GameCard;


