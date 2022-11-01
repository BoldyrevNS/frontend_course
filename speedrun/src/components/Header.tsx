import React from 'react';
import "../css/Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <div className="logo">
                            <img src="https://www.speedrun.com/images/logo-white.png" alt="logo" />
                        </div>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/games'}>Games</Link> 
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/'}>News</Link>
                            </li>
                            <li className="navbar-item">
                                <Link className="nav-link" to={'/'}>About</Link>
                            </li>
                            <li className="navbar-item" v-if="!isAuth">
                                <Link className="nav-link" to={'/'}>Log in</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;