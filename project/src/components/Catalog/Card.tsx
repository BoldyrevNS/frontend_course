import React from "react";
import "../../css/style.css";
import "../../css/catalog.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import card_img from '../../images/product.png';
import Product from "../../model/Product"
import FullStar from "./FullStar";
import VoidStar from "./VoidStar";
import {NavigateFunction, useNavigate} from "react-router-dom";

function Card(props: Product) {
    const navigate: NavigateFunction = useNavigate();
    const starComponents: JSX.Element[] = [1, 2, 3, 4, 5].map(value => {
            if (value < props.star) {
                return <FullStar/>
            } else {
                return <VoidStar/>
            }
        }
    );

    const [price, setPrice] = React.useState<Number>(props.price50);
    const noAuth = () => {
        navigate("/login")
    };
    const auth = () => {
        alert("Добавлено в корзину");
    };
    let handler = noAuth;
    if (localStorage.getItem('token') !== '' && localStorage.getItem('token') !== null) {
        handler = auth;
    }

    return (
        <React.Fragment>
            <div className="card">
                {props.name}
                <div className="rating">
                    {starComponents}
                </div>
                <img src={card_img} alt=""/>
                <div className="card__text">
                    {props.text}
                </div>

                <div className="card__form" data-entity="sku-block">
                    <div className="card__radios" data-entity="sku-block">
                        <li className="card__radio" title="по 50гр." data-treevalue="909_6658" data-onevalue="6658">
                            <span onClick={() => setPrice(props.price50)}>по 50гр.</span>
                        </li>
                        <li className="card__radio" title="по 100гр." data-treevalue="909_6659" data-onevalue="6659">
                            <span onClick={() => setPrice(props.price100)}>по 100гр.</span>
                        </li>
                        <li className="card__radio" title="по 250гр." data-treevalue="909_8851" data-onevalue="8851">
                            <span onClick={() => setPrice(props.price250)}>по 250гр.</span>
                        </li>
                    </div>
                    <div className="card__price">
                        {price.toString()}
                        <button className="card_button" onClick={(event) => {
                            handler()
                        }}>В корзину
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}


export default Card;