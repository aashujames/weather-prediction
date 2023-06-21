import React, { useContext, useEffect } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import { WeatherContext } from "../../context";

const Home = () => {
    const { setSwitchPage, setCityData, cityData } = useContext(WeatherContext);

    useEffect(() => {
        setSwitchPage("H");
        setCityData({ main: {}, sys: {} });
    }, []);

    if (cityData) {
        var currentTemp = parseInt(cityData.main.temp - 273.15);
    }

    return (
        <div>
            <Dashboard />
            <div className="center">
                {cityData && (
                    <div>
                        <div>{currentTemp}</div>
                        <div>{cityData.sys.country}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
