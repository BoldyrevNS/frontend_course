import '../../css/index.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Card2 = () => {
    return (
        <div className="card">
            <img
                src="https://imgproxy.onliner.by/gGlpeweEy9Sw3-LbZTWVn1A0Ba8yhwNE4bIlqssrSt0/rt:fill/s:400:200/aHR0cHM6Ly9jb250/ZW50Lm9ubGluZXIu/YnkvbmV3cy9sYXJn/ZS9lNDBiMDU4NmY0/NWExNTg3MmUxMmFk/NmRiNjYyY2U0YS5q/cGVn.webp"
                className="card-img-top" alt="Фотки нет"/>
                <div className="card-body">
                    <h5 className="card-title">На проблемном перекрестке на Немиге — лобовая авария</h5>
                    <p className="card-text">
                        Две легковушки столкнулись на улице Немиге, на том самом участке,
                        где нередко можно увидеть нарушения со стороны водителей,
                        желающих свернуть налево, на ул. Мясникова.
                        Еще пару лет назад здесь разрешен был левый поворот, однако в условиях плотного потока,
                        а следовательно и опасности маневра, его запретили — это нашло отражение в разметке и знаках.
                        Похоже, остались те, кто поворачивает по старой привычке.
                    </p>
                    <a href="#" className="btn btn-primary">Перейти к записи</a>
                </div>
        </div>
    )

}
export default Card2