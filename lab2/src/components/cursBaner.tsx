import React from 'react';
import '../css/cursBaner.css';
import { Link } from "react-router-dom";
function CursBaner() {
return (
    <div className="cur">
                <Link className='home-curs-link' to="/curs/">
                    <div>
                        
                        <img src="https://img.lovepik.com/original_origin_pic/19/01/08/5016ef557fa043da01371d7a86300fa3.png_wh860.png"  alt="curs-img" />
                        
                    </div>
                    <span>
                        <div className="curs-name">
                            <h3>Курс по программированию</h3>
                        </div>
                        <h5 className="curs-disc"> Описание курсов по программированию </h5>
                    </span>
                </Link>
    </div>

)
}

export default CursBaner;