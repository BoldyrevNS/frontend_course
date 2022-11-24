import React from 'react';
import '../css/sideMenuPart.css';
import { Link } from "react-router-dom";
function SideMenuPart() {
return (
                                
                                    <Link className="side-bar-link" to="/curs">
                                        <div className="side-bar-part">
                                            Лекция 1.
                                        </div>
                                    </Link>
                                

)
}

export default SideMenuPart;