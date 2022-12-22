import React from "react"
import {Route, Routes} from "react-router-dom";
import {Capabilities} from "../capabilities/Capabilities";
import {Advantages} from "../advantages/Advantages";
import {Main} from "../main/Main";
import Registration from "../registration/Registration";
import Login from "../login/Login";
import {InfoPage} from "../info_page/InfoPage";
import Profile from "../profile/Profile";

export function Body() {

    return(
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/advantages" element={<Advantages/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/infoPage" element={<InfoPage />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    )
}