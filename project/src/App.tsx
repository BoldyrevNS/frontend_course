import {useState} from "react";
import "./App.css";
import {MainPage} from "./pages";
// import {Routes, Route} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {CustomRouter, Footer, Header} from "./components";
import {history} from "./utils"
import {Catalog} from "./pages/Catalog";
import {Auth} from "./pages/Auth";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className={'App'}>
            <Header text={"Это заголовок"}/>
            <CustomRouter history={history}>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/catalog" element={<Catalog/>}/>
                    <Route path="/auth" element={<Auth/>}/>
                </Routes>
            </CustomRouter>
            <Footer text={"ноги"}/>
        </div>

    )
}

export default App
