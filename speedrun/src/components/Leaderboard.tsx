import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Leaderboard.css";
import RunShort from '../models/RunShort';
import { getRunsShort } from '../apis/runApi';
import GameData from '../models/GameData';
import Modal from './Modal';

const get_time = (hour:number, minutes: number, seconds: number) => {
    return `${hour}h ${minutes}m ${seconds}s`
}

const Leaderboard = (game: GameData) =>{
    const [runs, setRuns] = React.useState<RunShort[]>([])
    const [rule, setRule] = React.useState<boolean>(false)
    const [form, setForm] = React.useState<boolean>(false)

    React.useEffect(()=>{
        getRunsShort(setRuns, game.id)
    }, [game.id])

    const switchForm = () =>{
        setForm(!form)
    }
    const switchRule = () =>{
        setRule(!rule)
    }

    return (
        <>
            {rule && <Modal title="Rules" onClose={switchRule}>
            <p>{game.rule}</p>
            </Modal>}

            {form && <Modal title="Add run" onClose={switchForm}>
            <h1>Input</h1>
            </Modal>}
    
        <div className="leaderboard">
            <div className="header">
                <h1 className='name-table'>Leaderboard</h1>
                <div className="ma">
                    <button onClick={switchRule} type="submit" className="btn-green">Rules</button>
                </div>
                <div className="ma">
                    <button onClick={switchForm} type="submit" className="btn-green">Run</button>
                </div>
            </div>
            <hr/>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Time</th>
                        <th scope="col">Link</th>
                    </tr>
                </thead>
                <tbody>
                    {runs.map((run,index) => 
                    <tr>
                        <th scope="row">{index+1}</th>
                        <td>{run.userName}</td>
                        <td>{get_time(run.hours, run.minutes, run.seconds)}</td>
                        <td>
                            <a href={run.video}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera-video" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"/>
                                </svg>
                            </a>
                        </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Leaderboard;