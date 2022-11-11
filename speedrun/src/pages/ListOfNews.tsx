import React from 'react';
import { getNews } from '../apis/newsApi';
import NewsCard from '../components/NewsCard';
import "../css/ListOfNews.css";
import NewsData from '../models/NewsData';


const ListOfNews = () => {
    const [newsData, setNews] = React.useState<NewsData[]>([])

    React.useEffect( () =>{
        getNews(setNews)
    }, [])

    return (
    <div className="widget-news">
        <div className="title">
            <h2>News</h2>
        </div>
        <hr/>
        <div className="list-news row">
            <div className="col-md-4 mb-3">
                { newsData.map(news => <NewsCard {...news} key={news?.id} />) } 
            </div>
            
        </div>
        
    </div>
    )
}

export default ListOfNews;