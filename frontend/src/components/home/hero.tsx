import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/home.css';
import 'bootstrap/js/dist/carousel'
import React from 'react';

const Hero = () => {
    return (<section className="hero bg-black text-white">
                <div id="slider1" className="carousel slide overflow-hidden carousel-light h-100 carousel-fade"
                    data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button className="active" data-bs-target="#slider1" data-bs-slide-to="0"></button>
                        <button data-bs-target="#slider1" data-bs-slide-to="1"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="img-fluid w-100 d-block object-cover"
                                src={require("../images/4.png")}
                                alt="slider image">
                            </img>
                        </div>
                        <div className="carousel-item">
                            <img className="img-fluid w-100 d-block"
                                src={require("../images/3.png")}
                                alt="slider image">
                            </img>
                        </div>
                    </div>
                    <button className="carousel-control-prev" data-bs-target="#slider1" data-bs-slide="prev"><i
                            className="carousel-control-prev-icon carousel-dark"></i></button>
                    <button className="carousel-control-next" data-bs-target="#slider1" data-bs-slide="next"><i
                            className="carousel-control-next-icon carousel-dark"></i></button>
                </div>
            </section>)
}
export default Hero