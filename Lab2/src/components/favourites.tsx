import '../css/catalog.css';
import { Card } from './card';
import React from 'react';
import { getMangas, getUserMangas, postManga } from '../api/MangaApi';
import MangaData from '../models/Manga';

export function Favourites() {
    const [manga, setManga] = React.useState<[MangaData]>()

    React.useEffect(()=>{
        getUserMangas(setManga)
    },[])
    return <>
        <main>

            <div className="catalog">

                <div className="title">
                    Избранное
                </div>

                <div className="content row">

                    {manga?.map(data => <Card{...data} key={data.id} />) }

                </div>

            </div>

        </main>
    </>;
}