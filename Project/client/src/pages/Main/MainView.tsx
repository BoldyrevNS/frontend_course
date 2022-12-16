
import image1 from '../../content/mainPage/46b2132c01604c9493d558de444929f4.svg'
import image2 from '../../content/mainPage/575a0322f3b36ca2fecb23ad2c6dd5ad.svg'
import image3 from '../../content/mainPage/921b1ae33edca174b6ebe787bb8b6c3b.svg'
import {FC} from "react";

const MainView:FC = () => {

    return <div >
        <section className={'main-section1 '}>
            <div className={'main-section1-content'}>
                <h1 className={'main-section1-top-text'}>
                    ПРЕДСТАВЬТЕ СЕБЕ...
                </h1>
                <div className={'main-sec'} >
                    …место, где будет комфортно себя чувствовать любая компания: школьный кружок, игровая группа или
                    международное сообщество художников. Место, где можно вдоволь поболтать с друзьями. Ежедневное
                    общение ещё никогда не было настолько простым.
                </div>
                <div className={'main-section1-buttons'}>
                    <button className={'main-section1-button main-section1-button1 flex flex-row items-center' } >
                        <svg width="24" height="24" viewBox="0 0 24 24"
                             className="icon-2tQ9Jt ">
                            <g fill="currentColor">
                                <path
                                    d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"/>
                                <path
                                    d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"/>
                            </g>
                        </svg>
                        Загрузить для Windows
                    </button>
                    <button className={"main-section1-button main-section1-button2"}>
                        Открыть Discord в браузере
                    </button>
                </div>
            </div>
        </section>
        <section className="main-section2">
            <img className="main-section-img" src={image1} alt="img"/>
            <div className="div-headline">
                <h1 className="main-headline">
                    Сделайте вход только по приглашениям, чтобы чувствовать себя комфортно
                </h1>
                <span className="main-under-headline">
            Серверы Discord делятся на тематические каналы, где можно работать вместе, делиться новостями и просто обсуждать свой день, не переполняя групповой чат.
        </span>
            </div>
        </section>
        <section className="main-section3">
            <div className="div-headline">
                <h1 className="main-headline">
                    Место, где легко общаться
                </h1>
                <span className="main-under-headline">
Начните беседу на канале, когда будете свободны. Друзья с сервера увидят, что вы в сети, и смогут присоединиться к вам. Никаких неудобных звонков!        </span>
            </div>
            <img className="main-section-img" src={image2} alt="img"/>
        </section>
        <section className="main-section2">
            <img className="main-section-img" src={image3} alt="img"/>
            <div className="div-headline">
                <h1 className="main-headline">
                    От группы до сообщества </h1>
                <span className="main-under-headline">
Организуйте жизнь любого сообщества с помощью инструментов модерации и настраиваемых прав доступа для участников. Наделяйте участников особыми преимуществами, создавайте приватные каналы и не только.        </span>
            </div>
        </section>
    </div>
}

export default MainView