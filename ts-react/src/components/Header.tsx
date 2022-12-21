import React from 'react';
import logo from '../img/logo.png';
import search_icon from '../img/search_icon.png';
import upload_icon from '../img/upload_icon.png';
import settings_icon from '../img/settings_icon.png';
import report_icon from '../img/report_icon.png';
const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <div className="logo">
                        <a href="/">
                            <img src={logo}/>
                        </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    <img src={search_icon}/>
                                         Поиск
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <img src={upload_icon}/>
                                        Загрузить
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <img src={settings_icon}/>
                                        Настройки
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Report.tsx">
                                    <img src={report_icon}/>
                                    Жалоба
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;