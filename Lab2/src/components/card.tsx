import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../css/card.css';

export function Card() {
    return <>
        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6">
            <Link to="/pageManga">
                <div className="card">
                    <img src="https://mangalib.me/uploads/cover/sweet-home-kim-carnby-/cover/zL2inmMagDPC_250x350.jpg" className="poster" alt="..." />
                    <div className="card-img-overlay">
                        <div className="card_text_back">
                            <p className="card-text"><small>Милый дом</small></p>
                            <h6 className="card-title">Манхва</h6>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    </>
}