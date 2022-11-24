import React from 'react';
import '../css/curs.css';
import { Link } from "react-router-dom";
function Curs() {
return (
    <div className="container">
        <div className="title-all">
            <img className="curs-logo" src="https://thumbs.dreamstime.com/b/programaci%C3%B3n-codificaci%C3%B3n-de-concepto-plano-54998068.jpg" alt="curs-main-img"  />
            <div className="title">
                    <h3> Курс по программированию для начинающих </h3>
            </div>
        </div>
       
        <section className="lenta">

            <Link className="curs-task-name" to="/curs/task/">
                <div className="lenta-title">
                    
                        Лекция 1. Рор. 
                    
                </div>
            </Link>
        <div className="leave-button"> <button type="button"  className="btn  btn-outline-danger btn-lg">Покинуть курс</button></div>    

        </section>
    </div>

)
}

export default Curs;