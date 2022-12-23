import '../../css/index.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Button = () => {
    return (
        <div className="container">
            <div className="d-grid gap-2">
                <button className="btn btn-primary load-btn" type="button">Загрузить ещё</button>
            </div>
        </div>
    )
}
export default Button
