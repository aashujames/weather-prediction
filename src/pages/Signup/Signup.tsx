import React from "react";
import "./signup.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import AuthCard from "../../components/AuthCard/AuthCard";
import InputSelect from "../../components/InputSelect/InputSelect";

const Signup = () => {
    return (
        <AuthCard textFooter="Already have an Account ? " link="Login">
            <div className="top-form">
                <div className="form-inside">
                    <Input type="text" placeholder="Full Name" />
                    <Input type="number" placeholder="Phone Number" />
                    <div className="select-container">
                        <select className="select">
                            <option defaultValue="Country">Country</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="Japan">Japan</option>
                        </select>
                    </div>
                    <Input type="email" placeholder="Email" />
                    <Input type="password" placeholder="Password" />
                </div>

                <Button className="signup-btn">Signup</Button>
            </div>
            <div className="terms-section">
                <p className="terms-para">
                    By registering you agree to the Forecasting. Terms of Use
                    and Privacy Policy
                </p>
            </div>
        </AuthCard>
    );
};

export default Signup;
