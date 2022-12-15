import './App.css';
import './main.css'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./components/Home";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
      <BrowserRouter>
          <Header/>
          <div>
              <Routes>
                  <Route path="/" element={<Home/>} />
              </Routes>
          </div>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
