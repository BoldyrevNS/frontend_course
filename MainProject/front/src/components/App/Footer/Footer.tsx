import {Link} from 'react-router-dom'
import { useState } from 'react';
import './Footer.css';
import axios from 'axios';

type Props = {
    nickName: string|null
  }

function removeUser(){
    axios.post("http://localhost/api/user/logout/" + localStorage.getItem("token")).then(response => {
        localStorage.removeItem("name");
        localStorage.removeItem("token");
        window.location.reload();
    }).catch(
        error => alert("Говно говна")
    )
    
}

const Footer:React.FC<Props> = ({nickName}) =>  {

    return (
        <div className="Menu">
            <div>
                <p className="User">Хорошей игры {nickName}.</p>
                <img className="Usericon" src="https://w7.pngwing.com/pngs/944/770/png-transparent-computer-icons-login-google-account-internet-user.png"/>
            </div>
            {localStorage.getItem('token') !== null ?
                <div className='buttonPlace'>
                    <button onClick={removeUser} className="Menubutton">Выйти</button>
                </div>
                :<div className='buttonPlace'>
                    <Link to = "/login"><button className="Menubutton">Войти</button></Link>
                    <Link to = "/autorisation"><button className="Menubutton">Зарегистрироваться</button></Link>
                </div>

            }
            
            <p>Помните вы сами решаете свою судьбу, но удача порой может...Впрочем на вас удача отдохнула</p>
        </div>
    )
    
}
export default Footer;

//<p className="User">Хорошей игры {userName} .</p>