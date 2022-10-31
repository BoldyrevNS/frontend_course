import React from 'react';
import "../css/Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import RunCard from './RunCard';

const Home = () => {
    return (
        <div className="widget-container">
            <div className="widget-header">
                <div className="widget-title">LATEST RUNS</div>
            </div>
            <div className="widget-body">
            <div className="runs-list row">
                <div className="col-md-6 col-lg-4 mb-3">
                    <RunCard />
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                    <RunCard />
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                    <RunCard />
                </div>
                <div className="col-md-6 col-lg-4 mb-3">
                    <RunCard />
                </div>
            </div>
            </div>    
        </div>
    )
}

export default Home;