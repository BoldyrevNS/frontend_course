import React from 'react';
import '../css/home.css';
import accContext from "../authContext";
import CursBaner from '../components/cursBaner';
import { Link } from "react-router-dom";
function Home() {


    const isLogin = React.useContext(accContext);
return (
    <div>
     <main className="cont">
     {isLogin?.auth === false &&
        <div className='aa text-center'>
            <img className='main-img' src="https://thumbs.dreamstime.com/b/programaci%C3%B3n-codificaci%C3%B3n-de-concepto-plano-54998068.jpg"  alt="main-img" />
            <Link className="home-link" to="/login"><button type="submit" className="btn btn-primary w-20 ">Войти в аккаунт</button></Link>
        </div>
     }       
     {isLogin?.auth === true && 
        <section className="curs-list">
            <CursBaner />
            <CursBaner />
            <CursBaner />
            <CursBaner />
            <CursBaner />
            <CursBaner />
            
        </section>
    }
 </main>
 </div>
)
}

export default Home;