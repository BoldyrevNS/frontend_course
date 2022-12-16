import React from "react";
import "../../css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, NavigateFunction, useNavigate} from "react-router-dom";

function Footer() {
    const navigate: NavigateFunction = useNavigate();
    const nav = () => {
        navigate("/")
    };

    return (
        <React.Fragment>
            <div className="footer">
                <div className="container">
                    <ul onClick={nav}>
                        <li><p>Контакты</p></li>
                        <li><p>Отзывы</p></li>
                        <li><p>Поддержка</p></li>
                        <li><p>Возврат денежных средств</p></li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
}


export default Footer;