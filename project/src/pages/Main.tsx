import React from "react";
import Header from "../components/Main/Header";
import HeaderLine from "../components/Main/HeaderLine";
import MainImage from "../components/Main/MainImage";
import InfoHome from "../components/Main/InfoHome";
import Footer from "../components/Main/Footer";
import DownFooter from "../components/Main/DownFooter";

function Main() {
    return (
        <div>
            <Header/>
            <HeaderLine/>
            <MainImage/>
            <InfoHome/>
            <Footer/>
            <DownFooter/>
        </div>
    );
}

export default Main;