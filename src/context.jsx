import moment from "moment";
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
    const [forecastData, setForecastData] = useState([]);

    //Get the current weather data of a city
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
                    `&appid=${import.meta.env.VITE_REACT_APP_CURRENT_API_KEY}`
            );
            const data = await res.json();
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

    //Get the forecast weather data of a city
    const fetchingForecastic = async () => {
        setForecastData([]);
        try {
            const res = await fetch(
                "https://api.openweathermap.org/data/2.5/forecast?q=" +
                    cityName +
                    `&appid=${import.meta.env.VITE_REACT_APP_FORECAST_API_KEY}`
            );
            const data = await res.json();
            const originalArray = data.list;
            setForecastData(
                originalArray
                    .slice(6, 29)
                    .filter((_, index) => index % 2 === 0) // Skip every next item
                    .map((item) => {
                        const [date, time] = item.dt_txt.split(" "); // Split dt_txt into date and time
                        const formattedDate = moment(date).format("DD-MM");

                        const formattedTime = moment(time, "HH:mm:ss").format(
                            "hh:mm A"
                        );

                        return {
                            date: formattedDate,
                            time: formattedTime,
                            temp: item.main.temp - 273.15,
                            icon: item.weather[0].icon
                        };
                    })
            );
            setShow(true);
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
                setShow,
                forecastData,
                setForecastData
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherProvider;
