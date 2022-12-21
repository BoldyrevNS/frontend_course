import React from 'react';
import RepSuccess from "./RepSuccess";
import {render} from "react-dom";
import Axios from "axios";
async function sendEvent(email, report){
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@']+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if(report.length>0) {
        if (email.match(EMAIL_REGEXP)) {
            const req = await fetch('https://lr/api/account/check_email/'+email)
                .then(response => response.json());
            if (req === 1) {
                await Axios.post('https://lr/api/report/save_report', {
                        email: email,
                        report_message: report
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                render(<RepSuccess/>, document.getElementById('report_main'));
            }
            else alert("Нет пользователя с таким почтовым адресом!");
        }
        else alert("Некорректный почтовый адрес!");
    }
    else alert("Введите описание своей жалобы!");
}

const Report = () => {
    const [email, setEmail] = React.useState("");
    const [report_message, setMessage] = React.useState("");
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }
    return (
        <div>
            <main className="report_main_content" id="report_main">
                <div className="report-form-holder">
                    <form className="report-form">
                        <p>
                            <input className="email" name="email" type="text" size={40} placeholder="Введите e-mail" value={email} onChange={handleEmailChange}/>
                        </p>
                        <p>
                            <textarea className="report_message" name="report_message" cols={40} rows={20} placeholder="Ваша жалоба" value={report_message} onChange={handleMessageChange}/>
                        </p>
                        <button className="report-send-button" type="button" onClick={()=>sendEvent(email,report_message)}>
                            <b>Отправить</b>
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Report;