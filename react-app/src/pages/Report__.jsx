
import React from 'react';
import RepSuccess from "./RepSuccess";
import Axios from "axios";


const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@']+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;


async function sendEvent (email, reportMessage, setResult){
    if(reportMessage.length) {
        if (email.match(EMAIL_REGEXP)) {
            console.log("sending...");
            let emailIsInDB;
            await Axios.get('https://lr/api/account/check_email/'+email)
                .then(function (response){
                    console.log("response.data = " + response.data);
                    if(response.data === 1) {
                        emailIsInDB = 1;
                        setResult(true);
                    }
                    else alert("Нет пользователя с таким почтовым адресом!");
                });
            console.log("emailIsInDB = " + emailIsInDB);
            if(emailIsInDB===1) {
                await Axios.post('https://lr/api/report/save_report', {
                        email: email,
                        report_message: reportMessage
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });


            }
        }
        else alert("Некорректный почтовый адрес!");
    }
    else alert("Введите описание своей жалобы!");
}

const Report = () => {
    const [sent, setSent] = React.useState(false);
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
                {sent && <RepSuccess/>}
                <div className="report-form-holder">
                    <form className="report-form">
                        <p>
                            <input className="email" name="email" type="text" size={40} placeholder="Введите e-mail" value={email} onChange={handleEmailChange}/>
                        </p>
                        <p>
                            <textarea className="report_message" name="report_message" cols={40} rows={20} placeholder="Ваша жалоба" value={report_message} onChange={handleMessageChange}/>
                        </p>
                        <button className="report-send-button" type="button" onClick={sendEvent(email, report_message, setSent)}>
                            <b>Отправить</b>
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Report;
