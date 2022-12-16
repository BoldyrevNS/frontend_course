import * as React from "react";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Catalog from "./pages/Catalog";
import Confirm from "./components/Confirm";

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/catalog" element={<Catalog/>}/>
                <Route path="/confirm" element={<Confirm/>}/>
            </Routes>
        </BrowserRouter>)
}

export default AppRouter;