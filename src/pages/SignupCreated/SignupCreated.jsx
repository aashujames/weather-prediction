import "./signupCreated.css";
import Logo from "../../assets/SQ WH bg 1.png";
import leftCross from "../../assets/leftcross.png";
import rightCross from "../../assets/rightcross.png";
import signedUp from "../../assets/Signedup.png";

const SignupCreated = () => {
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
                        <div className="center-section">
                            <div className="up-center">
                                <div className="logo-section">
                                    <img
                                        className="logo-center"
                                        src={signedUp}
                                    />
                                </div>
                                <div className="congrats-section">
                                    Congratulations
                                </div>
                            </div>
                            <div className="down-center">
                                Your Account Created Successfully
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-footer">Back to Signup</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupCreated;
