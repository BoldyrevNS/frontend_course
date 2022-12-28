import React, { FC, useState } from 'react';
import { history } from '../../utils';

import styles from './RegistrationPage.module.scss';

const MainPage: FC = () => {
    const openMain = () => {
        history.push("/");
    }

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (/^\S+@\S+.\S+$/.test(email)) { openMain() } else {setError("Неверный формат почты")}
    }


    return (
        <div className={styles.registrationPage}>
            <div className={styles.mainPageView}>
                <div className={styles.formHolder}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formMain}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className={styles.formLabel}>Почта</label>
                                <input value={email} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className={styles.formTextInfo}>{error}</div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className={styles.formLabel}>Пароль</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>

                            <input type="checkbox" className={styles.formCheckInput} id="exampleCheck1" />
                            <label className={styles.formCheckLabel} htmlFor="exampleCheck1">Оставаться в системе</label>
                        </div>
                        <button type="submit" className={styles.btnPrimary}>Зарегистрироваться</button>
                        <button type="submit" className={styles.btnPrimary}>Войти</button>


                    </form>
                </div>
            </div>
        </div>





    );
};

export default MainPage;