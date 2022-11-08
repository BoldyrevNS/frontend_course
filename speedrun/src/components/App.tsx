import React from 'react';
import '../css/App.css';
import Footer from './Footer';
import Header from './Header';
import Home from '../pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Games from '../pages/Games';
import Game from '../pages/Game';
import About from '../pages/About';

const App = () => {
  return (
    <div className="app">
      <Header />
        <div className='wrapper'>
          <Routes>
            <Route path={'/'} element={ <Home /> } />
            <Route path={'/games'} element={<Games />} />
            <Route path={'/game/:gameId'} element={<Game />} />
            <Route path={'/about'} element={<About />} />
          </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
