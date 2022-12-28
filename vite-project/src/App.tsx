import { useState } from 'react'

import { Routes, Route } from 'react-router-dom';

import { CustomRouter, Header, Footer } from './components';
import { MainPage, CatalogPage, RegistrationPage, FeedbackPage } from './pages';

import { history } from './utils';

import './App.scss'

function App() {
  return (
    <div className='App'>
      <Header text='header'/>
      <CustomRouter history={history}>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/catalog" element={<CatalogPage/>} />
          <Route path="/registration" element={<RegistrationPage/>} />
          <Route path="/feedback" element={<FeedbackPage/>} />
        </Routes>
      </CustomRouter>
    <Footer text='footer' />
    </div>
    
  )
}

export default App
