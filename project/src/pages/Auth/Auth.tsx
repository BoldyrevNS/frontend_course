// import React , {FC} from "react";
import React, { useRef , FC} from 'react';
import emailjs from '@emailjs/browser';

// import styles from './Catalog.module.scss';


export const Auth: FC = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_aygs13c', 'template_lpeo8fo', form.current, 'Y3N_sM-JFajSxXcB3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="content">
            <div className='auth-container'>
            <form ref={form} onSubmit={sendEmail}>
                <div className="auth-item">
                    <label>Email</label>
                    <div className="loginField"><input type="email" name="user_email" /></div>
                </div>
                <div className="auth-item">
                    <label>Message</label>
                    <div className="loginField"><textarea name="message" /></div>
                </div>
                <input type="submit" value="Send" />
                {/*<label>Email</label>*/}
                {/*<input type="email" name="user_email" />*/}
                {/*<label>Message</label>*/}
                {/*<textarea name="message" />*/}
                {/*<input type="submit" value="Send" />*/}
            </form>
            </div>
        </div>
    );
};

// const Auth: FC = () => {
//     return (
//
//         <div className="content">
//             <div>
//
//             </div>
//             <div className="auth-container">
//                 <form className="auth">
//                     <div className="auth-item">
//                         <label>Логин</label>
//                         <div className="loginField"><input type="text" className="auth-input" id="InputLogin"></input></div>
//                     </div>
//                     <div className="auth-item">
//                         <label>Пароль</label>
//                         <div className="passwordField"><input className="auth-input" id="InputPassword" type="text"></input></div>
//                     </div>
//                     <button className="auth-button" type="submit">Войти</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

export default Auth;