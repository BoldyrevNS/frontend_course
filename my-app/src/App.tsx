import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
     <Routes>
       <Route path={'/'} element={<Home />} />
       <Route path={'/login'} element={<Login />} />
     </Routes>
    </div>
  );
}

export default App;
