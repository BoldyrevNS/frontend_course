import './header.scss';
import all from '../../assets/img/reading-book.png';
import cards from '../../assets/img/card-game.png';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Table from '../Table/table';
import Cards from '../Cards/cards';
import Error from '../Error/error';
import MainPage from '../MainPage/mainPage';
import { useState } from 'react';
import meme from '../../assets/img/grumpy-cat.png';
import { useContext } from 'react';
import DataContext from '../context';

export function Header() {

    const context = useContext(DataContext);
   

    const handleChange = () =>{
        context!.setAccept(0)
    }



    if (context!.accept === 1){

        return (
            <BrowserRouter>
                <div className="header">
                    <button className="header__exit" onClick={handleChange}>
                        exit
                    </button>
                    <Link to="/"> <p className="header__text">Welcome to English club!</p> </Link>
                    <Link to="/table"> <button className="header__buttons">
                        <img src={all} alt="btn all words" />
                        <p className="header__buttons__text">All words</p>
                    </button> </Link>
                    <Link to="/game"> <button className="header__buttons">
                        <img src={cards} alt="btn cards" />
                        <p className="header__buttons__text">My cards</p>
                    </button> </Link>
                </div>
                <Routes>
                    <Route path="/game" element={<Cards/>} />
                    <Route path="/table" element={<Table />} />
                    <Route path="/" element={<MainPage />} />
                    <Route path="*" element={<Error img={meme} header="Ошибка 404" p="Страница не найдена" />} />
                </Routes>
            </BrowserRouter>
        );
               
    }
    else{
        return (
            <BrowserRouter>
                <div className="header">
                    <Link to="/"> <p className="header__text">Welcome to English club!</p> </Link>
                </div>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="*" element={<Error img={meme} header="Ошибка 404" p="Страница не найдена" />} />
                </Routes>
            </BrowserRouter>
        );
    }
    
}


export default Header;