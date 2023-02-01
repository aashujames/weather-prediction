import React from "react";
import "./signup.css";
import Logo from "../../assets/SQ WH bg 1.png";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const Signup = () => {
    return (
        <div>
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
                        <div className="top-form">
                            <div className="form-inside">
                                <Input placeholder="Full Name" />
                                <Input placeholder="Phone Number" />
                                <Input type="email" placeholder="Email" />
                                <Input type="password" placeholder="Password" />
                            </div>
                            <Button>Signup</Button>
                        </div>
                        <div></div>
                    </div>
                    <div className="bottom-section">
                        Already have an Account ? Login
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
