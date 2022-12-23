import MangaData from "../models/Manga";

export function PageContent(props:MangaData) {
    return <>
        <div className="page_content">
            <h4 className="page_text">{props.name_ru}</h4>
            <p className="page_text">{props.name_en}</p>
            <div className="page_info">
                <p className="page_text">Информация</p>
                <p className="page_text">{props.info}</p>
            </div>
        </div>
    </>
}