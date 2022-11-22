import React from 'react';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Home } from './pages/home';
import { PageManga } from './pages/mangaPage';

function App() {
  return (
    <>
    <div className="wrapper">

      <Header/>
      <Routes>
        <Route path={'/'} element={ <Home /> } />
        <Route path={'/pageManga'} element={ <PageManga/> } />
      </Routes>
    </div>
    <Footer/></>
  );
}

export default App;
