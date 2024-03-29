import React from "react";
import logo from "../../assets/SQ WH bg 1.png";
import current from "../../assets/current.png";
import report from "../../assets/reportdocs.png";
import sidebarImage from "../../assets/sidebar_img.avif";
import { Link } from "react-router-dom";
import "./sidebar.css";
import CloseIcon from "@mui/icons-material/Close";

const Sidebar = ({ showSidebar, ToggleSidebar }) => {
    return (
        <div className={showSidebar ? "main-sidebar active" : "main-sidebar"}>
            <div className="top-sidebar">
                <div className="t-icon" onClick={ToggleSidebar}>
                    <CloseIcon />
                </div>
                <div className="tside-section">
                    <div className="hmain">Main</div>
                    <button className="btn-choice">
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <div className="btn-choice-container">
                                <img src={current} />
                                <div className="txt-link">Dashboard</div>
                            </div>
                        </Link>
                    </button>

                    <button className="btn-choice">
                        <Link
                            to="/forecast-report"
                            style={{ textDecoration: "none" }}
                        >
                            <div className="btn-choice-container2">
                                <img src={report} />
                                <div className="txt-link">Forecast report</div>
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
