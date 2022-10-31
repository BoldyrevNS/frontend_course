import React from 'react';
import "../css/RunCard.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const RunCard = () =>{
    return (
        <div className='run'>
            <img src='https://www.speedrun.com/gameasset/k6qg0xdg/cover?v=422f9b8' alt='logo'/>
            <div className='description'>
                <p>Game: Dark Souls III</p>
                <p>Runner: qwerty</p>
                <p>Time: 0</p>
            </div>
        </div>
    )
}

export default RunCard;