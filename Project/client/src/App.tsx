import React, { useEffect } from 'react';
import './App.css';
import Layout from "./components/Layout";
import {Route, Routes} from "react-router-dom";
import MainView from "./pages/Main/MainView";
import {useAppDispatch} from "./hooks";
import {getMe} from "./redux/features/auth/AuthSlice";
import DiscoverView from "./pages/discover/DiscoverView";
import LoginView from "./pages/Auth/LoginView";
import RegistrationView from "./pages/Auth/RegistrationView";

function App() {

    const dispatch = useAppDispatch()

    useEffect(() => {

        dispatch(getMe())
    }, [dispatch]);

    return (
    <Layout>
        <Routes>
            <Route path={'/'} element={ <MainView/> } />
            <Route path={'discover'} element={<DiscoverView/>} />
            <Route path={'login'} element={<LoginView/>}/>
            <Route path={'registration'} element={<RegistrationView/>}/>
        </Routes>
    </Layout>
  );
}

export default App;
