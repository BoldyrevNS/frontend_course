import React , {FC} from "react";

import {history} from "../../utils";

import Logo from "./assets/mini-cart.svg";

import './Header.css';

interface IProps {
    text: string;
}

const Header: FC<IProps> = ({ text } ) => {
    const openMainPage = () => {
        history.push('/');
    }
    const openAuthPage = () => {
        history.push('/auth');
    }
    const openCatalogPage = () => {
        history.push('/catalog');
    }
    return (
        <header>
            <div className="subheader">
                <div className="container">
                    <div className="row subheader-align-center">
                        <button onClick={openMainPage} className="subheader__logo-img">
                            <img src='../../../public/logo.svg' width='100px' alt="logo"/>
                        </button>

                        <div className="row subheader__contacts subheader-align-center">
                            <div className="address subheader_address address_black">
                                <a className="address-link">г. Белгород, кл. Костюкова, д.44</a>
                            </div>
                            <div className="phone subheader_phone phone_black">
                                <span className="phone_feedback">
                                    Заказать звонок
                                </span>
                                <a className="phone__link">
                                    8(951)088-21-82
                                </a>
                                <a className="phone__link">
                                    8(905)158-15-53
                                </a>
                            </div>
                        </div>
                        <div className="subheader__cart">
                            <div className="row favorite">
                                <img src="../../../public/login.svg" alt="" className="login_black"/>
                                <button onClick={openAuthPage} className="favorite">
                                    <span className="favorite__text">
                                        Обратная связь
                                    </span>
                                </button>
                                {/*<Link to={'/auth'} className="favorite">*/}
                                {/*    <span className="favorite__text">*/}
                                {/*        Авторизация*/}
                                {/*    </span>*/}
                                {/*</Link>*/}
                            </div>
                            <a href="#" className="mini-cart">
                                <div className="mini-cart__qty">
                                    <span className="mini-cart__qty-text">
                                        <span className="mini-cart-count">
                                            0
                                        </span>
                                        <span>
                                            товаров
                                        </span>
                                    </span>
                                    <span>
                                        в корзине
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container header-catalog">
                <div className="row">
                    <div className="header__catalog catalog-hide">
                        <button onClick={openCatalogPage} className="header__catalog-title">
                            <span>Каталог продукции</span>
                        </button>
                        {/*<Link to={'/catalog'} className="header__catalog-title">*/}
                        {/*    <span>Каталог продукции</span>*/}
                        {/*</Link>*/}
                    </div>

                    <div className="dropdown header__share">
                        <a href="#" className="header__building header__building-link">
                            Строительство домов
                        </a>
                        <div className="dropdown-content">
                            <a href="#" className="header__building__link" title="Возведение фундамента">Возведение
                                фундамента</a>
                            <a href="#" className="header__building__link" title="Цоколь">Цоколь</a>
                            <a href="#" className="header__building__link" title="Коробка здания">Коробка здания</a>
                            <a href="#" className="header__building__link" title="Продажа готовых домов">Продажа готовых
                                домов</a>
                        </div>
                    </div>
                    <div className="header__category-prod">
                        <div className="row jc-between">
                            <a href="#" className="header__category-item brick_icon">Кирпичи</a>
                            <a href="#" className="header__category-item bloc_icon">Блоки</a>
                            <a href="#" className="header__category-item brick_icon">Плитка</a>
                            <a href="#" className="header__category-item stone_icon">Камень</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
);
}

export default Header;