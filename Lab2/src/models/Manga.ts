interface MangaData{
    id: number,
    img: string,
    name_ru: string,
    name_en: string,
    info: string,
    type: string,
    release_format: string,
    release_year: string,
    status: string,
    author: string,
    artist: string,
    publishing: string
}

export interface UserMangaData{
    user_id: number,
    manga: MangaData 
} 

export default MangaData;