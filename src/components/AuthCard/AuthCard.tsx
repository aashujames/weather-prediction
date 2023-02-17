import React from "react";
import Logo from "../../assets/SQ WH bg 1.png";
import "./authcard.css";

interface AuthProps {
    children?: React.ReactNode;
    textFooter: string;
}

const AuthCard: React.FC<AuthProps> = ({ children, textFooter }) => {
    return (
        <div className="main-container">
            <div className="main-card">
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
                        <p>{textFooter}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthCard;
