import React, { FC, useRef } from 'react';
import { history } from '../../utils';

import emailjs from '@emailjs/browser';

import styles from './FeedbackPage.module.scss';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fuiu1zf', 'template_dqcy0ol', form.current, 'ZVZiPDzCv3fMSRdrt')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className={styles.registrationPage}>
            <div className={styles.mainPageView}>
                <div className={styles.formHolder}>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" className="form-control" name="user_name" />
                    <label>Email</label>
                    <input type="email" className="form-control" name="user_email" />
                    <label>Message</label>
                    <textarea className="form-control" name="message" />
                    <input type="submit" className="form-control" value="Send" />
                </form>
            </div>
        </div>
      </div>
    );
  };

export default ContactUs;