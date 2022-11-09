import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Operation from '../operation';
import '../css/button_default.css';
import '../css/operation_component.css';
import { Link } from 'react-router-dom';

function OperationComponent(props: Operation){
    return (
        <div className="col-md-6 col-lg-4 mb-3">
            <div className="product">
                <div>
                    <div className="mb-3">
                        <Link  to={props.page_link}>
                            <img src={require(`../images/${props.img_name}`).default} alt='Пример' />
                        </Link>
                    </div>
                    <div className="product-title">
                        <a className="nav-link" href={props.link}>
                            <b>{props.name}</b>
                        </a>
                    </div>
                    <br />
                    <div>{props.description}</div>
                </div>
                <br />
                <div className="mt-auto">
                    <Link className="btn button-default btn-try" to={props.page_link} type="button">Опробовать</Link>
                </div>
            </div>
        </div>
    );
}

export default OperationComponent;