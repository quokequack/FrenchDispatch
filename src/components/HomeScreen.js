import React from "react";
import '../styles/homescreen.css';

export default function HomeScreen(){
    return(
        <div className="container">
      <div className="header">
        <img className="letters"alt="French Dispatch" src={require('../img/fd-letters.png')}/>
      </div>
      <div className="footer">
        <img className="zefirelli" alt="Zefirelli" src={require('../img/zefirelli.jpg')}/>
        <a href={""} className="btn"><p className="btnTxt">Go to the magazine</p></a>
      </div>
    </div>
    );
}