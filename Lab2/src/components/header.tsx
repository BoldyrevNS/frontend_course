import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import React from 'react';
import { Link } from 'react-router-dom'
import '../css/header.css'
import authContext from './AuthContext';


export function Header(){

    const isLogin = React.useContext(authContext);
    return <><header>
              
    <nav className="navbar navbar-expand-lg">

      <div className="container">
          <Link to="/">
              <div className="logo">
                  <img src="https://mangalib.me/images/manga.png?435"/>
              </div>
          </Link>

          <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="navbar-item">
                    <div className="nav-item dropdown">
                      <div className="navbar-item" >
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-justify" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Каталог
                        </a>  
    
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="#">Манга</a></li>
                          <li><a className="dropdown-item" href="#">Манхва</a></li>
                          <li><a className="dropdown-item" href="#">Маньхуа</a></li>
                          <li><hr className="dropdown-divider"/></li>
                          <li><a className="dropdown-item" href="#">Весь</a></li>
                        </ul>
                      </div>
    
                    </div>
                  </li>
                  <li className="navbar-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Поиск
                    </a>  
                  </li>

                  { isLogin?.isAuth &&
                      <li className="navbar-item">
                          <Link className="nav-link" to={'/favourites'}>Избранное</Link>
                      </li>
                  }

                  { !isLogin?.isAuth &&
                      <li className="navbar-item">
                          <Link className="nav-link" to={'/login'}>Вход</Link>
                      </li>
                  }
                  
                  { !isLogin?.isAuth &&
                      <li className="navbar-item">
                          <a className="nav-link" href="./signup.html">Регистрация</a>
                      </li>
                  }
                  
                  { isLogin?.isAuth &&
                    <li className="navbar-item">
                      <Link className="nav-link" to='/login' onClick={
                          ()=>{
                              localStorage.clear()
                              isLogin.setAuth(false)
                          }
                          }>Выход</Link>
                    </li>
                  }
              </ul>
          </div>

      </div>
    </nav>

  </header></>
}