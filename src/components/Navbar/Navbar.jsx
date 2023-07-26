import React, { useContext, useEffect, useState } from "react";
import leftIcon from "../../assets/navleft.png";
import rightIcon from "../../assets/Turnoff.png";
import locationPin from "../../assets/locationpin.png";
import "./navbar.css";
import { WeatherContext } from "../../context";

const Navbar = ({ ToggleSidebar }) => {
    const {
        cityName,
        setCityName,
        fetchingCurrentData,
        switchPage,
        fetchingForecastic
    } = useContext(WeatherContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (switchPage === "H") {
            fetchingCurrentData();
        } else if (switchPage === "F") {
            fetchingForecastic();
        }
    };

    return (
        <div className="main-nav">
            <button className="left-button" onClick={ToggleSidebar}>
                <img src={leftIcon} className="left-icon" />
            </button>
            <div className="right-container">
                <div className="right-section">
                    <img src={locationPin} />
                    <div className="select-container">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={cityName}
                                onChange={(e) => setCityName(e.target.value)}
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
    );
};

export default Navbar;
