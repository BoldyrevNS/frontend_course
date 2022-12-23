import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../css/card.css';
import MangaData from '../models/Manga';

export function Card(props:MangaData) {
    const onPage = {
        pathname: "/manga/" + props.id
    }
    return <>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6">
            <Link to={onPage}>
                <div className="card">
                    <img src = {props.img} className="poster" alt="..." />
                    <div className="card-img-overlay">
                        <div className="card_text_back">
                            <p className="card-text"><small>{props.name_ru}</small></p>
                            <h6 className="card-title">{props.type}</h6>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    </>
}