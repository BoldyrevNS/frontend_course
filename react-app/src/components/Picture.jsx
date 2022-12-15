import React from 'react';

const Picture = () => {
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div className="gallery-illust-container">
                <a href="#" className="in-text-link">
                    <img className="gallery-illust-img" src="https://lr/static/img/1.png"/>
                        <figcaption>
                            Название рисунка
                            <p>Автор</p>
                        </figcaption>
                </a>
            </div>
        </div>
    );
};

export default Picture;