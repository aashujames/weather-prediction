import React, { useContext, useEffect } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import { WeatherContext } from "../../context";

const ForecastReport = () => {
    const { setSwitchPage } = useContext(WeatherContext);

    useEffect(() => {
        setSwitchPage("F");
    }, []);

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
