import React, {useEffect, useState} from "react";
import "../../css/style.css";
import "../../css/catalog.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Card";
import Product from "../../model/Product"

interface Products {
    data: Product[]
}

function CatalogProduct(props: Products) {
    let cardComponents: JSX.Element[] = props.data.map(value =>
        <Card
            id={value.id}
            image={value.image}
            name={value.name}
            text={value.text}
            star={value.star}
            price50={value.price50}
            price100={value.price100}
            price250={value.price250}
        />);

    return (
        <React.Fragment>
            <div className="home">
                <div className="container" data-entity="parent-container">
                    <div className="cards">
                        {cardComponents}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}


export default CatalogProduct;