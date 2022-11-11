import React from 'react';
import { Link } from 'react-router-dom';
import "../css/NewsCard.css";
import NewsData from '../models/NewsData';



const NewsCard = (props: NewsData) => {
    const onPage = {
        pathname: "/news/" + props.id
    }
    return (
        <div className="news">
        <Link to={onPage}>
            <img  src={props.img} alt='logo'/>
            <div className="description">
                <div className="date">{props.date}</div>
                <p className="title">
                    {props.header}
                </p>
                <p className="summary">
                    {props.preview}
                </p>
            </div>
        </Link>
    </div>
    )
}

export default NewsCard;