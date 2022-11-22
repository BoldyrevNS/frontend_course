import '../css/catalog.css';
import { Card } from './card';

export function Catalog() {
    return <>
        <main>

            <div className="catalog">

                <div className="title">
                    Каталог
                </div>

                <div className="content row">

                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>

                </div>

            </div>

        </main>
    </>;
}