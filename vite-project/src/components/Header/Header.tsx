import React, { FC } from 'react';
import { history } from '../../utils';

import styles from './Header.module.scss';

interface IProps {
    text: string;
}

const Header: FC<IProps> = ({ text }) => {
    const openCatalog = () => {
        history.push("/catalog");
    }
    const openMain = () => {
        history.push("/");
    }
    const openRegistration = () => {
        history.push("/registration");
    }
    return (
        <div className={styles.header}>
            <button onClick={openMain}>
                <img  src={'../../../public/logo.png'} height="50px" />
            </button>

            <div className={styles.navigation}>
                <button className={styles.navItem} onClick={openMain}>ГЛАВНАЯ</button>
                <button className={styles.navItem} onClick={openCatalog}>КАТАЛОГ</button>
                <button className={styles.navItem} onClick={openCatalog}>О НАС</button>
            </div>

            <button className={styles.register} onClick={openRegistration}>РЕГИСТРАЦИЯ / ВОЙТИ</button>
        </div>
    );
};

export default Header;