import {NavigateFunction, useLocation, useNavigate} from "react-router-dom";
import React from "react";
import {LoginData} from "../../data/LoginData";
import './profile.css'
import AuthApi from "../../api/AuthApi";


function Profile() {
    const [login, setLogin] = React.useState<string>('');
    const navigate: NavigateFunction = useNavigate();

    function HandleMouseEvent(){
        navigate('/login');
        localStorage.setItem('token', '');
        localStorage.setItem('refresh_token', '');
    }

    React.useEffect(() => {
            const get_token = async () => {
                const result: LoginData | null | true = await AuthApi.checkToken();
                console.log(result);
                if (result === true) {
                    get_token();
                } else if (result === null) {
                    navigate('/login');
                } else if (result !== undefined) {
                    setLogin(result.login)
                }
            }
            get_token()
        },
        []
    );

    return (
        <React.Fragment>
            <main className="profile">
                <div className="title">
                    Профиль
                </div>
                <div className="name">
                    Имя пользователя:
                    {login}
                </div>
                <div
                    className="button-exit pointer-events-auto ml-8 rounded-md bg-black py-2 px-3 text-[0.9rem] font-semibold leading-5 text-white hover:bg-gray-900">
                    <button type="submit" onClick = {() =>HandleMouseEvent()} className="btn button-default btn-unlogin">Выйти</button>
                </div>
            </main>
        </React.Fragment>
    );
}

export default Profile;