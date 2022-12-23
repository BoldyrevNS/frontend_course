import { PageSidebar } from "../components/pageSidebar";
import { PageContent } from "../components/pageContent";
import { useParams } from "react-router-dom";
import React from "react";
import { getMangaId } from "../api/MangaApi";
import MangaData from "../models/Manga";

export function PageManga() {
    const {mangaId} = useParams()
    const [manga, setManga] = React.useState<MangaData>({
        id: 0,
        img: '',
        name_ru: '',
        name_en: '',
        info: '',
        type: '',
        release_format: '',
        release_year: '',
        status: '',
        author: '',
        artist: '',
        publishing: ''    
    })
    React.useEffect( () =>{
        getMangaId(setManga, mangaId)
    }, [mangaId])
    return <>
        <main>
            <div className="page">
                <PageSidebar {...manga}/>
                <PageContent {...manga}/>
            </div>
        </main>
    </>
}