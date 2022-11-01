import React, { useEffect } from 'react';
import "../css/Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import RunCard from '../components/RunCard';
import Axios, { AxiosResponse } from 'axios';
import RunData from '../models/RunData';


const Home = () => {
    const runPath = 'http://localhost:8000/api/speedrun/runs/'
    const [runData, setRunData] = React.useState<JSX.Element[]>([]);
    useEffect( () =>{
        try {
            let promise = new Promise((resolve, reject) => {
                Axios.get(runPath,
                { params:{home:true}, responseType: "json" }
                ).then
                    (response => {
                        resolve(response);
                    })
                    .catch((e: Error) => {
                        reject(e);
                    });
            });
            promise
                .then(
                    result => {
                        let data: RunData[] = (result as AxiosResponse<any, any>).data;
                        setRunData(data.map(runCard => <RunCard key={runCard.id} {...runCard}/>));
                    },
                    error => {
                        alert(`${error.response.status} ${error.response.data}.`);
                    }
                );

        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <div className="widget-container">
            <div className="widget-header">
                <div className="widget-title">LATEST RUNS</div>
            </div>
            <div className="widget-body">
            <div className="runs-list row">    
                {runData}
            </div>
            </div>    
        </div>
    )
}

export default Home;