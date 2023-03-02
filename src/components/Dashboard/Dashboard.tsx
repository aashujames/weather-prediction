import "./dashboard.css";
import leftIcon from "../../assets/navleft.png";
import rightIcon from "../../assets/Turnoff.png";
import locationPin from "../../assets/locationpin.png";
import sidebarImage from "../../assets/sidebarimage.png";
import logo from "../../assets/SQ WH bg 1.png";
import dashboard from "../../assets/dashboard.png";
import report from "../../assets/reportdocs.png";

const Dashboard = () => {
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
                            <select>
                                <input
                                    type="search"
                                    placeholder="Search..."
                                    required
                                />
                                <option defaultValue="">Varanasi</option>
                                <option value="New delhi">New delhi</option>
                            </select>
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
                        <button className="btn-dash">
                            <img src={dashboard} />
                            Dashboard
                        </button>
                        <button className="btn-report">
                            <img src={report} />
                            Forecast report
                        </button>
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
