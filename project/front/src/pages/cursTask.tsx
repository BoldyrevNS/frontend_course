import React, { useEffect } from 'react';
import '../css/cursTask.css';
import LectionsData from '../models/LectionsData'
import {getLections} from '../apis/lectionsApi';
import { useParams } from 'react-router-dom'

function CursTask() {

    const {lectionsId} = useParams()
    const [lectionsData, setLectionsData] = React.useState<LectionsData>({
        id: 0,name:'',text:'', date:'', curs:''});

        useEffect( () =>{
            getLections(setLectionsData,lectionsId, '')
        }, [lectionsId])
return (
    <div className="container">
        <div className="task-title">
            <h3> {lectionsData.name} </h3>
        </div>
        <div className="task-text">
            <span>
                {lectionsData.text}
            </span>
        </div>

    </div>

)
}

export default CursTask;