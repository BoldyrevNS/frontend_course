import React, {FC} from 'react';
import { history } from '../../utils';

import styles from './Footer.module.scss';

interface IProps {
    text: string;
}

const Footer: FC<IProps> = ({ text }) => {
    const openFeedback = () => {
        history.push("/feedback");
    }
    return(
        <div className={styles.footer}>
            +7-915-568-46-21
            <button className={styles.navItem} onClick={openFeedback}>Обратная связь</button>
        </div>

        
    );
};

export default Footer;