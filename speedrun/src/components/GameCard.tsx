import React from 'react';
import "../css/GameCard.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import GameData from '../models/GameData';
import { Link } from 'react-router-dom';



const GameCard = (props: GameData) => {
    const onPage = {
        pathname: "/game/" + props.id
    }
    return (
        <div className="col-md-6 col-lg-4 mb-3">
            <Link  to={onPage} >
                <div className='game'>
                    <img src={props.img} alt='logo'/>
                    <div className='description'>
                        <p>{props.name}</p>
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default GameCard;


