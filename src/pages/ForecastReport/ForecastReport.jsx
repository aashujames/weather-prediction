import React, { useContext, useEffect, useState } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import { WeatherContext } from "../../context";
import "./forecastReport.css";

const ForecastReport = () => {
    const { setSwitchPage, show, setShow, forecastData, setForecastData } =
        useContext(WeatherContext);

    useEffect(() => {
        setSwitchPage("F");
        setForecastData([]);
        setShow(false);
    }, []);

    if (show) {
        console.log(forecastData);
    }

    return (
        <div>
            <Dashboard />
            <h3 className="forecast-heading">Forecast Report</h3>
            <div className="main">
                <div className="main-inside">
                    {forecastData.map((info) => {
                        return (
                            <div className="container">
                                <div>{info.date}</div>
                                <div>{info.time}</div>
                                <img
                                    src={`https://openweathermap.org/img/wn/${info.icon}@2x.png`}
                                />
                                <div style={{ fontWeight: "400" }}>
                                    {parseInt(info.temp)}&#8451;
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ForecastReport;
