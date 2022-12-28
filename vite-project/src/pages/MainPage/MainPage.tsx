import React, {FC} from 'react';
import { history } from '../../utils';

import styles from './MainPage.module.scss';

const MainPage: FC = () => {
    const openCatalog = () => {
        history.push("/catalog");
    }
    const openMain = () => {
        history.push("/");
    }
    return(
        <div className={styles.mainPage}>
            <div className={styles.mainPageView}>
                <div className={styles.title}>
                    <h1>Добро пожаловать в<br/> магазин Маная</h1>
                    <h2>Лучшая одежда</h2>
                    <button onClick={openCatalog}>Каталог</button>
                </div>
                <img src="../../../public/tolstovka.png" alt="tolstovka"  height="500px"/>
            </div>

            <div className={styles.cards}>
                <div className={styles.container}>
                    <div className={styles.cardsHolder}>

                        <div className={styles.card}>
                            <div className={styles.cardImage}>
                                <img className={styles.cardImg} src="../../../public/money-bag.png" alt="money-bag" />
                            </div>

                            <div className={styles.cardTitle}>
                                Дёшево
                            </div>

                            <div className={styles.cardText}>
                                Класно мы сделали всё по низкой стоимости
                            </div>
                        </div>
                        
                        <div className={styles.card}>
                            <div className={styles.cardImage}>
                                <img className={styles.cardImg} src="../../../public/fast-delivery.png" alt="fast-delivery"/>
                            </div>

                            <div className={styles.cardTitle}>
                                Быстро
                            </div>

                            <div className={styles.cardText}>
                                Мы доставляем за 12 секунд
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.cardImage}>
                                <img className={styles.cardImg} src="../../../public/cool.png" alt="cool"/>
                            </div>

                            <div className={styles.cardTitle}>
                                Модно
                            </div>

                            <div className={styles.cardText}>
                                 молодёжной теме мы сечём ёу
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
        
    );
};

export default MainPage;