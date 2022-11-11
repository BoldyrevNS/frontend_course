import React from 'react';
import "../css/Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse'
import { Link } from "react-router-dom";
import { Logout } from '../apis/logoutApi';
import authContext from './AuthContext';

const Header = () => {
    const isLogin = React.useContext(authContext);
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container p-0">
                    <Link className="navbar-brand" to={'/'}>
                        <div className="logo ms-4">
                            <img src="https://www.speedrun.com/images/logo-white.png" alt="logo" />
                        </div>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/games'}>Games</Link> 
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/news'}>News</Link>
                            </li>
                            <li className="navbar-item">
                                <Link className="nav-link" to={'/about'}>About</Link>
                            </li>
                            { !isLogin?.isAuth &&
                                <li className="navbar-item">
                                    <Link className="nav-link" to={'/login'}>Log in</Link>
                                </li>
                            }
                            { !isLogin?.isAuth &&
                                <li className="navbar-item">
                                    <Link className="nav-link" to={'/signup'}>Sign up</Link>
                                </li>
                            }
                            { isLogin?.isAuth &&
                                <li className="navbar-item">
                                    <Link className="nav-link" to='/login' onClick={
                                        ()=>{
                                            Logout()
                                            isLogin.setAuth(false)
                                        }
                                        }>Log out</Link>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;

