import React from 'react';
import "../css/result_default.css";
import '../css/imagePlace.css';

export function ImagePlace(props: any) {
    return (
        <React.Fragment>
            <div className="image-result result-default">
                {props.image !== null && <img className="img-result" src={props.image} alt="ImageResult"/>}
                {props.image == null && <div className="img-replacement"> Здесь будет изображение</div>}
            </div>
        </React.Fragment>
    );
}


export default ImagePlace;