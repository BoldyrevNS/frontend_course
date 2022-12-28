import React , {FC} from "react";

// import styles from './MainPage.module.scss';

const MainPage: FC = () => {
    return (
        <div className="content">
            <div className="container pt-50">
                <div className="row">
                    <div className="home-categories__item">
                        <a href="#" className="home-categories__info p_rel">
                            <span className="sky"></span>
                            <span className="home-categories__img-wrap">
                                <img src="../../../public/categories/1.png" alt="Кирпичи" className="home-categories__img"/>
                            </span>
                            <span className="home-categories__name">
                                Кирпичи
                            </span>
                        </a>
                    </div>
                    <div className="home-categories__item">
                        <a href="#" className="home-categories__info p_rel">
                            <span className="sky"></span>
                            <span className="home-categories__img-wrap">
                                <img src="../../../public/categories/2.png" alt="Кирпичи" className="home-categories__img"/>
                            </span>
                            <span className="home-categories__name">
                                Блоки
                            </span>
                        </a>
                    </div>
                    <div className="home-categories__item">
                        <a href="#" className="home-categories__info p_rel">
                            <span className="sky"></span>
                            <span className="home-categories__img-wrap">
                                <img src="../../../public/categories/0.png" alt="Кирпичи" className="home-categories__img"/>
                            </span>
                            <span className="home-categories__name">
                                Тротуарная плитка
                            </span>
                        </a>
                    </div>
                    <div className="home-categories__item">
                        <a href="#" className="home-categories__info p_rel">
                            <span className="sky"></span>
                            <span className="home-categories__img-wrap">
                                <img src="../../../public/categories/3.png" alt="Кирпичи" className="home-categories__img"/>
                            </span>
                            <span className="home-categories__name">
                                Природный камень
                            </span>
                        </a>
                    </div>
                    <div className="home-categories__item">
                        <a href="#" className="home-categories__info p_rel">
                            <span className="sky"></span>
                            <span className="home-categories__img-wrap">
                                <img src="../../../public/categories/1.png" alt="Кирпичи" className="home-categories__img"/>
                            </span>
                            <span className="home-categories__name">
                                Кирпичи
                            </span>
                        </a>
                    </div>
                    <div className="home-categories__item">
                        <a href="#" className="home-categories__info p_rel">
                            <span className="sky"></span>
                            <span className="home-categories__img-wrap">
                                <img src="../../../public/categories/2.png" alt="Кирпичи" className="home-categories__img"/>
                            </span>
                            <span className="home-categories__name">
                                Блоки
                            </span>
                        </a>
                    </div>
                    <div className="home-categories__item">
                        <a href="#" className="home-categories__info p_rel">
                            <span className="sky"></span>
                            <span className="home-categories__img-wrap">
                                <img src="../../../public/categories/0.png" alt="Кирпичи" className="home-categories__img"/>
                            </span>
                            <span className="home-categories__name">
                                Тротуарная плитка
                            </span>
                        </a>
                    </div>
                    <div className="home-categories__item">
                        <a href="#" className="home-categories__info p_rel">
                            <span className="sky"></span>
                            <span className="home-categories__img-wrap">
                                <img src="../../../public/categories/3.png" alt="Кирпичи" className="home-categories__img"/>
                            </span>
                            <span className="home-categories__name">
                                Природный камень
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;