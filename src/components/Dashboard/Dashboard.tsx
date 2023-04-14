import "./dashboard.css";
import leftIcon from "../../assets/navleft.png";
import rightIcon from "../../assets/Turnoff.png";
import locationPin from "../../assets/locationpin.png";
import sidebarImage from "../../assets/sidebarimage.png";
import logo from "../../assets/SQ WH bg 1.png";
import current from "../../assets/current.png";
import report from "../../assets/reportdocs.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const [cityName, setCityName] = useState("");

    return (
        <div className="main-container">
            <div className="main-nav">
                <div className="lefticon-section">
                    <img src={leftIcon} className="left-icon" />
                </div>
                <div className="right-container">
                    <div className="right-section">
                        <img src={locationPin} />
                        <div className="select-container">
                            <form>
                                <input
                                    type="text"
                                    value={cityName}
                                    onChange={(e) =>
                                        setCityName(e.target.value)
                                    }
                                    placeholder="City name"
                                />
                            </form>
                        </div>
                    </div>
                    <div className="righticon-section">
                        <img src={rightIcon} className="right-icon" />
                    </div>
                </div>
            </div>
            <div className="main-sidebar">
                <div className="top-sidebar">
                    <div className="tside-logo-section">
                        <img src={logo} className="logo" />
                        <div className="fore-head">Forecasting</div>
                    </div>
                    <div className="tside-second-section">
                        <div className="hmain">Main</div>
                        <Link to="/current-weather">
                            <button className="btn-choice">
                                <div className="btn-choice-container">
                                    <img src={current} />
                                    <div>Current Weather</div>
                                </div>
                            </button>
                        </Link>
                        <Link to="/forecast-report">
                            <button className="btn-choice">
                                <div className="btn-choice-container2">
                                    <img src={report} />
                                    <div>Forecast report</div>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="bottom-sidebar">
                    <img className="sidebar-image" src={sidebarImage} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
