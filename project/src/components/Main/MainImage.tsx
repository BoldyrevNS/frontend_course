import React from "react";
import "../../css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigateFunction, useNavigate} from "react-router-dom";

function MainImage() {
    const navigate: NavigateFunction = useNavigate();
    const navCatalog = () => {
        navigate("/catalog")
    };
    return (
        <React.Fragment>
            <div className="big_image">
            <a className="button" onClick={navCatalog}>Смотреть каталог</a>
                <div className="big_image_pictures">
                    <div className="text">Лучшие сорта</div>
                </div>
            </div>
        </React.Fragment>
    );
}


export default MainImage;