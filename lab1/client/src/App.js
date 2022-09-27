import './components/App.scss';
import './normalize.css';
import AllcharactersPath from './components/allcharacterspath';
import MaincharactersPath from './components/maincharacterspath';
import MinorcharactersPath from './components/minorcharacterspath';
import EvilsPath from './components/evilspath';
import PlacePath from './components/placepath';
import './components/allcharacters';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

  return ( 
    <BrowserRouter>
      <div className = "App" >
        <div className="App__container">
          <div className="App__container__text">
            Welcome to Adventure Time Wiki!
            <hr></hr>
          </div>
          <div className="App__container__category">
              Выберите категорию поиска:
              <Link to="/allcharacters"><button className="App__container__category__btn1">Все персонажи</button></Link>
              <Link to="/maincharacters"><button className="App__container__category__btn2">Главные герои</button></Link>
              <Link to="/evils"><button className="App__container__category__btn5">Злодеи</button></Link>
              <Link to="/minorcharacters"><button className="App__container__category__btn3">Второстепенные персонажи</button></Link>
              <Link to="/place"><button className="App__container__category__btn4">Места</button></Link>
          </div>
          <Routes>
            <Route path="/allcharacters" element={<AllcharactersPath/>}/>
            <Route path="/maincharacters" element={<MaincharactersPath/>}/>
            <Route path="/minorcharacters" element={<MinorcharactersPath/>}/>
            <Route path="/evils" element={<EvilsPath/>}/>
            <Route path="/place" element={<PlacePath/>}/>
          </Routes>
        </div>
      </div >
  </BrowserRouter>
  );
  
}

export default App;