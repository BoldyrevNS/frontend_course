import React , {FC} from "react";

import './Footer.css'

interface IProps {
    text: string;
}

const Footer: FC<IProps> = ({ text } ) => {
    return (
        <footer>
            <div className="container-fluid footer">
                <div className="container footer-style">
                    <div className="row">
                        <div className="footer-logo margin_auto">
                            <a href="#" className="footer__logo-link">
                                <img src="../../../public/logo.svg" className="subheader-align-center" alt="logo"/>
                            </a>
                        </div>
                        <div className="footer__about-company margin_auto">
                            <p className="footer-title">
                                О компании
                            </p>
                            <ul className="footer-list">
                                <li className="footer-item">
                                    <a href="#" className="footer__link">О компании</a>
                                </li>
                            </ul>
                            <ul className="footer-list">
                                <li className="footer-item">
                                    <a href="#" className="footer__link">Оплата и доставка</a>
                                </li>
                            </ul>
                            <ul className="footer-list">
                                <li className="footer-item">
                                    <a href="#" className="footer__link">Контакты</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__catalog margin_auto">
                            <p className="footer-title">
                                Каталог продукции
                            </p>
                            <div className="row">
                                <div className="footer__catalog-list">
                                    <ul className="footer-list">
                                        <li className="footer__item">
                                            <a href="#" className="footer__link">
                                                Кирпичи
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a href="#" className="footer__link">
                                                Блоки
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a href="#" className="footer__link">
                                                Природный камень
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a href="#" className="footer__link">
                                                Тротуарная плитка
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;