import React from 'react';
import {Header} from './components/App/Header'
import { Footer } from './components/App/Footer';
import {Hero} from './Views/Hero';
import { Bestiary } from './Views/Bestiary';
import {Login} from './Views/Login';
import {Monster} from './Views/Bestiary/Monster';
import { Registration } from './Views/Registration';
import { useState } from 'react';
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'


const App = () => {

  const [userName, setUserName] = useState<string|null>("Пользователь");
  const rememberMe = localStorage.getItem('token') !== null;

  const updateName = () => {
    if (rememberMe)
    {
      setUserName(localStorage.getItem('name'));
    }
  }


  const setName = (name:string) => {
    setUserName(name);
  }

  React.useEffect(updateName,[]);



  return (
      <BrowserRouter>
      <body>
        <div className="Body">
          <Header/>
          <Routes>
            <Route path="/hero" element = {<Hero/>}/>
            <Route path='/' element = {<Bestiary/>} />
            <Route path = '/login' element = {<Login setNickName={setName}/>}/>
            <Route path='/autorisation' element = {<Registration setNickName={setName}/>}/>
            <Route path='/monster/:id' element = {<Monster />}/>
          </Routes>
          <Footer nickName = {userName}/>
        </div>
      </body>
      </BrowserRouter>
  );
}

export default App;
