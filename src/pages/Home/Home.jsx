import React, { useContext, useEffect } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import { WeatherContext } from "../../context";
import "./home.css";

const Home = () => {
    const {
        setSwitchPage,
        setCurrentCityData,
        currentCityData,
        show,
        setShow
    } = useContext(WeatherContext);

    useEffect(() => {
        setSwitchPage("H");
        setCurrentCityData({
            temp: 0,
            currentIcon: "",
            weatherType: "",
            feelsLike: "",
            maxTemp: 0,
            humidity: 0,
            windSpeed: 0
        });
        setShow(false);
    }, []);

    if (show && currentCityData) {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? "pm" : "am";
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes.toString().padStart(2, "0");
        var currentTime = hours + ":" + minutes + " " + ampm;

        var speed = (currentCityData.windSpeed * 3.6).toFixed(1);
    }

    return (
        <div>
            <Dashboard />
            <h3 className="home-heading">Current Weather</h3>
            <div className="h-main">
                {show && (
                    <div className="h-wrap">
                        <div className="h-top-container">
                            <img
                                src={`https://openweathermap.org/img/wn/${currentCityData.currentIcon}@2x.png`}
                            />
                        </div>
                        <div className="h-bottom-container">
                            <div className="time-container">
                                <div style={{ color: "White" }}>
                                    {currentTime}
                                </div>
                            </div>
                            <div className="current-temp-container">
                                <div className="current-temp">
                                    {parseInt(currentCityData.temp)}&#8451;
                                </div>
                            </div>
                            <div className="weatherType-container">
                                <div
                                    style={{ color: "White" }}
                                    className="weather-type"
                                >
                                    {currentCityData.weatherType}
                                </div>
                            </div>
                            <div className="more-info-container">
                                <div className="inner-info-container">
                                    <div className="info-title">Feels Like</div>
                                    <div style={{ color: "White" }}>
                                        {parseInt(currentCityData.feelsLike)}
                                        &#8451;
                                    </div>
                                </div>
                                <div className="inner-info-container">
                                    <div className="info-title">
                                        Max Temperature
                                    </div>
                                    <div style={{ color: "White" }}>
                                        {parseInt(currentCityData.maxTemp)}
                                        &#8451;
                                    </div>
                                </div>
                                <div className="inner-info-container">
                                    <div className="info-title">Humidity</div>
                                    <div style={{ color: "White" }}>
                                        {currentCityData.humidity}%
                                    </div>
                                </div>
                                <div className="inner-info-container">
                                    <div className="info-title">Wind Speed</div>
                                    <div style={{ color: "White" }}>
                                        {speed} km/h
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
0;
