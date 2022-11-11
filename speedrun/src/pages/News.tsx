import React from 'react';
import { useParams } from 'react-router-dom';
import { getNews } from '../apis/newsApi';
import NewsData from '../models/NewsData';
import "../css/News.css";

const News = () => {
    const {newsId} = useParams()
    const [newsData, setNews] = React.useState<NewsData>()

    React.useEffect( () =>{
        getNews(setNews, newsId)
    }, [newsId])
    return (
    <div className="news-page">
        <div className="date">{newsData?.date}</div>
        <h1 className="title">{newsData?.header}</h1>
        <p className="summary">{newsData?.preview}</p>
        <div className="poster">
            <img src={newsData?.img} alt='logo'/>
        </div>
        <p className="main">
            {newsData?.text}
        </p>
    </div>
    )
}

export default News;