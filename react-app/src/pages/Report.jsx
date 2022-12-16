import React from 'react';
import RepSuccess from "./RepSuccess";
import {render} from "react-dom";
async function sendEvent(){
    const email = document.getElementsByClassName("email")[0].value;
    const report = document.getElementsByClassName("report_message")[0].value;
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@']+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if(report.length>0) {
        if (email.match(EMAIL_REGEXP)) {
            const req = await fetch('https://lr/api/account/check_email/'+email)
                .then(response => response.json());
            if (req === 1)
               render(<RepSuccess/>, document.getElementById('report_main'));
            else alert("Нет пользователя с таким почтовым адресом!");
        }
        else alert("Некорректный почтовый адрес!");
    }
    else alert("Введите описание своей жалобы!");
}

const Report = () => {
    return (
        <div>
            <main className="report_main_content" id="report_main">
                <div className="report-form-holder">
                    <form className="report-form">
                        <p>
                            <input className="email" name="email" type="text" size="40" placeholder="Введите e-mail"/>
                        </p>
                        <p>
                            <textarea className="report_message" name="report_message" cols="40" rows="20"
                                      placeholder="Ваша жалоба"></textarea>
                        </p>
                            <button className="report-send-button" type="button" onClick={sendEvent}>
                            <b>Отправить</b>
                            </button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Report;