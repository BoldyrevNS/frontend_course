import React from "react";
import Header from "../components/Main/header";
import Card1 from "../components/News/card1";
import Card2 from "../components/News/card2";
import Card3 from "../components/News/card3";
import Button from "../components/News/button";
import Footer from "../components/Main/footer";
import "bootstrap/dist/css/bootstrap.css";

function Home() {
    return (
        <div className="home">
            <Header/>
            <h3>Все новости</h3>
            <main className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-4 mb-5">
                <Card1/>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                <Card2/>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                <Card3/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-4 mb-5">
                        <Card3/>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <Card1/>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                        <Card2/>
                    </div>
                </div>
            </main>
            <Button/>
            <Footer/>
        </div>
    );
}

export default Home;