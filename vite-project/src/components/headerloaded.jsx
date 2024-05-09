import React from "react";
import "../css/header.css"
import {Link} from "react-router-dom"

function headerloaded() {
    return (
      <header>
        <div className="header-row">
          <div className="container">
            <div className="header-wrapper">
              <div className="header-left">
                  <div className="logo">LOGO</div>
              </div>
              <div className="header-center">
                <nav className="navigation">
                  <ul className="menü-list">
                
                    <li className="menü-list-item"><Link to="/arkadaslarim">Arkadaşlarım</Link></li>
                    <li className="menü-list-item"><Link to="/home">Anasayfa</Link></li>
                    <li className="menü-list-item"><Link to="/yeniarkadasbul">Yeni arkadaş bul</Link></li>
                  </ul>
                </nav>
              </div>
              <div className="header-right"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }
  
  export default headerloaded;
  