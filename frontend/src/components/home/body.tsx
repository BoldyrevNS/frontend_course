import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/home.css';
import React from 'react';
import { Link } from "react-router-dom";

const Body = () => {return (<main id="main" className="py-4 bg-black text-white">
                <div className="container pb-3 mb-5 py-4 bg-black text-white">
                        <h1 className="card-title my-5 font-poppins">Выбор станции </h1>
                        <div className="row row-cols-lg-2 row-cols-md-3 row-cols-sm-2  font-poppins g-3">
                            <div className="col">
                                <div className="card text-white bg-black mb-3 text-start">
                                    <img src={require("../images/1.png")} alt="hero" className="img-fluid card-img-top"/>
                                    <div className="card-body">
                                        <h3 className="card-title">Lofi-radio</h3>
                                        <Link className="btn btn-primary" to={'/lofi'}>LofiRadio</Link> 
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card text-white bg-black mb-3">
                                    <img src={require("../images/2.png")} alt="hero" className="img-fluid card-img-top"/>
                                    <div className="card-body text-start">
                                        <h3 className="card-title">Phonk-radio</h3>
                                        <a className="btn btn-primary" href="./phonkradio/phonk.html" role="button">Link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </main>)
}
export default Body