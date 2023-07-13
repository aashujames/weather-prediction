import React, { useContext, useEffect, useState } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import { WeatherContext } from "../../context";

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
            <div className="center">
                <div>forecast here</div>
            </div>
        </div>
    );
};

export default ForecastReport;
