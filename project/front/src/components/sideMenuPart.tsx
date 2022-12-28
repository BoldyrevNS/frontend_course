import React from 'react';
import '../css/sideMenuPart.css';
import { Link } from "react-router-dom";
import CursData from '../models/CursData'

const SideMenuPart = (props: CursData) => {
    const onPage = {
        pathname: "/curs/" + props.id
    }
    return (
                                
                                    <Link className="side-bar-link" to={onPage}>
                                        <div className="side-bar-part">
                                            {props.name}
                                        </div>
                                    </Link>
                                

    )
}

export default SideMenuPart;