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
import Login from '../pages/Login';
import AuthContext from './AuthContext';
import Signup from '../pages/Signup';
import ListOfNews from '../pages/ListOfNews';
import News from '../pages/News';


const App = () => {
  const [isAuth, setAuth] = React.useState<boolean>(false);

  return (
    <AuthContext.Provider value={{isAuth, setAuth}}>
      <div className="app">
        <Header />
          <div className='wrapper'>
          
            <Routes>
              <Route path={'/'} element={ <Home /> } />
              <Route path={'/games'} element={<Games />} />
              <Route path={'/game/:gameId'} element={<Game />} />
              <Route path={'/about'} element={<About />} />
              <Route path={'/login'} element={<Login />} />
              <Route path={'/signup'} element={<Signup />} />
              <Route path={'/news'} element={<ListOfNews />} />
              <Route path={'/news/:newsId'} element={<News />} />
            </Routes>
          
          </div>
          <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
