import '../../css/index.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Card3 = () => {
    return (
        <div className="card">
            <img
                src="https://imgproxy.onliner.by/UzzxERnNqrQ0_rnCO-XQfcrylIUg835pXkOD3Z8e6No/rt:fill/s:400:200/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvbmV3cy9sYXJn/ZS8wMTFhZThiMjc2/N2YxN2E2ZmNhYjY1/OWIyNDBhMGMwMi5q/cGVn.webp"
                className="card-img-top" alt="Фотки нет"/>
                <div className="card-body">
                    <h5 className="card-title">На МКАД произошло лобовое столкновение — автомобилям явно потребуется
                        серьезный ремонт</h5>
                    <p className="card-text">
                        Сегодня днем 46-летний водитель Lada двигался по МКАД
                        со стороны проспекта Независимости. Подъезжая к логойской развязке,
                        он не учелй дорожные и погодные условия, выскочил на встречную полосу движения,
                        где столкнулся с автомобилем Renault, пишет телеграм-канал столичной ГАИ.
                    </p>
                    <a href="#" className="btn btn-primary">Перейти к записи</a>
                </div>
        </div>
    )

}
export default Card3