import './App.css';
import './main.css'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Report from "./pages/Report";

function App() {
  return (
      <BrowserRouter>
          <Header/>
          <div>
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/report" element={<Report/>}/>
              </Routes>
          </div>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
