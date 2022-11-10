import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RunCard from '../components/RunCard';
import RunData from '../models/RunData';
import { getLatestRuns } from '../apis/homeApi';
import Widget from '../components/ContentWidget';


const Home = () => {
    const [runData, setRunData] = React.useState<RunData[]>([]);
    useEffect( () =>{
        getLatestRuns(setRunData);
    }, [])

    return (
        <>
            <Widget title='LATEST RUNS'>
                <div className='row'>
                    { runData.map(run => <RunCard {...run} key={run.id} />) }
                </div>
            </Widget>
        </>
        
    )
}

export default Home;