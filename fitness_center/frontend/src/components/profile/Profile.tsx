import {NavigateFunction, useLocation, useNavigate} from "react-router-dom";
import React from "react";
import {checkToken} from "../../api/TokenApi";
import {LoginData} from "../../data/LoginData";


function Profile() {
    const [login, setLogin] = React.useState<string>('');
    const navigate: NavigateFunction = useNavigate();

    //let item = localStorage.getItem('login');
    //if (item !== null) {
    //    setLogin(item)
    //}

    function HandleMouseEvent(){
        navigate('/login');
        localStorage.setItem('token', '');
        localStorage.setItem('refresh_token', '');
        //localStorage.setItem('login', '')
    }

    React.useEffect(() => {
            const get_token = async () => {
                const result: LoginData | null | true = await checkToken();
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
        // eslint-disable-next-line
        []
    );

    return (
        <React.Fragment>
            <main className="container">
                <section className="profile-list">
                    <div className="profile-title mb-3">
                        Это ваш профиль
                    </div>
                    <div className="profile-title mb-3">
                        Имя пользователя
                        {login}
                    </div>
                    <button type="submit" onClick = {() =>HandleMouseEvent()} className="btn button-default btn-unlogin">Выйти</button>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Profile;