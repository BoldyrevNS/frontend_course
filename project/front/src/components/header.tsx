import "../css/header.css";
import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import accContext from "../components/authContext";
import ExitButton from '../components/exitButton';
import SideMenuPart from '../components/sideMenuPart';
import CursData from '../models/CursData';
import {getCurs} from '../apis/cursApi';
import { cursSet } from "../apis/cursSetApi";
import { useNavigate, NavigateFunction} from "react-router-dom";





function Header() {
    const navigate: NavigateFunction = useNavigate();
    const isLogin = React.useContext(accContext);
    const [cursData, setCursData] = React.useState<CursData[]>([]);
    const [cursCode, setCursCode] = React.useState<string>('');
    const [flag, setFlag] = React.useState<number>(-1);

    useEffect( () =>{
        if (isLogin?.auth === true){
            getCurs(setCursData);
        }
        
    }, [isLogin?.auth])

    useEffect( () =>{
        if (isLogin?.auth === true){
            getCurs(setCursData);
        }
        
    }, [isLogin?.auth])

    function handleAddCurs(event: any) {
        event.preventDefault()
        setCursCode(event.target.value.trim())
    }

    useEffect( () =>{
        if (flag===1){
            const setCurs = async () => {
                const temp = await cursSet(cursCode, 1, isLogin, navigate)
                setFlag(-1)
                navigate("/buff")
            }
            setCurs()
        }
        
    }, [cursCode, isLogin, navigate, flag])

    function handleSubmit(event: any) {
        event.preventDefault()
        if (cursCode.length === 8) {
            
            setFlag(1)
            
        }
    };
    

    
    return (
        <header>
            <div className="offcanvas offcanvas-start" id="demo">
                        <div className="offcanvas-header">
                            <h1 className="offcanvas-title">Ваши Курсы</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className="offcanvas-body-ch">
                                {isLogin?.auth === false && <div className="sidemenu-logout-text">Здесь будут ваши курсы</div>}
                                {isLogin?.auth === true && 
                                <div>
                                    {cursData.map(curs => <SideMenuPart {...curs} key={curs.id} />)}
                                    </div>}
                            </div>
                        </div>
                    </div>
            <div className="cont">
                <div className="logo-all">     
                    <div className="context-menu">
                        
                        <button type="button" className="btn btn-outline-secondary" data-bs-toggle="offcanvas" data-bs-target="#demo">亖</button>
                    </div>
                    
                    <Link className="home-link" to="/">
                        <div className="logo">
                            <img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" alt="logo-img" />
                        </div>
                    </Link>    
                    <Link className="home-link" to="/">
                        <div className="logo-text">
                            <span>
                                Класс
                            </span>
                        </div>
                    </Link>   
                    
                </div>
                <nav>
                    <ul>
                        {isLogin?.auth === true && <li><button  type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">+</button></li>}
                        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Присоединиться к новому курсу</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="mb-3">
                                                <label  className="col-form-label">Введите ID курса:</label>
                                                <input type="text" className="form-control" onChange={evt => handleAddCurs(evt)} id="recipient-name"/>
                                            </div>
                                            {/* <div className="errors">Курса с таким ID не существует</div> */}
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary" onClick={(event) => handleSubmit(event)}>Присоединиться</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {isLogin?.auth === false && <Link className="home-link" to="/signup"><li> <button type="button"className="btn btn-outline-secondary" >Регистрация</button></li> </Link>}
                        {isLogin?.auth === false && <Link className="home-link" to="/login"><li> <button type="button"className="btn btn-outline-secondary" >Вход</button></li> </Link>}
                        {isLogin?.auth === true && <li> <ExitButton /> </li> }
                    </ul>
                </nav>
            </div>
        </header>

    );
}


export default Header;