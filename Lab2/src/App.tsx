import React from 'react';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Home } from './pages/home';
import { PageManga } from './pages/mangaPage';
import Login from './pages/login';
import { checkToken } from './api/checkTokenApi';
import AuthContext from './components/AuthContext';
import { Favourites } from './components/favourites';

function App() {

  const [isAuth, setAuth] = React.useState<boolean>(false);
  React.useEffect(()=>{
    checkToken(setAuth)
  }, [])

  return (
    <AuthContext.Provider value={{isAuth, setAuth}}>
      <>
      <div className="wrapper">

        <Header/>
        <Routes>
          <Route path={'/'} element={ <Home /> } />
          <Route path={'/manga/:mangaId'} element={ <PageManga/> } />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/favourites'} element={<Favourites />} />
        </Routes>
      </div>
      <Footer/></>
    </AuthContext.Provider>
  );
}

export default App;
