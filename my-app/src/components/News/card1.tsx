import '../../css/index.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Card1 = () => {
    return (
        <div className="card">
            <img
                src="https://imgproxy.onliner.by/h_tGfEw5zAy2KDFZKB_kssAyFfYrKN_SMmsnBKx29Vc/rt:fill/s:400:200/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvbmV3cy9sYXJn/ZS84ODgyZTliODUx/YWJiZWExOTdmYTk2/NmM4NzgyNTM0YS5q/cGVn.jpg"
                className="card-img-top" alt="Фотки нет"/>
                <div className="card-body">
                    <h5 className="card-title">Еще один автобус МАЗ сгорел в Питере</h5>
                    <p className="card-text">
                        В ночь с субботы на воскресенье в Сестрорецке (часть агломерации Санкт-Петербурга) сгорел
                        пассажирский автобус марки МАЗ.
                        На место выехали 10 пожарных на двух машинах.
                        Горящее транспортное средство тушили полчаса.
                        Это далеко не первое возгорание поставленного из Беларуси транспорта.
                    </p>
                    <a href="#" className="btn btn-primary">Перейти к записи</a>
                </div>
        </div>
    )

}
export default Card1