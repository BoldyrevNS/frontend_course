import {NavigateFunction, useLocation, useNavigate} from "react-router-dom";
import React from "react";
import "./infoPage.css"
import {checkToken} from "../../api/TokenApi";


export function InfoPage() {
    const location = useLocation();
    const navigate: NavigateFunction = useNavigate();
    const [isPressed, setPressed] = React.useState<boolean>(false);

    const [isNeedToCheckToken, setNeedToCheckToken] = React.useState<boolean>(false);

    React.useEffect(() => {
            if (!isNeedToCheckToken) {
                return;
            }

            const get_token: any | null | true = async () => {
                const result = await checkToken();
                console.log(result);
                if (result === true) {
                    get_token();
                } else if (result === null) {
                    navigate('/login');
                } else if (result !== undefined) {
                    alert("Вы записались на занятие.");
                }

            }
            get_token()
        },
        // eslint-disable-next-line
        [isNeedToCheckToken]
    );

    function handleSubmit(event: any) {
        event.preventDefault()
        setPressed(true)

        if (localStorage.getItem('token') === '' || localStorage.getItem('token') === null) {
            navigate('/login')
        } else {
            setNeedToCheckToken(true)
        }
    }

    return (
        <div className="info-page">
            <div className='title'>
                {location.state.title}
            </div>
            <div className="description">
                <div className="text">
                    {location.state.info}
                    <div
                        className="button-add pointer-events-auto ml-8 rounded-md bg-black py-2 px-3 text-[0.9rem] font-semibold leading-5 text-white hover:bg-gray-900">
                        {!isPressed && <button type="button" onClick={(event) => handleSubmit(event)} className="button">Записаться</button>}
                        {isPressed && <button type="button" className="button">Вы записаны</button>}
                    </div>
                </div>
                <img className="image" src={require(`../../images/${location.state.info_image}`)} alt='Пример'/>
            </div>
        </div>
    )
}