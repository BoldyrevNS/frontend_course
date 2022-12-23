import '../../css/index.css';
import { Link } from "react-router-dom";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
    return(
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <div className = "logo">
                            <img src = "https://gc.onliner.by/images/logo/onliner_logo.v3.png?1663319059"/>
                        </div>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <img src="https://gc.onliner.by/images/i-fire-orange.png" alt="Logo" width="24" height="24" className="d-inline-block align-text-top"/>
                                    Категории
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/'}>Новости</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/Login'}>Войти</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Поиск в новостях" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Поиск</button>
                        </form>
                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link disabled">Актуальное:</a>
                            <a className="nav-link active text_link" aria-current="page" href="#">Все</a>
                            <a className="nav-link active text_link" aria-current="page" href="#">Аварии</a>
                            <a className="nav-link active text_link" aria-current="page" href="#">Разборки на дороге</a>
                            <a className="nav-link active text_link" aria-current="page" href="#">Законы</a>
                            <a className="nav-link active text_link" aria-current="page" href="#">Подержаные авто</a>
                            <a className="nav-link active text_link" aria-current="page" href="#">Новости автомира</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header
