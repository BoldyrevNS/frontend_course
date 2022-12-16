import React from "react";
import Header from "../components/Main/Header";
import HeaderLine from "../components/Main/HeaderLine";
import Footer from "../components/Main/Footer";
import DownFooter from "../components/Main/DownFooter";
import CatalogList from "../components/Catalog/CatalogList";
import {NavigateFunction, useNavigate} from "react-router-dom";
import Product from "../model/Product";
import {GetProducts} from "../api/CatalogApi";

function Catalog() {
    const navigate: NavigateFunction = useNavigate();
    const [cards, setCards] = React.useState<Product[]>([]);
    React.useEffect(() => {
            const get_product = async () => {
                const product = await GetProducts();
                if (product === true) {
                    get_product()
                } else if (product === null) {
                    navigate('/login');
                } else {
                    setCards(product);
                }
            }
            get_product()
        },
        []
    );

    return (
        <div>
            <Header/>
            <HeaderLine/>
            <CatalogList data={cards}/>
            <Footer/>
            <DownFooter/>
        </div>
    );
}

export default Catalog;