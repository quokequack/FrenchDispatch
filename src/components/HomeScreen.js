import React from "react";
import '../styles/homescreen.css';
import { Link } from "react-router-dom";
export default function HomeScreen(){
    return(
      <div className="container">
        <div className="header">
          <img className="letters"alt="French Dispatch" src={require('../img/fd-letters.png')}/>
        </div>
        <div className="footer">
          <img className="zefirelli" alt="Zefirelli" src={require('../img/zefirelli.jpg')}/>
          <div className="centralize-btn">
            <Link to="/about" className="btn"><p className="btnTxt">Go to the magazine</p></Link>
          </div>
        </div>
      </div>
    );
}