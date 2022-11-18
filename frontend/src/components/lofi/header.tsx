import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/lofi.css';
import 'bootstrap/js/dist/carousel'
import React from 'react';

const Header = () => {
    return (<nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">
                  <p>LofiRadio</p>
                </a>
              </div>
            </div>
          </nav>)
}
export default Header