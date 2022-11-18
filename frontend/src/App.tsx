import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Lofi from './pages/lofi';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={ <Home /> } />
        <Route path={'/lofi'} element={ <Lofi/> } />
      </Routes>
    </div>
  );
}

export default App;
