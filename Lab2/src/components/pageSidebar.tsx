import React from "react";
import { checkUserMangaId, postManga } from "../api/MangaApi";
import MangaData from "../models/Manga";
import authContext from "./AuthContext";

export function PageSidebar(props:MangaData) {
    const auth_context = React.useContext(authContext);
    const [isManga, setManga] = React.useState<Boolean>()

    const onSubmit = ()=>{
        postManga(props, auth_context);
        setManga(true)
    }
    React.useEffect(()=>{
        checkUserMangaId(setManga, props.id)
    },[props])
    return <>

        <div className="page_sidebar">
            <img src={props.img} className="page_poster" alt="..."/>

            {auth_context?.isAuth && !isManga && <div className="ma">
                <button onClick={onSubmit} type="submit" className="btn-green">Добавить</button>
            </div>}

                <div className="page_description">
                    <p className="page_description_text">Тип</p>
                    <p className="page_description_text_inf">{props.type}</p>

                    <p className="page_description_text">Формат выпуска</p>
                    <p className="page_description_text_inf">{props.release_format}</p>

                    <p className="page_description_text">Год релиза</p>
                    <p className="page_description_text_inf">{props.release_year}</p>

                    <p className="page_description_text">Статус тайтла</p>
                    <p className="page_description_text_inf">{props.status}</p>

                    <p className="page_description_text">Автор</p>
                    <p className="page_description_text_inf">{props.author}</p>

                    <p className="page_description_text">Художник</p>
                    <p className="page_description_text_inf">{props.artist}</p>

                    <p className="page_description_text">Издательство</p>
                    <p className="page_description_text_inf">{props.publishing}</p>
                </div>
        </div>
    </>
}