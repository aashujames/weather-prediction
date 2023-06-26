import React from "react";
import logo from "../../assets/SQ WH bg 1.png";
import current from "../../assets/current.png";
import report from "../../assets/reportdocs.png";
import sidebarImage from "../../assets/sidebarimage.png";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
    return (
        <div className="main-sidebar">
            <div className="top-sidebar">
                <div className="tside-logo-section">
                    <img src={logo} className="logo" />
                    <div className="fore-head">Forecasting</div>
                </div>
                <div className="tside-second-section">
                    <div className="hmain">Main</div>
                    <button className="btn-choice">
                        <Link to="/">
                            <div className="btn-choice-container">
                                <img src={current} />
                                <div>Dashboard</div>
                            </div>
                        </Link>
                    </button>
                    <button className="btn-choice">
                        <Link to="/forecast-report">
                            <div className="btn-choice-container2">
                                <img src={report} />
                                <div>Forecast report</div>
                            </div>
                        </Link>
                    </button>
                </div>
            </div>
            <div className="bottom-sidebar">
                <img className="sidebar-image" src={sidebarImage} />
            </div>
        </div>
    );
};

export default Sidebar;
