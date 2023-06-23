import React, { useContext, useEffect } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import { WeatherContext } from "../../context";

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

        // var currentTemp = parseInt(currentCityData.temp - 273.15);
    }

    return (
        <div>
            <Dashboard />
            <div className="center">
                {show && (
                    <div>
                        <img
                            src={`https://openweathermap.org/img/wn/${currentCityData.currentIcon}@2x.png`}
                        />
                        <div>{currentTime}</div>
                        <div>{parseInt(currentCityData.temp)}&#8451;</div>
                        <div>{currentCityData.weatherType}</div>
                        <div>{parseInt(currentCityData.feelsLike)}&#8451;</div>
                        <div>{parseInt(currentCityData.maxTemp)}&#8451;</div>
                        <div>{currentCityData.humidity}%</div>
                        <div>{currentCityData.windSpeed}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
