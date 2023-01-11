import React from "react";
import '../styles/signup.css';
import { Link } from "react-router-dom";

export default function SignUp(){
    return(
        <body className="signup">
            <div className="headerSignUp">
                <div className="line"></div>
                <div className="text">
                    <h1>JOIN US!</h1>
                </div>
            </div>
            <div className="paragraph">
            <p>The magazine is dying but you can have access to the amazing and exciting last edition!</p>
            </div>
            <div className="form">
                <p className='formTxt'>NAME</p>
                <input type="text" className="formBox"></input>
                <p className="formTxt">EMAIL</p>
                <input type="email" className="formBox"></input>
                <p className="formTxt">PASSWORD</p>
                <input type="password" className="formBox"></input>
                <button type="submit" className="submitBtn">Sign Up</button>
            </div>
            <div className="footerSignUp">
                <p className="paragraph2">Do you already have an account?</p>
                <Link to="/signin" className="signinBtn"><p className="suBtnTxt">Sign In</p></Link>
            </div>
        </body>
    );
};