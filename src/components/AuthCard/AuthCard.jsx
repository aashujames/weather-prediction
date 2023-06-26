import React from "react";
import Logo from "../../assets/SQ WH bg 1.png";
import "./authcard.css";
import leftCross from "../../assets/leftcross.png";
import rightCross from "../../assets/rightcross.png";

const AuthCard = ({ children, textFooter, link }) => {
    return (
        <div className="main-container">
            <div className="main-card">
                <div className="close">
                    <img src={leftCross} className="leftcross"></img>
                    <img src={rightCross} className="rightcross"></img>
                </div>
                <div className="card">
                    <div className="upper-section">
                        <div className="logo">
                            <img src={Logo} className="img-logo" />
                            <div className="heading">Forecasting</div>
                        </div>
                        <p className="para-header">
                            Enter your email address and password
                        </p>
                        {children}
                    </div>
                    <div>
                        <p className="text-footer">
                            {textFooter}
                            <span className="link">{link}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthCard;
