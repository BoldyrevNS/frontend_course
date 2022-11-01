import React from 'react';
import "../css/RunCard.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import RunData from '../models/RunData';


const RunCard = (props: RunData) =>{
    
    return (
        <div className="col-md-6 col-lg-4 mb-3">
            <a href={props.video}>
                <div className='run'>
                    <img src={props.img} alt='logo'/>
                    <div className='description'>
                        <p>{props.game_name}</p>
                        <p>Runner: {props.userName}</p>
                        <p>Time: {`${props.hours}h ${props.minutes}m ${props.seconds}s`}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default RunCard;