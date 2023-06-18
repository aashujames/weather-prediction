import React, { useState } from "react";
import leftIcon from "../../assets/navleft.png";
import rightIcon from "../../assets/Turnoff.png";
import locationPin from "../../assets/locationpin.png";
import "./navbar.css";

const Navbar = () => {
    const [cityName, setCityName] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const city_name = { cityName };
        console.log(city_name);
    };

    return (
        <div className="main-nav">
            <div className="lefticon-section">
                <img src={leftIcon} className="left-icon" />
            </div>
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
