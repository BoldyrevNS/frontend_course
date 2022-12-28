import React , {FC} from "react";

// import styles from './Catalog.module.scss';

const Catalog: FC = () => {
    return (
        <div className="content">
            <div className="container">
                <div className="bread-crumbs">
                    <ul className="bread-crumbs__list">
                        <li className="bread-crumbs__item">
                            <a href="./index.html" className="bread-crumbs__link">
                                <span>Главная</span>
                            </a>
                        </li>
                        <li className="bread-crumbs__item">
                            <a href="./catalog.html" className="bread-crumbs__link">
                                <span>Каталог</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <h1 className="title-blue catalog__title">Каталог строительных материалов</h1>

                <div className="catalog">
                    <div className="row-content">
                        {/*<div className="catalog-filter">*/}
                        {/*    <div className="qty-product">*/}
                        {/*        Найдено <b>100500</b> товаров*/}
                        {/*    </div>*/}
                        {/*    <div id="filter" className="filter">*/}
                        {/*        <ul className="list-unstyled filters">*/}
                        {/*            <li>*/}
                        {/*                <div>Производитель</div>*/}
                        {/*                <ul className="list-unstyled">*/}
                        {/*                    <li>*/}
                        {/*                        <input type="checkbox"> Старооскольский кирпичный завод </input>*/}
                        {/*                    </li>*/}
                        {/*                    <li>*/}
                        {/*                        <input type="checkbox"> Железногорский кирпичный завод </input>*/}
                        {/*                    </li>*/}
                        {/*                    <li>*/}
                        {/*                        <input type="checkbox"> Строма </input>*/}
                        {/*                    </li>*/}
                        {/*                    <li>*/}
                        {/*                        <input type="checkbox"> Керма </input>*/}
                        {/*                    </li>*/}
                        {/*                </ul>*/}
                        {/*            </li>*/}
                        {/*            <li>*/}
                        {/*                <div>Вид строительного материала</div>*/}
                        {/*                <ul className="list-unstyled">*/}
                        {/*                    <li>*/}
                        {/*                        <input type="checkbox"> Пустотелый </input>*/}
                        {/*                    </li>*/}
                        {/*                    <li>*/}
                        {/*                        <input type="checkbox"> Полнотелый </input>*/}
                        {/*                    </li>*/}
                        {/*                </ul>*/}
                        {/*            </li>*/}
                        {/*            <li>*/}
                        {/*                <div>Материал</div>*/}
                        {/*                <ul className="list-unstyled">*/}
                        {/*                    <li>*/}
                        {/*                        <input type="checkbox"> Керамический </input>*/}
                        {/*                    </li>*/}
                        {/*                    <li>*/}
                        {/*                        <input type="checkbox"> Гиперпресованный </input>*/}
                        {/*                    </li>*/}
                        {/*                </ul>*/}
                        {/*            </li>*/}
                        {/*            <li>*/}
                        {/*                <div>Назначение</div>*/}
                        {/*                <ul className="list-unstyled">*/}
                        {/*                    <li>*/}
                        {/*                        <input type="checkbox"> Облицовачный </input>*/}
                        {/*                    </li>*/}
                        {/*                    <li>*/}
                        {/*                        <input type="checkbox"> Фундаментный </input>*/}
                        {/*                    </li>*/}
                        {/*                    <li>*/}
                        {/*                        <input type="checkbox"> Облицовачный рядовой ГОСТ </input>*/}
                        {/*                    </li>*/}
                        {/*                </ul>*/}
                        {/*            </li>*/}
                        {/*            <li>Формат размера</li>*/}
                        {/*        </ul>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="catalog-products">
                            <div className="catalog__list-offset">
                                <div className="row">
                                    <div className="product-item">
                                        <a href="#" className="product-item__img-wrap">
                                            <img src="../../../public/products/1.jpg"/>
                                                <div className="product-item__info">
                                                <span>
                                                    Кирпич красный 0,7 Гладкий
                                                </span>
                                                    <span>
                                                    Старооскольский кирпичный завод
                                                </span>
                                                    <span className="product-price">
                                                    19.90₽
                                                </span>
                                                </div>
                                        </a>
                                    </div>
                                    <div className="product-item">
                                        <a href="#" className="product-item__img-wrap">
                                            <img src="../../../public/products/1.jpg"/>
                                                <div className="product-item__info">
                                                <span>
                                                    Кирпич красный 0,7 Гладкий
                                                </span>
                                                    <span>
                                                    Старооскольский кирпичный завод
                                                </span>
                                                    <span className="product-price">
                                                    19.90₽
                                                </span>
                                                </div>
                                        </a>
                                    </div>
                                    <div className="product-item">
                                        <a href="#" className="product-item__img-wrap">
                                            <img src="../../../public/products/1.jpg"/>
                                                <div className="product-item__info">
                                                <span>
                                                    Кирпич красный 0,7 Гладкий
                                                </span>
                                                    <span>
                                                    Старооскольский кирпичный завод
                                                </span>
                                                    <span className="product-price">
                                                    19.90₽
                                                </span>
                                                </div>
                                        </a>
                                    </div>
                                    <div className="product-item">
                                        <a href="#" className="product-item__img-wrap">
                                            <img src="../../../public/products/1.jpg"/>
                                                <div className="product-item__info">
                                                <span>
                                                    Кирпич красный 0,7 Гладкий
                                                </span>
                                                    <span>
                                                    Старооскольский кирпичный завод
                                                </span>
                                                    <span className="product-price">
                                                    19.90₽
                                                </span>
                                                </div>
                                        </a>
                                    </div>
                                    <div className="product-item">
                                        <a href="#" className="product-item__img-wrap">
                                            <img src="../../../public/products/1.jpg"/>
                                                <div className="product-item__info">
                                                <span>
                                                    Кирпич красный 0,7 Гладкий
                                                </span>
                                                    <span>
                                                    Старооскольский кирпичный завод
                                                </span>
                                                    <span className="product-price">
                                                    19.90₽
                                                </span>
                                                </div>
                                        </a>
                                    </div>
                                    <div className="product-item">
                                        <a href="#" className="product-item__img-wrap">
                                            <img src="../../../public/products/1.jpg"/>
                                                <div className="product-item__info">
                                                <span>
                                                    Кирпич красный 0,7 Гладкий
                                                </span>
                                                    <span>
                                                    Старооскольский кирпичный завод
                                                </span>
                                                    <span className="product-price">
                                                    19.90₽
                                                </span>
                                                </div>
                                        </a>
                                    </div>
                                    <div className="product-item">
                                        <a href="#" className="product-item__img-wrap">
                                            <img src="../../../public/products/1.jpg"/>
                                                <div className="product-item__info">
                                                <span>
                                                    Кирпич красный 0,7 Гладкий
                                                </span>
                                                    <span>
                                                    Старооскольский кирпичный завод
                                                </span>
                                                    <span className="product-price">
                                                    19.90₽
                                                </span>
                                                </div>
                                        </a>
                                    </div>
                                    <div className="product-item">
                                        <a href="#" className="product-item__img-wrap">
                                            <img src="../../../public/products/1.jpg"/>
                                                <div className="product-item__info">
                                                <span>
                                                    Кирпич красный 0,7 Гладкий
                                                </span>
                                                    <span>
                                                    Старооскольский кирпичный завод
                                                </span>
                                                    <span className="product-price">
                                                    19.90₽
                                                </span>
                                                </div>
                                        </a>
                                    </div>
                                    <div className="product-item">
                                        <a href="#" className="product-item__img-wrap">
                                            <img src="../../../public/products/1.jpg"/>
                                                <div className="product-item__info">
                                                <span>
                                                    Кирпич красный 0,7 Гладкий
                                                </span>
                                                    <span>
                                                    Старооскольский кирпичный завод
                                                </span>
                                                    <span className="product-price">
                                                    19.90₽
                                                </span>
                                                </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catalog;