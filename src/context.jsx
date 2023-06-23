import React, { useContext, useEffect, useState } from "react";

export const WeatherContext = React.createContext();

const WeatherProvider = ({ children }) => {
    const [cityName, setCityName] = useState("");
    const [switchPage, setSwitchPage] = useState("H");
    const [currentCityData, setCurrentCityData] = useState({
        temp: 0,
        country: "",
        currentIcon: "",
        weatherType: "",
        feelsLike: "",
        maxTemp: 0,
        humidity: 0,
        windSpeed: 0
    });
    const [show, setShow] = useState(false);

    const fetchingCurrentData = async () => {
        setCurrentCityData({
            temp: 0,
            currentIcon: "",
            weatherType: "",
            feelsLike: "",
            maxTemp: 0,
            humidity: 0,
            windSpeed: 0
        });
        try {
            const res = await fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=" +
                    cityName +
                    "&appid=422d9b549f260cc325650e2f823633fc"
            );
            const data = await res.json();
            console.log(data);
            const info = [data.main, data.sys, data.weather, data.wind];
            setCurrentCityData({
                temp: info[0].temp - 273.15,
                currentIcon: info[2][0].icon,
                weatherType: info[2][0].main,
                feelsLike: info[0].feels_like - 273.15,
                maxTemp: info[0].temp_max - 273.15,
                humidity: info[0].humidity,
                windSpeed: info[3].speed
            });
            setShow(true);
        } catch (error) {
            console.log(error.message);
        }
    };

    const fetchingForecastic = async () => {
        try {
            const res = await fetch(
                "https://api.openweathermap.org/data/2.5/forecast?q=" +
                    cityName +
                    "&appid=ac1d7bb080fbf54a4073009d37a37ec8"
            );
            const data = await res.json();
            console.log(data);
            setCurrentCityData(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <WeatherContext.Provider
            value={{
                cityName,
                setCityName,
                fetchingCurrentData,
                switchPage,
                setSwitchPage,
                fetchingForecastic,
                currentCityData,
                setCurrentCityData,
                show,
                setShow
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherProvider;
