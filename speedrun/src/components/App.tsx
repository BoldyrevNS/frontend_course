import React from 'react';
import '../css/App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Header />
        <div className='wrapper'>
          <Routes>
            <Route path="/" element={ <Home /> } />
          </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
