import React from 'react';
import '../css/cursLentaPart.css';
import { Link } from "react-router-dom";
import LectionsData from '../models/LectionsData'

const CursLentaPart = (props: LectionsData) => {

    const onPage = {
        pathname: "/curs/task/" + props.id
    }
    return (
                                
        <Link className="curs-task-name" to={onPage}>
        <div className="lenta-title">
            
                {props.name} 
            
        </div>
    </Link>
                                

    )
}

export default CursLentaPart;