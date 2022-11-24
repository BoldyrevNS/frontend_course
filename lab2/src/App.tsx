import React from 'react';
import { Routes, Route } from "react-router-dom";
import AuthContext from './authContext'
import './css/App.css';
import Footer from './components/footer';
import Header from './components/header';
import Home from "./pages/home";
import Curs from "./pages/curs";
import CursTask from "./pages/cursTask";
import Login from "./pages/login";
function App() {

  const [auth, setAuth] = React.useState<boolean>(false);

  return (

    <AuthContext.Provider value={{ auth, setAuth }}>
    <div className='all'>
    <Header />
    <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/curs/" element={ <Curs /> } />
          <Route path="/curs/task/" element={ <CursTask /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/add/curs/" element={ <CursTask /> } />
          <Route path="/add/lecture/" element={ <CursTask /> } />
    </Routes>
    <Footer />
    </div>

    </AuthContext.Provider>
  );
}

export default App;
