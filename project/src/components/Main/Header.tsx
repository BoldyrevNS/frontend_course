import React from "react";
import "../../css/style.css";
import "bootstrap/dist/css/bootstrap.css";
import basket from '../../images/bascet-white.svg';
import logo1 from '../../images/logo1.png';
import logo2 from '../../images/logo2.png'
import logo3 from '../../images/logo3.png'
import {Link, NavigateFunction, useNavigate} from "react-router-dom";

function Header() {
    const navigate: NavigateFunction = useNavigate();

    const noAuth = () => {
        navigate("/login")

    };
    const auth = () => {
        alert("Вы перешли в корзину");
    };

    let handler = noAuth;
    if (localStorage.getItem('token') !== '' && localStorage.getItem('token') !== null) {
        handler = auth;
    }

    return (
        <React.Fragment>
            <div className="header">
                <div className="container">
                    <div className="left_header">
                        <img className="logoimg"
                             src={logo2}
                             alt=""/>
                        <img className="logoimgBut"
                             src={logo1}
                             alt=""/>
                        <img className="logoimg"
                             src={logo3}
                             alt=""/>
                        <div className="fs-1 fw-lighter"> EVADIA</div>
                    </div>
                    < div
                        className="right_header">
                        <div className="info">
                            <div className="big_phone fw-lighter"> +7
                                900 - 000 - 01 - 01
                            </div>
                            < div
                                className="head_mail fw-lighter"> кис
                                @you_cat_and_i_cat
                            </div>
                        </div>
                        < div className="basket-h">
                            <img className="btnBasket" src={basket} onClick={(event) => {
                                handler()
                            }}/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}


export default Header;