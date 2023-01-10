import React from "react";
import { Link } from "react-router-dom";
import '../styles/about.css';

export default function About(){
    return(
        <div className="about">
            <div className='containerAbout'>
            <div className="headerAbout">
                <div className="line"></div>
                <div className='text'>
                    <h1> THE MAGAZINE </h1>
                </div>
            </div>
            <div className='page'>
                <div className="line2"></div>
                <div className="text2">
                    <p>
                    In 1975, in the fictional French town of Ennui-sur-Blasé, Arthur Howitzer Jr, the editor of the magazine The French Dispatch, dies suddenly of a heart attack. According to the wishes expressed in his will, publication of the magazine is immediately suspended following one final farewell issue, in which four articles are published, along with an obituary.
                    </p>
                </div>
            </div>
            <div className="footerAbout">
                <Link to='/signup' className="signUpBtn"><p className="abtBtnTxt"> VIEW THE MAGAZINE </p></Link>
            </div>
            </div>
        </div>
    );
};