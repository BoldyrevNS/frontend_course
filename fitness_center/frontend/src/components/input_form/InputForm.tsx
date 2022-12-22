import React from "react";
import './inputForm.css'

export function InputForm() {

    return (
        <div>
            <form id="form_input">
                <label htmlFor="name">Имя <span>*</span></label>
                <input type="text" placeholder="Введите имя" name="name" id="name"></input><br></br>
                <label htmlFor="email">Ваша почта <span>*</span></label>
                <input type="email" placeholder="Введите email" name="email" id="email"></input><br></br>
                <label htmlFor="message">Сообщение <span>*</span></label>
                <textarea placeholder="Введите сообщение" name="message" id="message"></textarea>
                <div id="mess_send" className="btn">Отправить</div>
            </form>
        </div>
    )
}