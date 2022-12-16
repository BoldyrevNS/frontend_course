import React from "react";
import "../../css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, NavigateFunction, useNavigate} from "react-router-dom";

function HeaderLine() {
    const navigate: NavigateFunction = useNavigate();
    const navMain = () => {
        navigate("/")
    };

    return (
        <React.Fragment>
            <div className="header_line">
                <div className="container">
                    <ul onClick={navMain}>
                        <li><p>Главная</p></li>
                        <li><p>О нас</p></li>
                        <li><p>Доставка оплата</p></li>
                        <li><p>Конкурсы</p></li>
                        <li><p>Кофе</p></li>
                        <li><p>Партнеры</p></li>
                        <li><p>Техника</p></li>
                        <li><p>Контакты</p></li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
}


export default HeaderLine;